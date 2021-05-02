import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import man from '../../images/man.png';
import Projects from '../Projects/Projects';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <section className="row d-flex align-items-center mt-5">
                    <div className="col-md-6">
                        <h1>Hi I am Borshon Saha</h1>
                        <h1>Web Developer</h1>
                        <p>Front-End Developer</p>
                        <Button><a style={{color: 'white'}} href="https://drive.google.com/uc?export=download&id=1ZpWUY9WHnx9WA2XBltCOmNnq4cTDgqB2">My Resume</a></Button><br/><br/>
                        <h3><a target="_blank" href="https://github.com/BorshonSaha"><FontAwesomeIcon icon={faGithub} /></a></h3>

                        <h3><a target="_blank" href="https://www.linkedin.com/in/borshon-saha-595165211/"><FontAwesomeIcon icon={faLinkedin} /></a></h3>

                    </div>
                    <div className="col-md-6">
                        <img style={{height: '450px', width:'450px', borderRadius: '10px'}} src={man} className="img-fluid" alt="" />
                    </div>
                </section>
            </Container>
            <Projects></Projects>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
        </div>
    );
};

export default Home;