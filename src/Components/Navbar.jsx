import React, {useState} from 'react';
import styled from 'styled-components';


let Navbar = () => {
    let [colorChange, setColorChange] = useState(false);

    let changeNavbarColor = () => {
        if(window.scrollY >= 60) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    }
    window.addEventListener('scroll', changeNavbarColor);
    return (
        <DIV  id="nav-menu">
            <nav className={colorChange ? 'navbar fixed-top navbar-expand-lg colorChange' : 'navbar fixed-top navbar-expand-lg'} >
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#hero-section"><img className="logo" src={Logo} alt="brand" /></a> */}
                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column justify-content-around" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="toggler-icon top-bar"></span>
                        <span className="toggler-icon middle-bar"></span>
                        <span className="toggler-icon bottom-bar"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                        <li className="nav-item" class="nav-link home">
                                <a className="nav-link"  href="#hero-section">Home</a>
                            </li>
                            <li className="nav-item" class="nav-link about">
                                <a className="nav-link"  href="#about-section">About</a>
                            </li>
                            
                            <li className="nav-item" class="nav-link projects">
                                <a className="nav-link"  href="#projects-section">Projects</a>
                            </li>
                            <li className="nav-item" class="nav-link skills">
                                <a className="nav-link"  href="#skills-section">Skills</a>
                            </li>
                            <li className="nav-item" class="nav-link contact">
                                <a className="nav-link"  href="#contact-section">Contact</a>
                            </li>
                            <li className="nav-item" class="nav-link resume">
                                <a className="nav-link"
                                  id="resume-link-1"
                                 href="https://drive.google.com/file/d/1wLKSqsMPdEiT2pu2W3PvENyISGSuTtwj/view?usp=share_link"  target="blank">Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </DIV>
    )
}

export default Navbar;


const DIV=styled.div`
.navbar {
    background-color: transparent;
    transition: 0.75s ease;
}

.navbar.colorChange {
    background-color: #020c1b;
    opacity: 0.9;
}

.navbar li a {
    color: #fff;
    font-size: 20px;
    margin: auto 10px;
}

.navbar li a:hover {
    color: #ffd580;
}

.navbar li a:focus {
    color: #ffd580;
}

.navbar-toggler {
    width: 30px;
    height: 20px;
    position: relative;
    transition: .5s ease-in-out;
}

.navbar-toggler, .navbar-toggler:focus, .navbar-toggler:active, .navbar-toggler-icon:focus {
    border-color: transparent;
    color: transparent;
    outline: none;
    box-shadow: none;
    border: 0;
}

.navbar-toggler span {
    margin: 0;
    padding: 0;
}

.toggler-icon {
    display: block;
    position: absolute;
    height: 3px;
    width: 100%;
    background: white;
    border-radius: 1px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;
}

.middle-bar {
    margin-top: 0px;

}

.navbar-toggler .top-bar {
    margin-top: 0px;
    transform: rotate(135deg);
}

.navbar-toggler .middle-bar {
    opacity: 0;
    filter: alpha(opacity=0);
}

.navbar-toggler .bottom-bar {
    margin-top: 0px;
    transform: rotate(-135deg);
}

.navbar-toggler.collapsed .top-bar {
    margin-top: -20px;
    transform: rotate(0deg);
}

.navbar-toggler.collapsed .middle-bar {
    opacity: 1;
    filter: alpha(opacity=100);
}

.navbar-toggler.collapsed .bottom-bar {
    margin-top: 20px;
    transform: rotate(0deg);
}

.logo {
    width: 30%;
    height: 30%;
}
`