import { Fragment } from "react";
import classes from "./BasicHeading.module.css";
import { FaFileMedicalAlt } from "react-icons/fa";
import { ImLab } from "react-icons/im";
import { BiTestTube, BiPlusMedical } from "react-icons/bi";
import { GrTest } from "react-icons/gr";
import { GiHypodermicTest } from "react-icons/gi";

const BasicHeading = (props) => {
  const isHeading = props.isHeading;
  const isFeatures = props.isFeatures;
  const heading = (
    <Fragment>
      <h2>{props.header || "Our Standing Features"}</h2>
      <p className={classes.featuresText}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
        velit earum fuga nobis perferendis. Eum, quos sint provident iste esse
        placeat praesentium dignissimos delectus non sed cumque quo fugit.
      </p>
    </Fragment>
  );
  const features = (
    <div className={classes.featuresData}>
      <div>
        <ImLab className={classes.featureIcon} />
        <h3>Diagnostic</h3>
      </div>
      <div>
        <BiTestTube className={classes.featureIcon} />
        <h3>Testing</h3>
      </div>
      <div>
        <GrTest className={classes.featureIcon} />
        <h3>Analyzing</h3>
      </div>
      <div>
        <GiHypodermicTest className={classes.featureIcon} />
        <h3>Treatment</h3>
      </div>
      <div>
        <BiPlusMedical className={classes.featureIcon} />
        <h3>Pharmacy</h3>
      </div>
      <div>
        <FaFileMedicalAlt className={classes.featureIcon} />
        <h3>Recepy</h3>
      </div>
    </div>
  );
  return (
    <section className={classes.features}>
      {isHeading ? heading : ""}
      {isFeatures ? features : ""}
    </section>
  );
};
export default BasicHeading;
