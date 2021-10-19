import React, { Component } from "react"


// //------------Model----------//
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            allItems: [],
            
        }

    }

    componentDidUpdate() {
        console.log('update component')
    }

    componentDidMount() {
        console.log('regulators mount up')
        console.log('Items props:', this.props)

    }

    createNewItem (){ // update function name to make more sense
       // beginning of smart object
        // {key: Date.now(),
        //     checkedItem: false,
        //     deleteItem: false,}

    }

    //------------------View-----------------//
    render() {

        return (
            <div className='row'>
                <div className="col-lg-2 col-sm-12 py-2">
                    <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                        <button
                            type="button" className="col-2 btn btn-social-icon btn-twitter btn-rounded">
                            <i className="fas fa-check-circle"></i>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12 py-2">
                    <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                        <h1>{this.state.inputText}</h1>
                    </div>
                </div>
                <div className="col-lg-2 col-sm-12 py-2">
                    <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100 justify-content-center">
                        <button
                            type="button" className="col-2 btn btn-social-icon btn-twitter btn-rounded justify-content-center">
                            <i className="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default Items;