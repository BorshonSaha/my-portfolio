import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import './ContactMe.css';
import emailjs from 'emailjs-com';

const ContactMe = () => {

    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm( 'service_ID', 'template_ID', e.target, 'user_ID')
            .then((result) => {
                window.alert('Message sent successfully !!');
            }, (error) => {
                // console.log(error.text);
            });

            e.target.reset();
    }

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
            container: container.current, // the dom element that will contain the animation
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('../../Animations/contact.json') // the path to the animation json
        })
    }, [])

    return (
        <div>
            <h1 className="App mt-3">Contact With Me</h1>
            <Container>
                <section className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="contactMe" ref={container}></div>
                    </div>
                    <div className="col-md-6">
                        <form onSubmit={sendEmail}>
                            <div className="from-group pt-3" >
                                <input type="text" id='name' className="form-control" placeholder='Enter name' name='name' required />
                            </div>
                            <div className="from-group pt-3" >
                                <input type="email" id='email' className="form-control " placeholder='Enter email address' name='email' required/>
                            </div>
                            <div className="from-group pt-3" >
                                <input type="text" id='subject' className="form-control " placeholder='Enter subject' name='subject' required/>
                            </div>
                            <div className="from-group pt-3" >
                                <textarea type="email" id='message' className="form-control" id='' cols='30' rows='5' placeholder='Write your message' name='message' required/>
                            </div>
                            <div className="pt-3">
                                <input type="submit" className="btn btn-primary" value="Send Message" />
                            </div>
                        </form>
                    </div>
                </section>
            </Container>
        </div>
    );
};

export default ContactMe;