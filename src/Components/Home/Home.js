import React from 'react';
import { Container, Button } from 'react-bootstrap';
import Header from '../Header/Header';
import AboutMe from '../AboutMe/AboutMe';
import ContactMe from '../ContactMe/ContactMe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import lottie from 'lottie-web'
import { useEffect, useRef } from 'react';
import Technologies from '../Technologies/Technologies';
import Footer from '../Footer/Footer';

const Home = () => {

    const container = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: require('../../Animations/coding.json') // the path to the animation json
    })
  }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <section className="row d-flex align-items-center mt-5">
                    <div className="col-md-6">
                        <h1>Hi, I am Borshon Saha</h1>
                        <h1>Web Developer</h1>
                        <p>Front-End Developer</p>
                        <Button><a style={{color: 'white'}} href="https://drive.google.com/uc?export=download&id=1b9ygFVjXfEGqcbeQMbK1pbWVCFxhg1uI">My Resume</a></Button><br/><br/>
                        <h3><a target="_blank" href="https://github.com/BorshonSaha"><FontAwesomeIcon icon={faGithub} /></a> &nbsp; <a target="_blank" href="https://www.linkedin.com/in/borshon-saha-595165211/"><FontAwesomeIcon icon={faLinkedin} /></a></h3>
                    </div>
                    <div className="col-md-6">
                        <div ref={container}></div>
                    </div>
                </section>
            </Container>
            <Technologies></Technologies>
            <AboutMe></AboutMe>
            <ContactMe></ContactMe>
            <Footer></Footer>
        </div>
    );
};

export default Home;