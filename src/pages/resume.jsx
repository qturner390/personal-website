import React from 'react';
import './Resume.css'
import Contact from '../components/Contact.jsx'

const Resume = () => {
    return(
        <div className='resume-container'>
        <Contact/>
        
        <div className='resume-section'>
            <h1 className='section-title'>Education</h1>
            <hr className='resume-divider'/>
            <section className='resume-text-section'>
                <div className="section-subtitle">
                    <b>University of Colorado Boulder | Boulder, CO</b><br />
                    <b>August 2022 - May 2026</b>
                </div>
                <i>B.S. in Computer Science | Minors: Business, Mathematics</i><br />
                <div className="coursework-container">
                    <b>Relevant Coursework:</b>
                    <ul className='coursework-list'>
                    <li className='coursework-item'><b>CS:</b> Machine Learning, Data Mining, Algorithms, Data Structures, Software Development, Computer Systems</li>
                    <li className='coursework-item'><b>Mathematics:</b> Probability Theory, Numerical Analysis, Calculus I-III, Linear Algebra</li>
                    <li className='coursework-item'><b>Business:</b> Business and Financial Analytics I-II, Entrepreneurship and Innovation, Finance</li>
                </ul>
                </div>
            </section>
        </div>

        <div className='resume-section'>
            <h1 className='section-title'>Technical Skills</h1>
            <hr />
            <section className='resume-text-section'>
                <ul className="skill-list">
                    <li className="skill-item"><b>Languages:</b> Python, C++, C, SQL, JavaScript (React, Node.js), Bash/Zsh</li>
                    <li className="skill-item"><b>ML & Data Science:</b> PyTorch, Scikit-Learn, Pandas, SciPy, statsmodels, NLP, LLM Fine-Tuning, OLS Regression, Z-score Standardization</li>
                    <li className="skill-item"><b>Robotics & Systems:</b> Webots, A* Search Algorithms, Behavior Trees, Computer Vision</li>
                    <li className="skill-item"><b>Tools & Architecture:</b> AWS, Git, LangChain, Virtual Environments (venv), Jupyter</li>
                </ul>
            </section>
        </div>

        <div className='resume-section'>
            <h1 className='section-title'>Experience</h1>
            <hr />
            <section className='resume-text-section'>
                <div className="section-subtitle">
                    <b>Data Annotation | Remote</b><br />
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
                    <b>Agentic System for Front-End Development | Python, LangChain, React, AWS</b> <br />
                    <b>Spring 2025</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Engineered an agent-based system utilizing LangChain to autonomously generate React front-end interfaces compliant with FESTO's design and DevOps standards.</li>
                    <li className="resume-list-item">Integrated a Deep Agent orchestrator with Retrieval-Augmented Generation (RAG) to accelerate rapid prototyping and early-stage web development.</li>
                </ul>

                <div className="section-subtitle">
                    {/* Example of linking directly to a hosted interactive notebook on your site */}
                    <b><a href="/notebooks/GasProject.html" target="_blank" rel="noopener noreferrer" className="resume-link">Interpolation of Gas Prices</a> | Python, SciPy, statsmodels</b> <br />
                    <b>Spring 2025</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Modeled historic gas prices against crude oil, unemployment, and CPI data to evaluate the efficacy of numerical modeling methods on macroeconomic trends.</li>
                    <li className="resume-list-item">Implemented Hermite, Lagrange-Newton, and spline interpolation, evaluating Chebyshev, equally-spaced, and randomly-spaced nodes.</li>
                    <li className="resume-list-item">Identified Hermite interpolation utilizing Chebyshev nodes as the most statistically accurate modeling approach.</li>
                </ul>

                <div className="section-subtitle">
                    <b>Wildfire Impact on Unemployment | Python, Scikit-Learn, Pandas</b> <br />
                    <b>Spring 2024</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Analyzed the economic impact of natural disasters using a 1.88M+ row wildfire dataset merged with 885K+ rows of local unemployment statistics and Koppen-Geiger climate data.</li>
                    <li className="resume-list-item">Trained and evaluated linear, SVM, SGD, and decision tree regression models to extract interpretable data insights.</li>
                    <li className="resume-list-item">Demonstrated through statistical analysis that localized wildfires hold statistically insignificant predictive power for long-term regional unemployment rates.</li>
                </ul>

                <div className="section-subtitle">
                    <b>Amazon Review NLP Classifier | Python, PyTorch, Transformers</b><br />
                    <b>Spring 2026</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Fine-tuned a BERT model to perform sentiment analysis and usefulness classification on bulk Amazon review datasets.</li>
                    <li className="resume-list-item">Developed data preprocessing and stratification scripts to engineer a perfectly balanced three-class dataset from raw data files.</li>
                </ul>

                <div className="section-subtitle">
                    <b>Autonomous Robotics Simulation | Webots, C++, ROS</b> <br />
                    <b>Winter 2025</b>
                </div>
                <ul className="resume-list">
                    <li className="resume-list-item">Engineered a robotics simulation utilizing the Tiago platform to autonomously perform complex navigation and pick-and-place tasks.</li>
                    <li className="resume-list-item">Implemented A* search algorithms for spatial planning alongside custom behavior trees for decision-making logic.</li>
                    <li className="resume-list-item">Calibrated camera-based object recognition systems, precisely adjusting the internal camera angle to -0.6 to successfully identify and target objects on elevated surfaces.</li>
                </ul>

            </section>
        </div>
        </div>
    );
};

export default Resume;