import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJsSquare, faBootstrap, faReact, faNode, faGitAlt, faNpm } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons';
import { Container } from 'react-bootstrap';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';

const Technologies = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animations/skills.json') // the path to the animation json
        })
      }, [])

    return (
        <div>
            <h1 className="App mt-5">Technologies That I Know</h1>
            <Container>
                <section className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div ref={container}></div>
                    </div>
                    <div className="col-md-6">
                        <h1>
                            <FontAwesomeIcon icon={faHtml5} /> <FontAwesomeIcon icon={faCss3} /> <FontAwesomeIcon icon={faJsSquare} /> <FontAwesomeIcon icon={faBootstrap} /> <FontAwesomeIcon icon={faReact} /> <FontAwesomeIcon icon={faNode} /> <FontAwesomeIcon icon={faDatabase} /> <FontAwesomeIcon icon={faGitAlt} /> <FontAwesomeIcon icon={faNpm} />
                        </h1>
                        <p className="mt-4"><b>• Building web applications with ReactJS</b></p>
                        <p><b>• Building backend API's with NodeJS, ExpressJS</b></p>
                        <p><b>• Integration of third party services such as Firebase</b></p>
                        <p><b>• Integration of database services with MongoDB</b></p>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default Technologies;