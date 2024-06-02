import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Blogs.css";

export default function Blogs() {
  const [latestBlog, setLatestBlog] = useState(null);
  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    // Fetch the latest blog
    axios.get('http://localhost:8081/blogs/latest')
      .then(response => {
        console.log("Latest Blog Response:", response.data); // Log response
        setLatestBlog(response.data[0]); // Assuming the latest blog is returned in the first position of the array
      })
      .catch(error => {
        console.error("There was an error fetching the latest blog!", error);
      });

    // Fetch all blogs
    axios.get('http://localhost:8081/blogs')
      .then(response => {
        console.log("All Blogs Response:", response.data); // Log response
        setAllBlogs(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  const handleBlogClick = (blog) => {
    setLatestBlog(blog);
  };

  return (
    <>
      <div className="b-container">
        <div className="b-container-1">
          {latestBlog ? (
            <div className="b-container-1-sec">
              <img src={latestBlog.imageurl} alt="" />
              <div className="b-container-1-sec-t">
                <h3>{latestBlog.title}</h3>
                <h5>{latestBlog.author}</h5>
                <p>{latestBlog.content}</p>
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
          {latestBlog && (
            <div className="b-img-set">
              <img src={latestBlog.imageurl1} alt="Image 1" />
              <img src={latestBlog.imageurl2} alt="Image 2" />
              <img src={latestBlog.imageurl3} alt="Image 3" />
              <img src={latestBlog.imageurl4} alt="Image 4" />
            </div>
          )}
        </div>
        <div className="b-container-2">
          <h4>Read more</h4>
          {allBlogs.length > 0 ? (
            allBlogs.map((blog) => (
              <div key={blog.id} onClick={() => handleBlogClick(blog)}>
                <img src={blog.imageurl} alt={blog.title} />
               
              </div>
            ))
          ) : (
            <p>No blogs available</p>
          )}
        </div>
      </div>
      <div className="page-content3">
        <hr />
        <div className="page-btm">
          <div className="socials">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              Share Page
            </p>
          </div>
          <div className="btp">
            <p style={{ margin: "0px", fontWeight: 600, fontSize: "12px" }}>
              {" "}
              Back to Top
            </p>
          </div>
        </div>
      </div>
    </>
  );
}