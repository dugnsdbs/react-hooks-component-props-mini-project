import React from 'react';

function About(props) {
  const {image="https://via.placeholder.com/215", about} = props;
  return (
  <div>
    <aside>
      <img src={image} alt="blog logo"></img>
      <p>{about}</p>
    </aside>
  </div>)
}

export default About;
