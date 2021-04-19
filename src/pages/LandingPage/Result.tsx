import React from 'react'
import {StyledResult} from './StyledResult'
import team1 from '../../assets/img/team/team-1.jpg'
import team2 from '../../assets/img/team/team-2.jpg'
import team3 from '../../assets/img/team/team-3.jpg'
import team4 from '../../assets/img/team/team-4.jpg'
import { Link } from 'react-router-dom'

interface Props {
    
}

const Result = (props: Props) => {
    console.log(Array(10).fill('a'))
    return (
        <StyledResult >
            
            <div className="container" data-aos="fade-up">

            <div className="section-title">
            <h2>Search Result for {""}</h2>
             </div>

            <div className="row">

            <div className="col-lg-6">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
              <div className="pic"><img src={team2} className="img-fluid" alt=""/></div>
              <div className="member-info" >
                <h4>Walter White</h4>
                <span>Chief Executive Officer</span>
                <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                <div className="social">
                  <a href="#twitter"><i className="ri-twitter-fill"></i></a>
                  <a href="#facebook"><i className="ri-facebook-fill"></i></a>
                  <a href="#facebook"><i className="ri-instagram-fill"></i></a>
                  <a href="#facebook"> <i className="ri-linkedin-box-fill"></i> </a>

                </div>
                <Link to="/applicant" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4 mt-lg-0">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
              <div className="pic"><img src={team1} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Sarah Jhonson</h4>
                <span>Product Manager</span>
                <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                <div className="social">
                  <a href="#twitter"><i className="ri-twitter-fill"></i></a>
                  <a href="#facebook"><i className="ri-facebook-fill"></i></a>
                  <a href="#facebook"><i className="ri-instagram-fill"></i></a>
                  <a href="#facebook"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>

                <Link to="/applicant" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
              <div className="pic">
                  <img src={team3} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>William Anderson</h4>
                <span>CTO</span>
                <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                <div className="social">
                  <a href="#twitter"><i className="ri-twitter-fill"></i></a>
                  <a href="#facebook"><i className="ri-facebook-fill"></i></a>
                  <a href="#facebook"><i className="ri-instagram-fill"></i></a>
                  <a href="#facebook"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>

                <Link to="/applicant" className="btn btn-primary">View Details</Link>
              </div>
            </div>
          </div>

          <div className="col-lg-6 mt-4">
            <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
              <div className="pic"><img src={team4} className="img-fluid" alt=""/></div>
              <div className="member-info">
                <h4>Amanda Jepson</h4>
                <span>Accountant</span>
                <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                <div className="social">
                  <a href="#twitter"><i className="ri-twitter-fill"></i></a>
                  <a href="#facebook"><i className="ri-facebook-fill"></i></a>
                  <a href="#facebook"><i className="ri-instagram-fill"></i></a>
                  <a href="#facebook"> <i className="ri-linkedin-box-fill"></i> </a>
                </div>
                
                <Link to="/applicant" className="btn btn-primary">View Details</Link>
              </div>

            </div>
          </div>

        </div>

      </div>
        </StyledResult>
    )
}

export default Result
