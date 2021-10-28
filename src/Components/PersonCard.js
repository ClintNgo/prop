import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            name:''
        }
    }
    
    render(){
        return<div>
            <h1>{ this.props.yournamehere }</h1>
            { this.props.children }
        </div>
    }
}

export default PersonCard