import React from 'react'
import {Hero} from './HeroStyle'

interface Props {
    
}

export const HeroComp = (props: Props) => {
    return (
        <Hero id="hero">
        <h1>Hi, I'm Alice!</h1>
        <h2>I am a graphic designer</h2>
        <a href="#about" className="btn-get-started scrollto">
            <i className="bi bi-chevron-double-down"></i></a>
        </Hero>
    )
}

