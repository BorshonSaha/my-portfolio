import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({project}) => {
    return (
            <div className="col-md-4 mt-5">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <img style={{height: '150px', width: "250px"}} src={project.imgSrc} alt=""/>
                        <h5 class="card-title mt-4">{project.name}</h5>
                        <p>{project.description}</p>
                        <a target="_blank" href={project.liveSite}>Live Site</a><br/>
                        <a target="_blank" href={project.clientSideCode}>Client Side Code</a><br/>
                        {
                            project.serverSideCode && <a target="_blank" href={project.serverSideCode}>Server Side Code</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;