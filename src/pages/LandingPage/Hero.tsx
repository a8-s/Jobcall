import React from 'react'
import { StyledHero } from './StyledHero';
import hero from '../../assets/img/hero-img.png'
import { Form } from 'react-bootstrap';

interface Props {
}

export const LandingHero = (props: Props) => {
    return (
		<StyledHero id="hero" className="d-flex align-items-center">

    <div className="container">
      <div className="row">
        <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
          <h1>Better Solutions For Your Business</h1>
          <h2>We are team of talented designers making websites with Bootstrap</h2>
          <div className="d-flex justify-content-center justify-content-lg-start align-items-center" >
		  <Form.Control size="lg" type="text" placeholder="Find Employee" />
            <a href="/applicant" className="btn-get-started scrollto">Go</a>
            </div>
        </div>
        <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
          <img src={hero} className="img-fluid animated" alt=""/>
        </div>
      </div>
    </div>
</StyledHero>
    )
}
