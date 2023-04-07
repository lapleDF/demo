import React from "react";
import Course from "../components/Courses";
import Posts from "../components/Posts";

const Home = () => {
  return (
    <div className='app'>
      <Course />
      <p className='title-section'>Posts</p>
      <Posts />
    </div>
  );
};

export default Home;
