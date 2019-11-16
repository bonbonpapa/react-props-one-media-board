import React, { Component } from 'react'
class ImageWidget extends Component {
    render () {
        return (
            <div>
                <img src={this.props.url} width="400px"></img>  
                <div>{this.props.description}</div>
            </div>      
        )

    }
}
export default ImageWidget
