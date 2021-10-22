import './App.css';
import Header from "./Components/Header"
import Items from './Components/Items'
import Footer from './Components/Footer'
import ResuableFooter from './Components/ResuableFooter'
import React, { Component } from "react"

//need to assign correct filtering values
//need to complete buttons functionailty (trash and check)
//make sure count is correct

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: [],
            inputText: '',
            filterBy: 'all',
            initialState: this.clearAll()
        }

        this.createNewItem = this.createNewItem.bind(this);
        this.filterState = this.filterState.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.trashItem = this.trashItem.bind(this);
        this.checkItem = this.checkItem.bind(this);
        this.checkAll = this.checkAll.bind(this);
        this.restoreAll = this.restoreAll.bind(this);
    }

    getInitialState = () => ({
        allItems: [],
        inputText: '',
        filterBy: 'all',
    })

    createNewItem(event) {
        event.preventDefault()
        if (this.state.inputText !== '') {

            let smartObj =
            {
                key: Date.now(),
                completedItem: false,
                deleteItem: false,
                inputText: this.state.inputText
            }

            this.setState(previousState => {
                let newAllItems = [smartObj, ...previousState.allItems]
                //console.log(newAllItems)
                let newState = {
                    allItems: newAllItems,
                    inputText: '',
                    filterBy: 'active'
                }
                return newState
            });
        }
    }

    componentDidMount() {
        //console.log('set tasks in local storage')
        let storage = window.localStorage.getItem('allItems')
        if (storage) {
            this.setState({ allItems: JSON.parse(storage) })
        }
        else {
            window.localStorage.setItem('allItems', JSON.stringify(this.state.allItems));
        }
    }
    componentDidUpdate() {
        //console.log('add tasks in local storage')
        window.localStorage.setItem('allItems', JSON.stringify(this.state.allItems))
    }

    trashItem(key) {
        //console.log("trash")
        let deletedTask = this.state.allItems.map(item => {
            if (item.key === key) {
                item.deleteItem = !item.deleteItem
            }
            return item
        });
        this.setState({
            allItems: deletedTask,
            // inputText : this.state.allItems.length
        })
    }

    checkItem(key) {
        //console.log('check item')
        let checkedToDo = this.state.allItems.map(item => {
            if (item.key === key) {
                item.completedItem = !item.completedItem
            }
            return item
        });
        this.setState({
            allItems: checkedToDo,
            //totalItems : this.state.allItems.length - 1
        })
    }

    clearAll = () => {
        //console.log('clear all')
        this.setState(this.getInitialState());
    }

    checkAll() {
        console.log("add all")
        let allChecked = this.state.allItems.filter(item => !item.completedItem)

        this.setState({
            allChecked: allChecked.map(item => item.completedItem = true)
            //filterBy: allChecked,
            //totalItems : this.state.allItems.length - 1
        })
    }

    restoreAll() {
        let allChecked = this.state.allItems.filter(item => item.completedItem)

        this.setState({
            allChecked: allChecked.map(item => item.completedItem = false)
        })
    }

    filterState(newFilterState) {
        //console.log(newFilterState)
        this.setState({
            filterBy: newFilterState,
        })
    }

    filterToDo() {
        if (this.state.filterBy === 'all')
            return this.state.allItems.filter(item => !item.deleteItem)
        if (this.state.filterBy === 'completed')
            return this.state.allItems.filter(item => item.completedItem && !item.deleteItem)
        if (this.state.filterBy === 'active')
            return this.state.allItems.filter(item => !item.completedItem && !item.deleteItem)
    }

    getTotal (){
        return this.state.allItems.filter( item => !item.deleteItem).length
    }

    handleChange(event) {
        this.setState({
            inputText: event.target.value
        });
    }

    render() {
        let filteredArray = this.filterToDo()
        return (
            <>
                <div className="">
                    <h1 className="text-center">
                        To Do List
                    </h1>
                </div>
                <div className='container'>
                    <div className='row d-flex justify-content-center'>

                        <Header
                            createNewItem={this.createNewItem}
                            value={this.state.inputText}
                            handleChange={this.handleChange}
                        />

                        {filteredArray.map((obj, index) =>

                            <Items
                                trashItem={this.trashItem}
                                checkItem={this.checkItem}
                                text={obj.inputText}
                                key={index}
                                id={obj.key}
                                complete={obj.completedItem}>
                            </Items>
                        )}

                        <Footer
                            filterState={this.filterState}
                            clearAll={this.clearAll}
                            totalItems={filteredArray.length}
                            everythingItems={this.getTotal()}
                            checkAll={this.checkAll}
                            restoreAll={this.restoreAll}
                        />
                        <ResuableFooter />
                    </div>
                </div>

            </>
        );
    }
}

export default App;