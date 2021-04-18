import React from 'react'

interface Props {
    
}

const About = (props: Props) => {
    return (
    <section id="about" className="about">
      <div className="container">

        <div className="row no-gutters">
          <div className="image col-xl-4 d-flex align-items-stretch justify-content-center justify-content-lg-start"></div>
          
          <div className=" col-xl-8 ps-0 ps-lg-5 pe-lg-1 d-flex align-items-stretch">
           
            <div className="content d-flex flex-column justify-content-center">
              <div className="box">
              <h3>Voluptatem dignissimos provident quasi</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p> 
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    )
}

export default About
