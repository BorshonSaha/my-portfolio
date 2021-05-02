import React from 'react';
import { Button, Container, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Container className="header mt-4">
                <div>
                    <Nav className="justify-content-end" activeKey="/home">
                        <Nav.Item>
                            <Nav.Link ><Link to="/home">Home</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link ><Link to="/projects">Projects</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/blogs">Blogs</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/aboutMe">About Me</Link></Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link><Link to="/contactMe">Contact Me</Link></Nav.Link>
                        </Nav.Item>
                    </Nav>
                </div>
            </Container>
        </div>
    );
};

export default Header;