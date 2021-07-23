import React from 'react'
import Navbar from './Navbar'
import image from "./assets/image.jpeg"
import "./Home.css"

function Home() {
    return (
        <div className = "home_page">
            <Navbar />
            <div className="main_body">
                <img className = "my_image" src={ image } alt="Profile pic" />
                <br />
                <p>Computer Science and Engineering undergrad at Indian Institute of Technology, Jammu</p>
            </div>
        </div>
    )
}

export default Home
