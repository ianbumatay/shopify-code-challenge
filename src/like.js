import React, { Component } from 'react'

export default class like extends Component { 

    state = { 
        toggled: false
    }  

    handleClick = () => {
        this.setState(prevState => {
            return {toggled: !prevState.toggled}
        })
    }


    render() {
        return (
            <div>
                <button>{this.state.toggle ? "Like" : "Unlike"}</button>    
            </div>
        )
    }
}
