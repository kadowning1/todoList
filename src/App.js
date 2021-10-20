import './App.css';
import Header from "./Components/Header"
import Items from './Components/Items'
import Footer from './Components/Footer'
import React, { Component } from "react"

//need to assign correct filtering values
//need to complete buttons (trash and check)
//need to add LocalStorage and Stringify
//style

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

    }

    getInitialState = () => ({
        allItems: [],
        inputText: '',
        filterBy: 'all',
    })

    componentDidUpdate() {
        console.log('add tasks in local storage')
    }

    componentDidMount() {
        console.log('set tasks in local storage')
    }

    createNewItem(event) {
        event.preventDefault()

        let smartObj =
        {
            key: Date.now(),
            checkedItem: false,
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

    trashItem() {
         // need to reference smart obj to flip deleteItem to true
         console.log("trash")
        this.setState({
            allItems: this.allItems.length - 1,
            deleteItem: true,
            filterBy: '' //all items minus completed items
        })
    }

    checkItem() { // need to reference smart obj to flip checkedItem to true
        console.log('check item')
        this.setState({
            allItems: this.allItems.length - 1,
            checkedItem: true,
            filterBy: 'completed'
        })
    }

    clearAll = () => {
        this.setState(this.getInitialState());
    }

    filterState(newFilterState) {
        console.log(newFilterState)

        this.setState({
            filterBy: newFilterState,
        })

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

                        {this.state.allItems.map((obj, index) =>
                        
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
                        />
                    </div>
                </div>

            </>
        );
    }
}

export default App;