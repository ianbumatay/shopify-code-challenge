import React, { Component } from 'react'

export default class like extends Component { 

    state = { 
        toggle: false
    } 


    render() {
        return (
            <div>
                <button>{this.state.toggle ? "Like" : "Unlike"}</button>    
            </div>
        )
    }
}
