import React from 'react'
import {GrFacebookOption,GrTwitter,GrLinkedinOption,GrGooglePlus,GrInstagram} from 'react-icons/gr'
import Footers from "../utils/Footers.css";
const Footer = () => {
  return (
    <div>
         <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="about">
            <span> About the company</span> As a PF ESI consultant, We provide PF & ESIC registration and monthly return filling
PF Withdrawal & Correction Services for Employees & Company. <b>-Suraj Bamola</b>
          </p>
          <div className="icons">
            <a href="#"><i className="fa fa-facebook" /> <GrFacebookOption/> </a>
            <a href="#"><i className="fa fa-twitter" /> <GrTwitter/> </a>
            <a href="#"><i className="fa fa-linkedin" />  <GrLinkedinOption/> </a>
            <a href="#"><i className="fa fa-google-plus" /> <GrGooglePlus/> </a>
            <a href="#"><i className="fa fa-instagram" />  <GrInstagram/> </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker" />
            <p><span> Naya Gaon &nbsp;&nbsp; (+91) 980 848 736</span> DEHRADUN &nbsp;&nbsp; INDIA</p>
          </div>
          <div>
            <i className="fa fa-phone" />
            <p> (+91) 980 848 7367</p>
          </div>
          <div>
            <i className="fa fa-envelope" />
            <p><a href="#"> SurajOffice@company.com</a></p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
          <h2> Company<span> logo</span></h2>
          <p className="menu">
            <a href="#"> Home&nbsp;</a> |
            <a href="#"> &nbsp;&nbsp;About&nbsp;</a> |
            <a href="#"> &nbsp;&nbsp;Services&nbsp;</a> |
            <a href="#"> &nbsp;&nbsp;Portfolio&nbsp;</a> |
            <a href="#"> &nbsp;&nbsp;News&nbsp;</a> |
            <a href="#"> &nbsp;&nbsp;Contact&nbsp;</a>
          </p>
          <p className="name"> Suraj Consultency © 2023</p>
        </div>
     
      </footer>
      <div class="copyright text-center">
    Copyright &copy; 2023 <span>&nbsp;&nbsp;&nbsp;All Rights Reserved.</span>
  </div>
    </div>
  )
}

export default Footer