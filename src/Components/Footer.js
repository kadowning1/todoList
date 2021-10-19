import React, { Component } from "react"


// //------------Model----------//
class Footer extends Component {
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
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary">All</button>
                <button type="button" className="btn btn-outline-primary">Active</button>
                <button type="button" className="btn btn-outline-primary">Completed</button>
                <button type="button" className="btn btn-outline-primary">Clear Completed</button>
            </div>
        );
    }
}

export default Footer;