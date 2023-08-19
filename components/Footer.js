import React from "react";
import './footer.css';

function Footer() {
  function showAlert(link){
    const confirm= window.confirm('You are about to leave this website.....This cannot be held responsible for the content of this websites.')
    if(confirm==true){
      //window.location.href=link;
      window.open(link,'_blank')
    }
  
  }
  const MailtoLink = ({ email }) => {
    return (
      <a href={`mailto:${email}`} className=" email">Email</a>
    );
  };
  
  return (
    <>
      <div className="footer">
        <div className="head">
          <h3>Copyright &copy;</h3>
          <h3 className="about">ABOUT UP POLICE</h3>
          <h3 className="help">HELP DESK</h3>
          <h3 className="follow">FOLLOW US</h3>
          
          <h3 className="contact">Contact Web Developer</h3>
        </div>
        <div className="content">
          
          <p className="dis">
            MITANG | <br/> Disclaimer, Terms <br/>and 
            Condition |<br/> Copyright Policy |
            <br />
            Privacy Policy |<br/>Hyperlinking Policy
          </p>
      
          <ul className="police">
            <li><a href="https://uppolice.gov.in/site/writereaddata/siteContent/RTI/202008031111405028RTI_Rules%202015.pdf " target="_blank">
              Right to information</a></li>
            <li>Departmental Circulars</li>
            <li>Police Welfare</li>
            <li>UP Police at a Glance</li>
          </ul>
          <ul className="help1">
            <li>Help</li>
            <li>Feedback</li>
            <li>Do's and Don't</li>
          </ul>
          <ul className="follow1">
            <li onClick={()=>showAlert("https://www.facebook.com/uppolice/")}>Facebook</li>
            <li onClick={()=>showAlert("https://twitter.com/uppolice/")}>Twitter</li>
            <li onClick={()=>showAlert("https://www.youtube.com/channel/UCU6wKyV1ToMUSzAVQDLUaig")}>Youtube</li>
          </ul>

          <ul className="contact1">
            <li><b>Muskan -  &nbsp;</b><MailtoLink email="singhmuskan2109@gmail.com"/> &nbsp;
            +91 7275382109</li>
            <li><b>Amita -  &nbsp;</b> <MailtoLink email="amitajaiswal246@gmail.com"/>  &nbsp; +91 6388669898</li>
            <li><b>Ankita -  &nbsp; </b><MailtoLink email="ankitarwww@gmail.com"/>  &nbsp; +91 6388774355</li>
            <li><b>Ginni -  &nbsp;</b><MailtoLink email="ginnitiwari27@gmail.com"/>  &nbsp;+91 6307829402</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
