import React from 'react';

function Footer() {
  return (
    <footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center text-md-left">
            <p className="mb-0">&copy; {new Date().getFullYear()} rohith. All rights reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-right">
            <ul className="list-unstyled d-flex justify-content-center justify-content-md-end mb-0">
              <li className="ms-3"><a href="#home" className="text-white text-decoration-none">Home</a></li>
              <li className="ms-3"><a href="#about" className="text-white text-decoration-none">About</a></li>
              <li className="ms-3"><a href="#projects" className="text-white text-decoration-none">Projects</a></li>
              <li className="ms-3"><a href="#contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
