import React from 'react'

function AboutSection() {
    const aboutStyle = {
        position: 'relative',
        backgroundImage: 'url("/me.png")', // Correct path for the image in public folder
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
    
  return (
  
    <section id="about" className="py-5 bg-light" style={aboutStyle}>
      <div className="container">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center mb-5">I'm a passionate developer with a love for creating web applications.</p>

        <h3 className="text-center mb-4">Skills</h3>
        <ul className="list-inline text-center mb-5">
        <li className="list-inline-item mx-3">
            <span className="badge bg-secondary p-2">JAVA</span>
          </li>
          <li className="list-inline-item mx-3">
            <span className="badge bg-secondary p-2">React</span>
          </li>
          <li className="list-inline-item mx-3">
            <span className="badge bg-secondary p-2">JavaScript</span>
          </li>
          <li className="list-inline-item mx-3">
            <span className="badge bg-secondary p-2">CSS</span>
          </li>
          <li className="list-inline-item mx-3">
            <span className="badge bg-secondary p-2">HTML</span>
          </li>
        </ul>

        <div className="text-center">
          <a href="C:\Users\ADMIN\OneDrive\Desktop\reactlearn\frontend1\frontend\public\RESUME19.pdf" download="C:\Users\ADMIN\OneDrive\Desktop\reactlearn\frontend1\frontend\public\RESUME19.pdf" className="btn btn-primary">
            Download Resume
          </a>
        </div>
      </div>
    </section>
      
   
    
  )
}

export default AboutSection
