// src/components/Home.js
import React from 'react';
import { FacebookOutlined, TwitterOutlined, InstagramOutlined, LinkedinOutlined,GithubOutlined } from '@ant-design/icons';
import '../Component/cssFiles/home.css';
import Skills from './Skills'
import Projects from './Projects';
import About from './About';
import ContactUs from './ContactUs';


const Home = () => {
    return (
        <>
        <section className="home-section">
            <div className="profile-container">
                <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="profile-photo"
                />
                <div className="social-links">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <FacebookOutlined/>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <TwitterOutlined/>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <InstagramOutlined/>
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <LinkedinOutlined/>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <GithubOutlined/>
                    </a>
                </div>
            </div>
            <div className="animated-title">
                <div className="text-top">
                    <div>
                    <span>Web-Application Developer</span>
                        <span>Kishan Kulkarni</span>
                    </div>
                </div>
                <div className="text-bottom">
                    <div>Node.js Developer</div>
                </div>
            </div>
        </section>
            <Skills/>
            <Projects/>
            <About/>
            <ContactUs/>
        
            </>
    );
};

export default Home;
