import React, { useState, useEffect } from 'react';

function Posts() {
  const [post, setPost] = useState([]);
  const API = 'https://jsonplaceholder.typicode.com/posts';

  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPost(res);
      });
  };
  return <div></div>;
}

export default Posts;
