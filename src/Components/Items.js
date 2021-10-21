import React, { Component } from "react"

// //------------Model----------//
class Items extends Component {



    //------------------View-----------------//
    render(props) {
        console.log(this.props.complete)
        return (

            <div className='row'>
                <div className="col-2 py-2">
                    {/* <div className="card card-body p-3 mb-2 bg-secondary text-white h-100 d-grid mx-auto"> */}
                    <button
                        type="button"
                        className="btn btn-rounded mx-auto bg-secondary text-white h-100 d-flex align-items-center"
                        onClick={() => this.props.checkItem(this.props.id)}>
                        <i className="fas fa-check-circle">
                        </i>
                    </button>
                </div>

                <div className="col-8 py-2">
                    {/* <div className="card card-body flex-column text-center mb-2 bg-secondary text-white h-100"> */}
                    <h1 className='rounded justify-content-center bg-secondary text-white h-100 d-flex mb-2'>
                        {this.props.complete
                            ? (<strike>{this.props.text}</strike>)
                            : (this.props.text)
                        }
                    </h1>
                </div>

                <div className="col-2 py-2 text-center h-100">
                    <button
                        type="button"
                        className="btn btn-rounded mx-auto bg-secondary text-white h-100 d-flex align-items-center"
                        onClick={() => this.props.trashItem(this.props.id)}>
                        <i className="fas fa-trash-alt">
                        </i>
                    </button>
                </div>
            </div>
        )
    }
}

export default Items;