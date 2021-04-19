import React, { Component } from 'react'
import { LandingHero } from './Hero'

interface Props {
    
}
interface State {
    
}

export class LandingPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <>
              <LandingHero/>
            </>
        )
    }
}

