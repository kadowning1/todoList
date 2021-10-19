//import React, { Component } from "react"

import React from 'react'

export default function Footer() {
    return (
        <div className='row'>
                <div className='col-12 text-center justify-content-center'>
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-secondary">All</button>
                        <button type="button" className="btn btn-outline-secondary">Active</button>
                        <button type="button" className="btn btn-outline-secondary">Completed</button>
                        <button type="button" className="btn btn-outline-secondary">Clear Completed</button>
                    </div>
                </div>
            </div>
        );
}


// //------------Model----------//
// class Footer extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             filterBy : 'All'
//         }
//     }

//     componentDidUpdate() {
//         console.log('update component')
//     }

//     componentDidMount() {
//         console.log('regulators mount up')

//     }

//     //------------------View-----------------//
//     render() {
//         return (
//             <div className='row'>
//                 <div className='col-12 text-center justify-content-center'>
//                     <div className="btn-group" role="group" aria-label="Basic outlined example">
//                         <button type="button" className="btn btn-outline-primary">All</button>
//                         <button type="button" className="btn btn-outline-primary">Active</button>
//                         <button type="button" className="btn btn-outline-primary">Completed</button>
//                         <button type="button" className="btn btn-outline-primary">Clear Completed</button>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default Footer;