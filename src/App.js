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
            filterBy: 'All',
            totalItems: 0
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
                <div className='container'>
                    <div className='row justify-content-center'>
                        <Header />
                        <Items text='this.state.inputText'/>
                        <Footer />
                    </div>
                </div>
            </>

        );
    }
}


export default App;
