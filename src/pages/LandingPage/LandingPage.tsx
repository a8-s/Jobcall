import React, { Component } from 'react'
import { Switch } from 'react-router'
import { LandingHero } from './Hero'
import Result from './Result'

interface Props {
    
}
interface State {
    
}

export class LandingPage extends Component<Props, State> {
    state = {}

    render() {
        return (
            <Switch>
              <LandingHero/>
              <Result/>
            </Switch>
        )
    }
}

