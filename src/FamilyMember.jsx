import React, { Component } from 'react'
class FamilyMember extends Component {
    render () {
        return (
            <div>
             <div>{this.props.title}</div>  
             <div>{this.props.saying}</div>  
            </div>      
        )

    }
}
export default FamilyMember
