//import React, { Component } from "react"

import React from 'react'

export default function Header(props) {
    return (
        <div className="col-lg-8 col-sm-12 py-2">
            <div className="card card-body flex-column text-center p-3 mb-2 bg-secondary text-white h-100 justify-content-center">
                <form className="text-center justify-content-center" onSubmit={props.createNewItem}>
                    <label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Add Task"
                            value={props.value}
                            onChange={props.handleChange}
                        />
                    </label>
                    <input type="submit" value="Add New Task" />
                </form>
            </div>
        </div>
    )
}