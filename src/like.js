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
            <div >
                <button onClick={this.handleClick}>{this.state.toggled ? "Unlike" : "Like"}</button>    
            </div>
        )
    }
}
