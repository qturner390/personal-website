import React from 'react';
import './Resume.css'
import Contact from './../components/Contact.jsx'

const Resume = () => {
    return(
        <>
        <Contact/>
        
        <div className='resume-section'>
            <h1 className='section-title'>Education</h1>
            <hr />
            <section className='resume-text-section'>
                <div className="section-subtitle">
                    <b>University of Colorado Boulder | Boulder, CO</b>
                    <b>August 2022 - May 2026</b>
                </div>
                <i>B.S. in Computer Science | Minors: Business, Mathematics</i><br />
                <b>Relevant Coursework:</b>
                <ul>
                    <li><b>CS:</b> Machine Learning, Data Mining, Algorithms, Data Structures, Software Development, Computer Systems</li>
                    <li><b>Mathematics:</b> Probability Theory, Numerical Analysis, Calculus I-III, Linear Algebra</li>
                    <li><b>Business:</b>Business and Financial Analytics I-II, Entrepreneurship and Innovation, Finance</li>
                </ul>
            </section>
        </div>

        <div className='resume-section'>
            <h1 className='section-title'>Technical Skills</h1>
            <hr />
            <section className='resume-text-section'>
                <b>Languages:</b> Python, C++, C, SQL, JavaScript (React, Node.js) <br />
                <b>Technologies & Frameworks:</b> PyTorch, Scikit-Learn, Pandas, SciPy, statsmodels, LangChain, React.js <br />
                <b>Tools & Environments:</b> AWS, Git/GitHub, Webots, Jupyter, Virtual Environments (venv), Unix/Linux
            </section>
        </div>

        <div className='resume-section'>
            <h1 className='section-title'>Experience</h1>
            <hr />
            <section className='resume-text-section'>
                <div className="section-subtitle">
                    <b>Data Annotation | Remote</b>
                    <b>October 2023 - Present</b>
                </div>
                <i>AI Trainer & Consultant</i>
                <ul className="resume-list">
                    <li className="resume-list-item">Conduct Reinforcement Learning from Human Feedback (RLHF) to mitigate harmful content generation and align Large Language Models (LLMs) with safety protocols.</li>
                    <li className="resume-list-item">Optimize system prompts and systematically evaluate LLM outputs to identify edge cases, hallucinations, and current architectural limitations.</li>
                </ul>
            </section>
        </div>

        <div className='resume-section'>
            <h1 className='section-title'>Projects</h1>
            <hr />
            <section className='resume-text-section'>
                
                <div className="section-subtitle">
                    <b>Agentic System for Front-End Development | Python, LangChain, React, AWS</b>
                    <b>Spring 2025</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Engineered an agent-based system utilizing LangChain to autonomously generate React front-end interfaces compliant with FESTO's design and DevOps standards.</li>
                    <li className="resume-list-item">Integrated a Deep Agent orchestrator with Retrieval-Augmented Generation (RAG) to accelerate rapid prototyping and early-stage web development.</li>
                </ul>

                <div className="section-subtitle">
                    <b>Interpolation of Gas Prices | Python, SciPy, statsmodels</b>
                    <b>Spring 2025</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Modeled historic gas prices against crude oil, unemployment, and CPI data to evaluate the efficacy of numerical modeling methods on macroeconomic trends.</li>
                    <li className="resume-list-item">Implemented Hermite, Lagrange-Newton, and spline interpolation, evaluating Chebyshev, equally-spaced, and randomly-spaced nodes.</li>
                    <li className="resume-list-item">Identified Hermite interpolation utilizing Chebyshev nodes as the most statistically accurate modeling approach.</li>
                </ul>

                <div className="section-subtitle">
                    <b>Wildfire Impact on Unemployment | Python, Scikit-Learn, Pandas</b>
                    <b>Spring 2024</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Analyzed the economic impact of natural disasters using a 1.88M+ row wildfire dataset merged with 885K+ rows of local unemployment statistics and Koppen-Geiger climate data.</li>
                    <li className="resume-list-item">Trained and evaluated linear, SVM, SGD, and decision tree regression models to extract interpretable data insights.</li>
                    <li className="resume-list-item">Demonstrated through statistical analysis that localized wildfires hold statistically insignificant predictive power for long-term regional unemployment rates.</li>
                </ul>

            </section>
        </div>
        </>
    );
};

export default Resume;