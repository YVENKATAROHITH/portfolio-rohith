import React from 'react'

function Projects() {
    const heroStyle = {
        position: 'relative',
        backgroundImage: 'url("/projects.jpeg")', // Correct path for the image in public folder
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
    <section id="projects" className="py-5 bg-white"  style={heroStyle}>
    <div className="container">
      <h2 className="text-center mb-5">My Projects</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">MERN FULLSTACK PROJECT</h3>
              <p className="card-text">ONLINE VOTING APP USING MERN FULLSTACK</p>
              <a href="https://online-voting-app.vercel.app/" className="btn btn-outline-primary">View on GitHub</a>
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">
                        REMOVAL OF BACKGROUD FROM IMAGE</h3>
              <p className="card-text">REMOVAL OF BACKGROUD FROM IMAGE USING MATLAB SOFTWARE </p>
          
            </div>
          </div>
        </div>
        <div className="col-md-6 mb-4">
          <div className="card h-100">
            <div className="card-body">
              <h3 className="card-title">ROBOTIC ARM</h3>
              <p className="card-text">BLUETOOTH CONTROLLED ROBOTIC ARM</p>
             
            </div>
          </div>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </div>
  </section>
  )
}

export default Projects
