import React from 'react';
import { Container } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';

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
    return (
        <div className="mt-5 App">
            <h1>My Projects</h1>
            <div className="row">
                {
                    projects.map(project => <ProjectCard project={project}></ProjectCard>)
                }
            </div>
        </div>
    );
};

export default Projects;