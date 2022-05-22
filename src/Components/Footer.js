import React from 'react'
import './Footer.css'
// import FacebookOutlinedIcon from '@material-ui/icons/FacebookOutlined';
// import FacebookIcon from '@mui/icons-material/Facebook';
import { Facebook, Instagram, Twitter } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'>
        <footer>
        <section className="">
    <div className="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div className="row mt-3">
        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* <!-- Content --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Contact
          </h6>
          <p>
            <a href="#!" className="text-reset">Request a Test Drive</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Book</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Carrer</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contact Us</a>
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
           Xtremecars
          </h6>
          <p>
            12th Floor Vishwaroop,
          </p>
          <p>
           IT Park,Sector-32,Vashi,
          </p>
          <p>
            Navi Mumbai, 400705
          </p>
          <p>
           Maharastra,India
          </p>
          <br></br>
          <br></br>
          <br></br>
          <p>
           Phone:+912160000000
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4">
            Legals
          </h6>
          <p>
            Legal Discliamer 
          </p>
          <p>
            Privacy Policy
          </p>
          <p>
           Cookies Policy
          </p>
        </div>
        {/* <!-- Grid column --> */}

        {/* <!-- Grid column --> */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 ">
          {/* <!-- Links --> */}
          <h6 className="text-uppercase fw-bold mb-4 contactus">
            Contact with US
          </h6>
          <div className='contactus'>
         <p ><Facebook></Facebook></p>
         <p><Instagram></Instagram></p>
         <p><Twitter></Twitter></p>
         </div> 
        </div>
        
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
        </footer>
    </div>
  )
}

export default Footer