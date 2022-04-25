import React from 'react'

const Home = props => {
    return (
        // Home page
        <div className='about'>
            <h1>Matt Jacobs</h1>
            <h3>Full Stack Software Engineer</h3>
            <div className="bio">
                <img alt="me" src="https://i.imgur.com/i8RMOwB.jpg" style={{ borderRadius: "40%" }} class="img-thumbnail"></img>
                <p>I’m a full-stack software engineer who has skills building user-friendly front-ends and efficient and secure back-ends. In a previous life, I was a teacher of English as a second language where I had the opportunity to greatly improve my skills as both a communicator and a collaborative team member. As a software engineer, I am passionate about writing code that is efficient, scalable, and secure.</p>
            </div>
            <hr />
            <div className='skills-container'>
                <div className="skill"><i className="devicon-html5-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-css3-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-javascript-plain colored"></i></div>
                <div className="skill"><i className="devicon-nodejs-plain colored"></i></div>
                <div className="skill"><i className="devicon-react-original-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-python-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-postgresql-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-mongodb-plain-wordmark colored"></i></div>
                <div className="skill"><i className="devicon-express-original colored"></i></div>
                <div className="skill"><i className="devicon-bootstrap-plain-wordmark colored"></i></div>
            </div>
        </div>
    )
}

export default Home