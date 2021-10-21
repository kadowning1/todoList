import React, { Component } from "react"

// //------------Model----------//
class Items extends Component {


    //------------------View-----------------//
    render(props) {

        return (

            <div className='row'>
                <div className="col-2 py-2">
                    {/* <div className="card card-body p-3 mb-2 bg-secondary text-white h-100 d-grid mx-auto"> */}
                    <button
                        type="button"
                        className="btn btn-rounded mx-auto bg-secondary text-white h-100 d-flex align-items-center"
                        onClick={this.props.checkItem}>
                        <i className="fas fa-check-circle">
                        </i>
                    </button>
                </div>

                <div className="col-8 py-2">
                    {/* <div className="card card-body flex-column text-center mb-2 bg-secondary text-white h-100"> */}
                    <h1 className='justify-content-center bg-secondary text-white h-100 d-flex mb-2'>
                        {this.props.text}
                    </h1>
                </div>

                <div className="col-2 py-2 text-center h-100">
                    <button
                        type="button"
                        className="btn btn-rounded mx-auto bg-secondary text-white h-100 d-flex align-items-center"
                        onClick={this.props.trashItem}>
                        <i className="fas fa-trash-alt">
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Items;