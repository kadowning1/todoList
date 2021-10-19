//import React, { Component } from "react"

import React from 'react'

export default function Header() {
    return (
        <div className="col-lg-8 col-sm-12 py-2">
                    <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
                        <form className="text-center">
                            <label>
                                <input type="text" name="name" placeholder="Add Task" />
                            </label>
                            <input type="submit" value="Add New Task" />
                        </form>
                    </div>
                </div>
    )
}


// // //------------Model----------//
// class Header extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {inputText : ''}
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
//             // <h2>Organize Your Day</h2>
            
//               <div className="col-lg-8 col-sm-12 py-2">
//                     <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100">
//                         <form className="text-center">
//                             <label>
//                                 <input type="text" name="name" placeholder="Add Task" />
//                             </label>
//                             <input type="submit" value="Add New Task" />
//                         </form>
//                     </div>
//                 </div>
//         );
//     }
        
// }



// export default Header;