import React, { Component } from "react"


// //------------Model----------//
class Header extends Component {
    constructor(props) {
        super(props)
        this.inputText = '';
    }

    componentDidUpdate() {
        console.log('update component')
    }

    componentDidMount() {
        console.log('regulators mount up')

    }

    //------------------View-----------------//
    render() {
        return (
            <div className="">
                <h1 className="text-center">
                    To Do List!
            </h1>
            </div>
        );
    }
        
}



export default Header;