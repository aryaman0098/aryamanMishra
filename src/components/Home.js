import React from 'react'
import image from "./assets/image.jpeg"
import "./Home.css"

function Home() {
    return (
        <div className = "home_page">
            <div className="main_body_home">
                <img className = "my_image" src={ image } alt="Profile pic" />
                <br />
                <p className = "current_designation">Computer Science and Engineering undergrad at Indian Institute of Technology, Jammu</p>
                <br />
                <p>Hi!, I am Aryaman. I have a great passion for programming and software development. Enthusiastic about Machine learning and Deep learning, currently finding my way to becoming a Full Stack Developer.</p>
            </div>
        </div>
    )
}

export default Home
