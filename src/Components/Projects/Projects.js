import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const projects = [
    {
        name: 'Automobile-Care',
        imgSrc: 'https://i.ibb.co/3NCJMg5/automobile.png',
        liveSite: 'https://bs-automobile-care.web.app/',
        clientSideCode: 'https://github.com/BorshonSaha/Automobile-Care-Client',
        serverSideCode: 'https://github.com/BorshonSaha/Automobile-Care-Server',
        description: 'Automobile Care is for Professional Washing and Cleaning of Your Car. Premium Washing Services such as Interior Washing, Exterior Washing, Engine Services etc.'
    },
    {
        name: 'Hat-Bazar',
        imgSrc: 'https://i.ibb.co/rpJcbBv/hat.png',
        liveSite: 'https://bs-fresh-mart.web.app/',
        clientSideCode: 'https://github.com/BorshonSaha/Hat-Bazar-Client',
        serverSideCode: 'https://github.com/BorshonSaha/Hat-Bazar-Server',
        description: `Automobile Care is for Professional Washing and
        Cleaning of Your Car. Premium Washing Services such
        as Interior Washing, Exterior Washing, Engine Services
        etc.`
    },
    {
        name: 'BPL Player Auction',
        imgSrc: 'https://i.ibb.co/t25c7xv/player.png',
        liveSite: 'https://playerauction.netlify.app/',
        clientSideCode: 'https://github.com/BorshonSaha/BPL-Player-Auction',
        serverSideCode: null,
        description: `BPL Player Auction is a site where you will find list of
        players. You can buy players for your match`
    }
]

const Projects = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animations/projects.json') // the path to the animation json
        })
      }, [])

    return (
        <div>
            <Header></Header>
            <Container>
            <h1 className="mt-5 App">My Projects</h1>
            <section className="row d-flex align-items-center">
                <div className="col-md-6">
                    <div className="contactMe" ref={container}></div>
                </div>
                <div className="col-md-6">
                    <p>The technologies that I know, based on that I developed some projects. Here some of these are.</p>
                </div>
            </section>
            <div className="row App">
                {
                    projects.map(project => <ProjectCard project={project}></ProjectCard>)
                }
            </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Projects;