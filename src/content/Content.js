import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Custom components
import Home from './pages/Home'
import Contact from './pages/Contact'
import Projects from './pages/Projects'


const Content = props => {
    return (
        <div className="container">
            <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/contact" component={Contact}/>
            <Route path="/projects" component={Projects} />
            </Switch>
        </div>
    )
}

export default Content
