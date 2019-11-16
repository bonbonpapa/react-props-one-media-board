import './main.css'
import React, { Component } from 'react'
import { videos, sounds, images, familyMembers } from './Data.jsx'
import Video from './Video.jsx'
import SoundWidget from './SoundWidget.jsx'
import ImageWidget from './ImageWidget.jsx'
import FamilyMember from './FamilyMember.jsx'

class App extends Component {
    render () { 
        return (<div>  
            {
              videos.map(vd => {
                    return (
                    <Video
                        header = {vd.name}
                        videoId = {vd.id} 
                        footer = {vd.caption}
                    />)
                }) 
            }  
            { 
                sounds.map(sd => {
                    return (
                    <SoundWidget 
                    url = {sd.location}
                    />   
                    )
                }

                )
            }     
            {
                images.map(image => {
                    return (
                        <ImageWidget 
                        url = {image.url} 
                        description = {image.caption}
                        />)
                })
            }
            {
                familyMembers.map(family => {
                    return (
                        <FamilyMember
                        title = {family.name + ":"}
                        saying = {family.quote} 
                        />
                    )
                }

                )

            }
                   
            </div>
        )

    }
}
export default App