import classes from "./Service.module.css";
import { Fragment } from "react";
import { BiTestTube } from "react-icons/bi";
import Header from "../../components/UI/Header/Header";
import BasicHeading from "../../components/UI/BasicHeading/BasicHeading";
const Service = () => {
  return (
    <Fragment>
      <Header header="Our Standing Services" img={classes.headerImg} />
      <BasicHeading isFeatures />
      <BasicHeading isHeading />
      <div className={classes.detailsGrid}>
        <div>
          <img
            className={classes.detailsGridImg}
            src="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/09/1030_SS_Chemical-1028x579.jpg"
            alt=""
          />
        </div>
        <div className={classes.featureSecondary}>
          <div className={classes.featureConData}>
            <BiTestTube className={classes.featureIconData} />

            <div className={classes.featureHead}>
              <h3>Public Health Programs</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
              </p>
            </div>
          </div>
          <div className={classes.featureConData}>
            <BiTestTube className={classes.featureIconData} />
            <div className={classes.featureHead}>
              <h3>Extramural Funding</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
              </p>
            </div>
          </div>
          <div className={classes.featureConData}>
            <BiTestTube className={classes.featureIconData} />
            <div className={classes.featureHead}>
              <h3>Blood Resources Program</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Service;
