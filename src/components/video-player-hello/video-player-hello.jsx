import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayerHello = () => {
    return(
        <ReactPlayer className="welcome-player"  playing="true" loop="true"  volume="0"  stopOnUnmount="false" url='https://videos.pexels.com/video-files/4210523/4210523-hd_1280_720_24fps.mp4' />
    )
}

