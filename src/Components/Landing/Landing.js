import React from 'react';
import NavBar from '../NavBar/NavBar';
import MainLanding from '../MainLanding/Main'

const Landing = () => {
  return (
    <div className="fullScreen landingBack">
      <NavBar/>
      <MainLanding/>
    </div>
  );
};

export default Landing;