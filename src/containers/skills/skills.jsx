import React from 'react'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { DiJavascript, DiMongodb } from "react-icons/di";
import './skills.css'

const Skills = () => {
    return (
        <>
            <section id='skils'>
                <div className='skills-header'>
                    <p>Skills</p>
                </div>
                <div className='skills'>
                    <ul>
                        <li>
                            React <FaReact color='yellow' />
                        </li>
                        <li>Javascript ES6 <DiJavascript color='yellow' /></li>
                        <li>Node JS  <FaNodeJs color='yellow' /></li>
                        <li>MongoDb  <DiMongodb color='yellow' /></li>
                        <li>Express.js</li>
                        <li>RESTful APIs</li>
                        <li>Mongoose</li>
                        <li>Responsive Design</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Skills
