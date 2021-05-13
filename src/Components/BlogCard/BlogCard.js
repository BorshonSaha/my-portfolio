import React from 'react';
import './BlogCard.css'

const BlogCard = ({blog}) => {
    return (
        <div className="col-md-4">
            <div className={`d-flex justify-content-center`}>
                <div class="card" style={{width: '18rem'}}>
                    <div class="card-body">
                        <img className="blogImage" src={blog.image} alt="" />
                        <h3>{blog.name}</h3>
                        <a target="_blank" href={blog.link}> Read Article</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;