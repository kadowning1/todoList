import './App.css';
import Header from "./Components/Header"
import Items from './Components/Items'
import Footer from './Components/Footer'
import React, { Component } from "react"

//need to assign correct filtering values
//need to complete buttons functionailty (trash and check)
//need to add LocalStorage and Stringify
//not be able to click an empty field
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

    }

    getInitialState = () => ({
        allItems: [],
        inputText: '',
        filterBy: 'all',
    })

    createNewItem(event) {
        event.preventDefault()
        if (!this.state.inputText)
            alert('Please add a to do')

        let smartObj =
        {
            key: Date.now(),
            completedItem: false,
            deleteItem: false,
            inputText: this.state.inputText
        }

        this.setState(previousState => {
            let newAllItems = [smartObj, ...previousState.allItems]
            console.log(newAllItems)
            let newState = {
                allItems: newAllItems,
                inputText: '',
                filterBy: 'active'
            }
            return newState
        });
    }

    // componentDidMount() {
    //     console.log('set tasks in local storage')
    //     let storage = window.localStorage.getItem('allItems')
    //     if (storage) {
    //         this.setState({ allItems: JSON.parse(storage) })
    //     }
    //     else {
    //         window.localStorage.setItem('allItems', JSON.stringify(this.state.allItems));

    //     }
    // }
    // componentDidUpdate() {
    //     console.log('add tasks in local storage')
    //     window.localStorage.setItem('allItems', JSON.stringify(this.state.allItems))
    // }

    trashItem(key) {
        // need to filter through items to see filterby status
        console.log("trash")
        let deletedTask = this.state.allItems.filter((allItems) => allItems.key !== key);
        this.setState({
            allItems: deletedTask
            // allItems: this.allItems.length - 1,
            // deleteItem: true,
            // filterBy: '' //all items minus completed items
        })
    };

    checkItem(key) { // need to filter through item --- cross off item
        console.log('check item')
        let checkedToDo = this.state.allItems.map((allItems) => {
            if (allItems.key === key) {
                allItems.completedItem = true
            }
            return allItems;
        });
        this.setState({
            allItems: checkedToDo
            // allItems: this.allItems.length - 1,
            // checkedItem: true,
            // filterBy: 'completed'
        })
    }

    clearAll = () => {
        this.setState(this.getInitialState());
    }

    checkAll(item) {
        let allChecked = this.state.allItems.map((allItems) => {
            if (allItems.filterBy === 'completed') {
            }
            return item
        })
        this.setState({
            filterBy: allChecked
        })
    }

    filterState(newFilterState) {
        console.log(newFilterState)
        this.setState({
            filterBy: newFilterState,
        })
    }

    filterToDo(item) {
        if (this.filterState() === 'all')
            return item
        if (this.filterState() === 'completed')
            return item.completedItem === true;
        if (this.filterState() === 'active')
            return item.completedItem === false;
    }

    handleChange(event) {
        this.setState({ inputText: event.target.value });
    }

    render() {

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

                        {this.state.allItems.filter(this.filterToDo).map((obj, index) =>

                            <Items
                                trashItem={this.trashItem}
                                checkItem={this.checkItem}
                                text={obj.inputText}
                                key={index}></Items>
                        )}

                        <Footer
                            filterState={this.filterState}
                            clearAll={this.clearAll}
                            totalItems={this.state.allItems.length}
                            addAll={this.addAll}
                        />
                    </div>
                </div>

            </>
        );
    }
}

export default App;