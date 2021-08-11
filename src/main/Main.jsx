import React from 'react'
import About from './about/About'
import Fact from './about/Fact'
import Blog from './blog/Blog'
import Contacts from './contact/Contacts'
import Home from './home/Home'
import Portfolio from './portfolio/Portfolio'
import Resume from './resume/Resume'
import Services from './services/Services'
import Video from './services/Video'

const Main = () => {
    return (
        <div>
            <Home/>
            <About/>
            <Fact/>
            <Services/>
            <Video/>
            <Portfolio/>
            <Resume/>
            <Blog/>
            <Contacts/>
        </div>
    )
}

export default Main