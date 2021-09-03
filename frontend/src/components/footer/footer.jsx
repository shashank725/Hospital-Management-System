import React, { Fragment } from "react";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { FiClock } from "react-icons/fi";

import classes from "./footer.module.css";

const Footer = () => {
  return (
    <Fragment>
      <section className={classes.contactSection}>
        <div className={classes.primaryContactSection}>
          <h2>Get Your Appointment or Call: +91 6203059082</h2>
          <p>Pellentesque habitant morbi tristique senectus.</p>
        </div>
        <div className={classes.secondaryContact}>
          <button className="buttonLight">
            <a href="/contact"> Contact Us</a>
          </button>
        </div>
      </section>
      <footer>
        <div className={classes.footer}>
          <div className={classes.footerPrimary}>
            <h3>About Care & Cure Hospital</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro
              odit vero laborum aperiam fugit optio debitis distinctio libero
              harum illum blanditiis saepe cum nihil ea eaque voluptatibus,
              doloremque ullam ad.
            </p>
          </div>
          <div className={classes.footerSecondary}>
            <h3>Reach us Here</h3>
            <div className={classes.footerContactData}>
              <div>
                <ImLocation className={classes.footerIcon} />
                <p>Patna, Bihar | Surat, Gujarat</p>
              </div>
              <div>
                <FaPhoneAlt className={classes.footerIcon} />
                <p>+91 62030 59082</p>
              </div>
              <div>
                <FiClock className={classes.footerIcon} />
                <p>Mon - Fri 09:00am - 06:00pm</p>
              </div>
            </div>
          </div>
          <div className={classes.footerTertiary}>
            <h3>Subscribe To Newsletter</h3>
            <form className={classes.footerForm} action="">
              <input
                className={classes.footerFormInput}
                type="text"
                placeholder="Full Name"
              />
              <input
                className={classes.footerFormInput}
                type="email"
                placeholder="E-Mail"
              />
              <input
                type="submit"
                value="Subscribe"
                className={`buttonLight ${classes.submitButton}`}
              />
            </form>
          </div>
        </div>
        <div className={classes.copyright}>
          <div className={classes.copyText}>
            &copy; 2021 | Care & Cure Hospital | Developed and Maintained By 
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              Himanshu Khaitan & Shashank Shekhar
            </a>
          </div>
          <div className={classes.copySocials}>
            <p>Follow Us on Social:</p>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaTwitter className={classes.copyIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaFacebookF className={classes.copyIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaInstagram className={classes.copyIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaLinkedinIn className={classes.copyIcon} />
            </a>
          </div>
        </div>
      </footer>
    </Fragment>
  );
};
export default Footer;
