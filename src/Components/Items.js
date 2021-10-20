import React, { Component } from "react"

// //------------Model----------//
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }

    }

    //------------------View-----------------//
    render(props) {

        return (

            <div className='row d-flex justify-content-center'>
                <div className="col-2 py-2">
                    <div className="card card-body flex-column p-3 mb-2 bg-secondary text-white h-100">
                        <button
                            type="button"
                            className="col-2 btn btn-social-icon btn-twitter btn-rounded mx-auto"
                            onClick={props.checkItem}>
                            <i className="fas fa-check-circle">
                            </i>
                        </button>
                    </div>
                </div>
                <div className="col-8 py-2">
                    <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                        <h1 className='text-center'>
                            {this.props.text}
                        </h1>
                    </div>
                </div>
                <div className="col-2 py-2 text-center">
                    <div className="card card-body text-center p-3 mb-2 bg-secondary text-white h-100">
                        <button
                            type="button"
                            className="col-2 btn btn-social-icon btn-twitter btn-rounded justify-content-center mx-auto"
                            onClick={props.trashItem}>
                            <i className="fas fa-trash-alt">
                            </i>
                        </button>
                    </div>
                </div>
            </div>

        )
    }
}

export default Items;