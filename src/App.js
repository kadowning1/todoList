import './App.css';
import Header from "./Components/Header"
import Items from './Components/Items'
import Footer from './Components/Footer'
import React, { Component } from "react"

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: [],
            inputText: 'Keith',
            filterBy: 'all',
            totalItems: 0
        }
    }

    componentDidUpdate() {
        console.log('add tasks in storage')
    }

    componentDidMount() {
        console.log('set tasks in storage')
        this.createNewItem();
    }

    // addTaskButton(e) => {this.setState({key:e.target.value})}


    createNewItem() { // update function name to make more sense
        //beginning of smart object
        let smartObj =
        {
            key: Date.now(),
            checkedItem: false,
            deleteItem: false,
        }
        if (this.state.inputText !== '')
            this.setState({
                totalItems: this.state.totalItems + 1,
            });
        console.log(smartObj)
    }

    deleteItem() {
        this.setState({
            totalItems: this.state.totalItems - 1,
        })
    }

    returnAll() {
        this.setState({
            filterBy: 'all',
        })
    }

    returnCompleted() {
        this.setState({
            filterBy: 'completed',
        })
    }

    showActive() {
        this.setState({
            filterBy: 'active',
        })
    }

    clearAll() {
        this.setState({
            // remove allItems from Local Storage
        })
    }

    viewCount() {
        this.setState({
            totalItems: this.state.totalItems
        })
    }

    filterState(item) {
        if (this.state.filterBy === 'completed') {
            return this.returnCompleted();
        }
        if (this.state.filterBy === 'all') {
            return this.returnAll();
        }
        if (this.state.filterBy === 'active') {
            return this.showActive();
        }
    }

    render() {
        console.log('App props:', this.state.inputText)
        return (
            <>
                <div className="">
                    <h1 className="text-center">
                        To Do List
            </h1>
                </div>
                <div className='container justify-content-center'>
                    <div className='row justify-content-center'>
                        <Header />
                        <Items />
                        <Footer />
                    </div>
                </div>
            </>

        );
    }
}

export default App;