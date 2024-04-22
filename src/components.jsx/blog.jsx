import React, { useState } from "react";

function Blog(props) {
  return (
    <div className={"flex-container blog-article " + props.class}>
      <img src={props.source} className="blog-pic" alt=""></img>

      <p className="blog-des">
        <p className="blog-title">{props.title}</p>
        <p className="blog-author">
          By <em>Blissy</em> on <em>{props.date}</em>
        </p>
        <p className="blog-text">{props.description}</p>
      </p>
    </div>
  );
}

export default Blog;
