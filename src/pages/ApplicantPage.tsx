import React, { Component } from 'react'
import {HeroComp,About,Resume,Testimonial,Contact} from '../components'

interface Props {
    
}
interface State {
    
}

export class ApplicantPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
                <HeroComp/>
                <About/>
                <Resume/>
                <Testimonial/>
                <Contact/>
            </>
        )
    }
}

