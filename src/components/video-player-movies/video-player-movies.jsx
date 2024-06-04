import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayerMovies = () => {
    return(
        <ReactPlayer  autoplay="false" controls="true" volume="0.2"  width="100%" height="580px" pip="true" stopOnUnmount="false" url='https://youtu.be/s0gdBeTqql8' />
    )
}

