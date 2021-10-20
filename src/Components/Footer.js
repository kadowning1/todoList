//import React, { Component } from "react"

import React from 'react'

export default function Footer(props) {
    console.log(props)



    return (
        <div className='col-12 text-center justify-content-center'>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <div className='h5 d-flex justify-content-start'> Count: {props.totalItems}
                    <br></br>
                    </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-12 text-center justify-content-center'>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => props.filterState('all')}>All</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => props.filterState('active')}>Active</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={() => props.filterState('completed')}>Completed</button>
                    <button type="button" className="btn btn-outline-secondary" onClick={props.clearAll}>Clear All</button>
                </div>
            </div>
        </div>

    );
}
