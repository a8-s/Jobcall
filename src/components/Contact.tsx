import React from 'react'

interface Props {
    
}

const Contact = (props: Props) => {
    return (
    <section id="contact" className="contact section-bg">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <div className="row">

          <div className="col-lg-4 col-md-4">
            <div className="contact-about">
              <h3>JobCall</h3>
              <p>Cras fermentum odio eu feugiat. Justo eget magna fermentum iaculis eu non diam phasellus. Scelerisque felis imperdiet proin fermentum leo. Amet volutpat consequat mauris nunc congue.</p>
              <div className="social-links">
                <a href="#twitter" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#facebook" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#instagram" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="#linkedin" className="linkedin"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-4">
            <div className="info">
              <div className="d-flex align-items-center">
                <i className="bi bi-geo-alt"></i>
                <p>A108 Adam Street New York, NY 535022</p>
              </div>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-envelope"></i>
                <p>info@example.com</p>
              </div>

              <div className="d-flex align-items-center mt-4">
                <i className="bi bi-phone"></i>
                <p>+1 5589 55488 55s</p>
              </div>

            </div>
          </div>
          <div className="col-lg-4 col-md-8">
            <form  className="php-email-form">
              <div className="form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required/>
              </div>
              <div className="form-group mt-3">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required/>
              </div>
              <div className="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required/>
              </div>
              <div className="form-group mt-3">
                <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">Your message has been sent. Thank you!</div>
              </div>
              <div className="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>

    )
}

export default Contact
