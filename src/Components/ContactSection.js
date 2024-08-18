import React from 'react';

function ContactSection() {
    const heroStyle = {
        position: 'relative',
        backgroundImage: 'url("/contact.jpg")', // Correct path for the image in public folder
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
    <section id="contact" className="py-5 bg-light" style={heroStyle}>
      <div className="container">
        <h2 className="text-center mb-4">Contact Me</h2>
        <div className="row">
          <div className="col-md-6">
            <h3>Get in Touch</h3>
            <p className="mb-4">Feel free to reach out to me via the form below or through my social media channels.</p>
            <form>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" className="form-control" id="email" placeholder="Your Email" required />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" id="message" rows="4" placeholder="Your Message" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary">Send Message</button>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Contact Details</h3>
            <ul className="list-unstyled">
              <li className="mb-2">
                <i className="bi bi-telephone"></i> +91 7396774803
              </li>
              <li className="mb-2">
                <i className="bi bi-envelope"></i> rohithy578@gmail.com
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt"></i> 41/134-6-3-1 ,kadapa, AndhraPradesh kadapa
              </li>
              <li className="mb-2">
                <a href="www.linkedin.com/in/venkata-rohith-918978305" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                  LinkedIn Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.instagram.com/y_rohith24/" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                  Instagram Profile
                </a>
              </li>
              <li className="mb-2">
                <a href="https://www.facebook.com/profile.php?id=100027778987343" target="_blank" rel="noopener noreferrer" className="d-flex align-items-center text-decoration-none">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg" alt="Facebook Logo" style={{ width: '24px', height: '24px', marginRight: '8px' }} />
                  Facebook Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
