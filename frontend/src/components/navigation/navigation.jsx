// Css
import classes from "./navigation.module.css";

// Img
import logo from "../../Assets/Logo Light Crop Short.png";

// Components
import { NavLink , Link} from "react-router-dom";
import {
  FaPhoneAlt,
  FaRegClock,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
// Main Function
const Navigation = () => {
  // NavItems
  const navItems = [
    { link: "/about", item: "About"},
    { link: "/services", item: "Services" },
    { link: "/account", item: "Account" },
    { link: "/contact", item: "Contact"},
    { link: "/admin", item: "Admin"},
  ];
  return (
    <nav className={classes.navigation}>
      <div className={classes.primary}>
        <div className={classes.primaryContact}>
          <div className={classes.contactDetail}>
            <FaPhoneAlt className={classes.primaryIcon} />
            <p>+91 62030 59082</p>
          </div>
          <div className={classes.contactDetail}>
            <FaRegClock className={classes.primaryIcon} />
            <p>Mon - Fri 09:00am - 06:00pm</p>
          </div>
          <div className={classes.contactDetail}>
            <FiMail className={classes.primaryIcon} />
            <p>himanshukhaitan108@gmail.com</p>
          </div>
        </div>
        <div className={classes.primarySocials}>
          <p>Follow Us At:</p>
          <div className={classes.socialData}>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaFacebookF className={classes.primaryIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaInstagram className={classes.primaryIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaLinkedinIn className={classes.primaryIcon} />
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/himanshu-khaitan/"
            >
              <FaTwitter className={classes.primaryIcon} />
            </a>
          </div>
        </div>
      </div>
      <div className={classes.secondary}>
        <div className={classes.logo}>
          <Link to="/">
            <img
              className={classes.navigationLogo}
              src={logo}
              alt="Care & Cure Hospital"
            />
          </Link>
        </div>
        <div className={classes.navContainer}>
          <ul className={classes.navItems}>
            {navItems.map((element, index) => {
              return (
                <li key={index} className={`${classes.navItem}`}>
                  <NavLink activeClassName={classes.active}
                    to={element.link}
                  >
                    {element.item}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
