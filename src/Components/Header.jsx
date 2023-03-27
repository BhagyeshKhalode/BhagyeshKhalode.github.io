import React, { useEffect, useState } from 'react'
import styled from "styled-components"
import 'animate.css'
import image from "../assets/images/tree-image.jpg"
import file from "../Static/Bhagyesh_Khalode_resume.pdf"

let currentDate = new Date().toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"short", day:"numeric"}) ;
let currentHour = new Date().getHours();

let morningColor =  "#ffe9a6" ;
let afternoonColor =  "#FFB37B" ;
let eveningColor = "#FF8866" ;


const Header = () => {
    let [greetingText, setGreetingText] = useState("");
    let [greetingTextColor, setGreetingTextColor] = useState("");

    useEffect(() => {
        if (currentHour >= 1 && currentHour <= 12) {
            setGreetingText('Good Morning');
            setGreetingTextColor(morningColor);
        } else if (currentHour >= 12 && currentHour <= 18) {
            setGreetingText('Good Afternoon');
            setGreetingTextColor(afternoonColor);
        } else {
            setGreetingText('Good Evening');
            setGreetingTextColor(eveningColor);
        }
    }, []);

    return (
        <SECTION className="hero-section" id="home">
            <div style={{ backgroundImage:`url(${image})` }} className="hero-container">
                <div className="hero-text-wrapper">
                    <h1 className="animate__animated animate__fadeInDown hero-title"><span style={{color: greetingTextColor}}>{greetingText}</span>,<br />I'm Bhagyesh!</h1>
                    <h1 className="animate__animated animate__fadeInDown hero-title"><span style={{color: greetingTextColor}}></span><div style={{fontSize: "30px"}} >Full Stack Web Developer</div></h1>
                    <h2 className="animate__animated animate__fadeInRight hero-date"><span id="date">{currentDate}</span></h2>
                    <a type="button" className="resume-btn" href={file} download rel="noreferrer">Resume <i
                    className="fa-solid fa-square-arrow-up-right"></i></a>
                </div>
                <a className="down-arrow" href="#about-section" aria-label="down-arrow"><i
                    className="fa-solid fa-angle-down animate__animated animate__fadeInDown"></i></a>
            </div>
        </SECTION>
    )
}

export default Header


const SECTION =styled.section`
.hero-container {
    box-shadow: inset 0 0 0 2000px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    min-height: 100vh;
    position: relative;
    color: white;
}

.hero-text-wrapper {
    margin: 0 25px;
}

.hero-title {
    font-size: 75px;
    font-weight: 700;
    margin-bottom: 20px;
}

.hero-subtitle {
    font-size: 20px;
    width: 750px;
}

.hero-date {
    position: absolute;
    bottom: 5%;
    right: 3%;
}

.resume-btn {
    background-color: transparent;
    border: 2px solid #fff;
    border-radius: 10px;
    color: #fff;
    padding: 15px 32px;
    font-size: 16px;
    /* margin-top: 50px; */
    text-decoration: none;
    transition-duration: 0.2s;
}

.resume-btn:hover {
    background-color: #07608c;
    border-color: #fff;
    border-radius: 10px;
    color: #fff;
    transition-duration: 0.4s;
}

.fa-angle-down {
    position: absolute;
    bottom: 0;
    font-size: 30px;
    color: #fff;
    margin-bottom: 20px;
    transition-duration: 0.4s;
}

.fa-angle-down:hover {
    color: #ffd580;
    transition-duration: 0.4s;
}

`