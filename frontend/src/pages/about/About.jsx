import React, { Fragment } from "react";
import classes from "./About.module.css";
import Header from "../../components/UI/Header/Header";
const About = () => {
  return (
    <Fragment>
      <Header header="About Our Hospital" img={classes.headerImg} />
      <div className={classes.aboutContent}>
        <div className={classes.aboutDiv}>
          <img
            src="https://static01.nyt.com/images/2017/02/16/well/doctors-hospital-design/doctors-hospital-design-jumbo.jpg?quality=90&auto=webp"
            alt=""
          />
          <h3>Emergency Cases</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab
            consequuntur excepturi natus assumenda aperiam nostrum officia?
            Laudantium ducimus accusantium soluta adipisci quas illo nemo id.
            Aspernatur tempora eius ipsum.
          </p>
        </div>
        <div className={classes.aboutDiv}>
          <img
            src="https://hbr.org/resources/images/article_assets/2021/06/June21_10_1210057535.jpg"
            alt=""
          />
          <h3>Successful Surgery</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab
            consequuntur excepturi natus assumenda aperiam nostrum officia?
            Laudantium ducimus accusantium soluta adipisci quas illo nemo id.
            Aspernatur tempora eius ipsum.
          </p>
        </div>
        <div className={classes.aboutDiv}>
          <img
            src="https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/O2C2RFF4PUI6VF6BNTYRN77CNQ.jpg&w=767"
            alt=""
          />
          <h3>Express Care</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, ab
            consequuntur excepturi natus assumenda aperiam nostrum officia?
            Laudantium ducimus accusantium soluta adipisci quas illo nemo id.
            Aspernatur tempora eius ipsum.
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
