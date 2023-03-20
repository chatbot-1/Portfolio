import React from "react"
import "./App.css"
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import {About} from "./components/about/About"
import { Skill } from "./components/skill/Skill"
import { Service } from "./components/services/Service"
import { Educa } from "./components/education/Educa"
import { Card } from "./components/cards/Card"
import data from "./data"
import Contact from "./components/contacts/Contact"
import Footer from "./components/footer/Footer"
import ScrollUp from "./components/scrollUp/ScrollUp"

export default function App() {

    // const cards = data.map(item => {
    //     return (
    //         <Card {...item} />
    //     )
    // })

    return (
        <>

        <Header/>
        <main className="main">
            <Home />
            <About />
            <Skill />
            <Service />
            <Educa />
            {/* <section className="card-list">
                {cards} 
            </section> */}
            <Card />
            <Contact />
            
        </main>
        <Footer/>
        <ScrollUp />
        </>
    )
}