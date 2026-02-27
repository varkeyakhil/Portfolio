import React from 'react'
import "./Home.css"
import { TypeAnimation } from 'react-type-animation';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import image from '../../images/Pixelated Cyber Workspace.jpg'

const Home = () => {
    return (
        <>
            <section id='home'>
                <div className='home'>
                    <h1>Hi, I'm AKHIL VARKEY</h1>
                    <div className='animation'>
                        <p>And I'am a </p> <span><TypeAnimation
                            sequence={[
                                'WEB DEVELOPER',
                                1200,
                                'WEB DESIGNER',
                                1200,
                                'FULL STACK DEVELOPER',
                                1200
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        /></span>
                    </div>
                    <div className='btn'>
                        <a
                            href="/Akhil_varkey.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Resume</a>
                        {/* <a href='' target='_blank'>Download CV</a> */}
                    </div>
                    <div className='social'>
                        <a
                            href='https://www.linkedin.com/in/akhil-varkey-b342b339b'
                            target="_blank"
                            rel="noopener noreferrer"
                        ><FaLinkedin /></a>

                        <a href='https://github.com/varkeyakhil'><FaGithub /></a>
                        <a href='mailto:varkeyakhil@gmail.com'>
                            <SiGmail /></a>
                    </div>

                </div>
                <div className='image'>
                    <img src={image} alt='developer-image' />
                </div>
            </section>
        </>
    )
}

export default Home
