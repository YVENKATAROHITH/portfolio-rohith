import React from 'react';

function Hero() {
  const heroStyle = {
    position: 'relative',
    backgroundImage: 'url("/download.jpeg")', // Correct path for the image in public folder
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh',
    color: 'white',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',  // Adjust the opacity as needed
    zIndex: 1,
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
  };

  return (
    <section id="home" style={heroStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1 className="display-4">Hi, I'm ROHITH</h1>
        <p className="lead">I'm a STUDENT</p>
        <a href="#projects" className="btn btn-primary btn-lg mt-4">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;
