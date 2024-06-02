import React from 'react'
import ReactPlayer from 'react-player'

export const VideoPlayer = () => {
    return(
        <ReactPlayer  playing="true" controls="true" volume="0.2"  width="100%" height="580px" pip="true" stopOnUnmount="false" url='https://youtu.be/yiU1cQkyR4E' />
    )
}

