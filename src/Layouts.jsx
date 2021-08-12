import React from 'react'
import Footer from './components/footer/Footer';
import Header from './components/header/Header'
import HeaderHome from './layout/header/Header';
import Main from './main/Main';
const Layouts = () => {
    return (
        <div id="layout">
            <Header/>
            <HeaderHome/>
            <Main/>
            <Footer/>
        </div>
    )
}

export default Layouts
