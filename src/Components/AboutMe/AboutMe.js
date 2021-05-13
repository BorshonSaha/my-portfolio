import React from 'react';
import { Container } from 'react-bootstrap';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import './AboutMe.css'

const AboutMe = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animations/boy.json') // the path to the animation json
        })
    }, [])

    return (
        <div>
            <h1 className="App mt-3">About Me</h1>
            <Container>
                <section className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <p> Hi, I am Borshon Saha, Front-End Developer. I am interested to develop web applications. I describe myself as a passionate developer who loves coding, open-source, and the web platform. I am good at JavaScript, ReactJS, NodeJS, HTML, CSS, Bootstrap, Firebase, Netlify, Heroku, Git e.t.c. I am currently learning NodeJS, ExpressJS deeply so that I can be a Full-Stack developer and love to do problem-solving.</p>
                    </div>
                    <div className="col-md-6">
                        <div className="boy" ref={container}></div>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default AboutMe;