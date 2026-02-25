import React from 'react'
import nike1 from '../../images/nike1.png'
import nike2 from '../../images/nike 2.png'
import nike3 from '../../images/nike3.png'
import nike4 from '../../images/nike4.png'
import login from '../../images/login.png'
import register from '../../images/register.png'
import post from '../../images/post.png'
import upload from '../../images/upload.png'
import home from '../../images/home.png'
import todo from '../../images/todo.png'
import './project.css'

const Projects = () => {
    return (
        <section id='projects' className='projects'>

            <div className='project-header'>
                <h2>PROJECTS</h2>
            </div>

            <div className='project-card'>

                <h3 className='projects-title'>Nike Clone (MERN Stack)</h3>

                <p className='project-description'>
                    A fully functional Nike-inspired e-commerce web application built using the MERN stack.
                    Implemented product listing, category filtering, cart management with Redux Toolkit,
                    JWT-based authentication, admin dashboard for product management, and order placement system.
                    Designed with responsive UI and modern layout principles.
                </p>

                <div className='tech-stack'>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>Redux Toolkit</span>
                    <span>JWT Auth</span>
                </div>

                <div className='project-grid'>
                    <img src={nike1} alt='Nike homepage' />
                    <img src={nike2} alt='Nike products page' />
                    <img src={nike3} alt='Nike cart page' />
                    <img src={nike4} alt='Nike checkout page' />
                </div>

                {/* <div className='github'>
                    <a
                        href="https://github.com/varkeyakhil/mern-ecommerce"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View on GitHub
                    </a>
                </div> */}

            </div>
            <div className='project-card'>
                <h3 className='projects-title'>Blog</h3>
                <p className='project-description'>A full-stack blog platform with user authentication and CRUD functionality.</p> 
                <div className='tech-stack'>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                    <span>Bcrypt</span>
                    <span>JWT Auth</span>
                </div>
                 <div className='project-grid'>
                    <img src={home} alt='homepage' />
                    <img src={post} alt='Post page' />
                    <img src={login} alt='Login page' />
                    <img src={register} alt='Register page' />
                    <img src={upload} alt='Upload page' />
                </div>


            </div>

        <div className='project-card'>
            <h3 className='projects-title'>Todo App</h3>
                <p className='project-description'>A task management web application with full CRUD functionality.</p> 
                <div className='tech-stack'>
                    <span>React</span>
                    <span>Node.js</span>
                    <span>Express</span>
                    <span>MongoDB</span>
                </div>
                <div className='project-grid-todo'>
                    <img src={todo} alt='Todo page' />
                </div>
                


        </div>

        </section>
    )
}

export default Projects 
