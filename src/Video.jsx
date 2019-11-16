import React, {Component} from 'react'
class Video extends Component {
    render () {
        return (
            <div>
                <div>{this.props.header}</div>
                <iframe src={"https://player.vimeo.com/video/"+ this.props.videoId}
                   width = "640" height="360" frameBoder ="0"/>
                <div>{this.props.footer}</div>
            </div>
        )
    }
}
export default Video
