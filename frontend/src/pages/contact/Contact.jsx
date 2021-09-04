import React, { Fragment } from "react";
import Header from "../../components/UI/Header/Header";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <Fragment>
      <Header img={classes.header} />
      <section className={classes.contact}>
        <div className={classes.contactDet}>
          <div className={classes.contactItem}>
            <img
              src="https://images.pexels.com/photos/1070945/pexels-photo-1070945.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
            <h3>Surat, Gujarat</h3>
            <ul>
              <li>
                <h4>Address -</h4>
                Vesu, Surat, Gujarat, India, Asia
              </li>
              <li>
                <h4>Email -</h4>
                himanshukhaitan108@gmail.com
              </li>
              <li>
                <h4>Phone -</h4>
                +91 63030 59082
              </li>
            </ul>
          </div>
          <div className={classes.contactItem}>
            <img
              src="https://images.pexels.com/photos/2100018/pexels-photo-2100018.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
              alt=""
            />
            <h3>Patna, Bihar</h3>
            <ul>
              <li>
                <h4>Address -</h4>
                Rajendranagar, Patna, Bihar, India, Asia
              </li>
              <li>
                <h4>Email -</h4>
                himanshukhaitan108@gmail.com
              </li>
              <li>
                <h4>Phone -</h4>
                +91 63030 59082
              </li>
            </ul>
          </div>
        </div>
        <div className={classes.contactForm}>
          <h1>Let's stay in touch!</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam sunt
            debitis a accusantium repudiandae. Labore corrupti praesentiu.
          </p>
          <form action="">
            <input
              type="text"
              className={classes.contactInput}
              placeholder="Name"
            />
            <input
              type="email"
              className={classes.contactInput}
              placeholder="E-Mail"
            />
            <input
              type="text"
              className={classes.contactInput}
              placeholder="Message"
            />

            <input
              type="submit"
              value="Send"
              className={`${classes.submitButton} buttonLight`}
            />
          </form>
        </div>
      </section>
    </Fragment>
  );
};
export default Contact;
