import React from 'react'

interface Props {
    
}

const Footer = (props: Props) => {
    return (
        <>
            <footer id="footer">
    <div className="container">
      <div className="copyright">
        &copy; Copyright <strong><span>Jobcall</span></strong>. All Rights Reserved
      </div>
      <div className="credits">
      </div>
    </div>
  </footer>

  <a href="#io" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short">IO</i></a>

        </>
    )
}
export default Footer