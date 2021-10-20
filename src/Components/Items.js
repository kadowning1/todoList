import React, { Component } from "react"

//import React from 'react'

// export default function Items() {
//     return (
//         <div className='row'>
//             <div className="col-lg-2 col-sm-12 py-2">
//                 <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
//                     <button
//                         type="button" className="col-2 btn btn-social-icon btn-twitter btn-rounded">
//                         <i className="fas fa-check-circle"></i>
//                     </button>
//                 </div>
//             </div>
//             <div className="col-lg-8 col-sm-12 py-2">
//                 <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
//                     <h1>
//                     {this.state.inputText}
//                     Test
//                     </h1>
//                 </div>
//             </div>
//             <div className="col-lg-2 col-sm-12 py-2">
//                 <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100 justify-content-center">
//                     <button
//                         type="button" className="col-2 btn btn-social-icon btn-twitter btn-rounded justify-content-center">
//                         <i className="fas fa-trash-alt"></i>
//                     </button>
//                 </div>
//             </div>
//         </div>
//     )
// }



// //------------Model----------//
class Items extends Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }
    }


    trashItem() {
        this.setState({

        })
    }

    checkItem() {

    }


    //------------------View-----------------//
    render() {

        return (
            <div className='justify-content-center'>
                <div className='row'>
                    <div className="col-2 py-2 justify-content-center">
                        <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                            <button
                                type="button"
                                className="col-2 btn btn-social-icon btn-twitter btn-rounded"
                                onClick={this.checkItem}>
                                <i className="fas fa-check-circle">
                                </i>
                            </button>
                        </div>
                    </div>
                    <div className="col-8 py-2">
                        <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                            <h1>
                                {this.state.inputText}
                            </h1>
                        </div>
                    </div>
                    <div className="col-2 py-2">
                        <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100 justify-content-center">
                            <button
                                type="button"
                                className="col-2 btn btn-social-icon btn-twitter btn-rounded justify-content-center"
                                onClick={this.trashItem}>
                                <i className="fas fa-trash-alt">
                                </i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Items;