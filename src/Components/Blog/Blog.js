import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import lottie from 'lottie-web';
import { useEffect, useRef } from 'react';
import BlogCard from '../BlogCard/BlogCard';

const blogs = [
    {
        image:'https://i.ibb.co/T2YSd1h/js.png',
        name:'JavaScript Article',
        link:'https://saha11borshon.medium.com/javascript-article-45abcdb45e9e'
    },
    {
        image:'https://i.ibb.co/T2YSd1h/js.png',
        name:'JavaScript Article 2',
        link:'https://saha11borshon.medium.com/javascript-article-2-7593eca9c974'
    },
    {
        image:'https://i.ibb.co/bX29RPk/react.png',
        name:'React Article',
        link:'https://saha11borshon.medium.com/react-article-bb3a8596275d'
    }
]

const Blog = () => {

    const container = useRef(null);

    useEffect(() => {
        lottie.loadAnimation({
          container: container.current, // the dom element that will contain the animation
          renderer: 'svg',
          loop: true,
          autoplay: true,
          animationData: require('../../Animations/blog.json') // the path to the animation json
        })
      }, [])

    return (
        <div>
            <Header></Header>
            <Container>
                <h1 className="App mt-5">My Blogs</h1>
                <section className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <div className="contactMe"ref={container}></div>
                    </div>
                    <div className="col-md-6">
                        <p>I have written few blogs based on my development experience. I published all of them into the medium. Some of my blogs are given below.</p>
                    </div>
                </section>
                <div className="row App">
                {
                    blogs.map(blog => <BlogCard blog={blog}></BlogCard>)
                }
            </div>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Blog;