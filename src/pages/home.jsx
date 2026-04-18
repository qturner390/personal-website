import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
    <>
        <section id="center">
            <div className="hero">
            </div>
        <div>
          <h1 className='name-header'>Hi, I'm Quinn Turner</h1>
        </div>
          <Link to="/resume" className='button-link'>View My Resume</Link>
        </section>
        <section id="spacer"></section>
    </>
    );
};

export default Home;