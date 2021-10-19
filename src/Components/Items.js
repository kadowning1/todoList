import React, { Component } from "react"


// //------------Model----------//
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuData: {},
        }
        this.activeList = false;
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
            
            <div className="col-md-4 col-sm-12 py-2 justify-content-center">
                <div className="card card-body flex-column text-center p-3 mb-2 bg-success text-white h-100">
                    <p>${Math.ceil(Math.random() * 25.32).toFixed(2)} Holiday Pricing</p>
                </div>
            </div>
        )
    }

}

export default Items;