// Components
import React, { Fragment } from "react";
import { FaPhoneAlt, FaLaptop } from "react-icons/fa";
import { BiTestTube } from "react-icons/bi";
import { Link } from "react-router-dom";
// Css
import classes from "./home.module.css";
import BasicHeading from "../../components/UI/BasicHeading/BasicHeading";

// Main Function
const Home = () => {
  return (
    <Fragment>
      <div className={classes.header}>
        <h3 className={classes.headerTitle}>Welcome</h3>
        <h1 className={classes.headerHeading}>With us, you feel secure .</h1>
        <p className={classes.headerText}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde,
          possimus quaerat maiores dignissimos neque placeat facilis maxime
          quasi id! Error veniam est nisi doloremque necessitatibus aut iusto.
          Dolorum, adipisci ullam?
        </p>
        <button className="buttonDark">
          <a
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/himanshu-khaitan/"
          >
            Learn More
          </a>
        </button>
      </div>
      <div className={classes.headerData}>
        <div className={classes.headerDiv + " " + classes.headerPrimary}>
          <FaPhoneAlt className={classes.headerDataNumber} />
          <h3>Emergency Cases</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptas, reiciendis necessitatibus incidunt in veritatis, unde illo
            eum voluptatum minus nam laboriosam maiores nesciunt excepturi ad
            cupiditate totam odio. Porro!
          </p>
          <h2>+91 62030 59082</h2>
        </div>
        <div className={classes.headerDiv + " " + classes.headerSecondary}>
          <FaLaptop className={classes.headerDataNumber} />
          <h3>Find Us Everywhere</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
            voluptas, reiciendis necessitatibus incidunt in veritatis, unde illo
            eum voluptatum minus nam laboriosam maiores nesciunt excepturi ad
            cupiditate totam odio. Porro! Lorem ipsum dolor sit amet consectetur
            adipisicing elit.
          </p>
        </div>
        <div className={classes.headerTertiary + " " + classes.headerDiv}>
          <h3>Opening Hours</h3>
          <div className={classes.headerDates}>
            <div>
              <h4>Monday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Tuesday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Wednesday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Thursday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Friday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Saturday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
            <div>
              <h4>Sunday -</h4>
              <p>07:00am - 08:00pm</p>
            </div>
          </div>
        </div>
      </div>
      <BasicHeading isHeading={true} isFeatures={true}/>
      <section className={classes.gridSection}>
        <div className={classes.gridPrimary}>
          <div className={classes.primaryImage}>&nbsp;</div>
          <div className={classes.primaryContent}>
            <div className={classes.primaryConData}>
              <BiTestTube className={classes.primaryIconData} />
              <div className={classes.primaryHead}>
                <h3>Medical Research</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
                </p>
              </div>
            </div>
            <div className={classes.primaryConData}>
              <BiTestTube className={classes.primaryIconData} />
              <div className={classes.primaryHead}>
                <h3>Public Health Programs</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
                </p>
              </div>
            </div>
            <div className={classes.primaryConData}>
              <BiTestTube className={classes.primaryIconData} />
              <div className={classes.primaryHead}>
                <h3>Extramural Funding</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
                </p>
              </div>
            </div>
            <div className={classes.primaryConData}>
              <BiTestTube className={classes.primaryIconData} />
              <div className={classes.primaryHead}>
                <h3>Blood Resources Program</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Nesciunt, a porro. Sed nobis distinctio tempore doloremque.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.gridSecondary}>
          <div className={classes.secondaryContent}>
            <h2>Praesent Ornare Dui Sed Erat Consequat</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus ullam modi ab accusamus debitis dolore, aliquid
              possimus consequuntur. Atque aut nihil veniam quidem tenetur optio
              autem sequi similique odio at. Atque aut nihil veniam quidem
              tenetur optio autem sequi similique odio at.
            </p>
            <button className="buttonLight">Find More</button>
          </div>
          <div className={classes.secondaryImage}>&nbsp;</div>
        </div>
      </section>
      <section className={classes.stats}>
        <div className={classes.statsItem}>
          <h3>67</h3>
          <p>Medical Research</p>
        </div>
        <div className={classes.statsItem}>
          <h3>73</h3>
          <p>Cardiology</p>
        </div>
        <div className={classes.statsItem}>
          <h3>53</h3>
          <p>Primary Care</p>
        </div>
        <div className={classes.statsItem}>
          <h3>83</h3>
          <p>Travel Medicine</p>
        </div>
      </section>
      <section className={classes.blogs}>
        <h2>Latest Medical News</h2>
        <p className={classes.blogsText}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi totam
          velit earum fuga nobis perferendis. Eum, quos sint provident iste esse
          placeat praesentium dignissimos delectus non sed cumque quo fugit.
        </p>

        <div className={classes.blogDatas}>
          <div className={classes.blogItem}>
            <Link href="/">
              <img
                className={classes.blogImg}
                src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </Link>
            <h3 className={classes.blogHead}>
              <Link href="/">Chemistry Opens New Doors</Link>
            </h3>
            <p className={classes.blogText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi fugit voluptatem dolores minus! Veniam
              delectus distinctio, praesentium nulla ullam, quos fugit
              exercitationem maiores reprehenderit at sit sed repellendus
              cumque?
            </p>
            <p className={classes.blogDate}>06 February, 2018</p>
          </div>
          <div className={classes.blogItem}>
            <Link href="/">
              <img
                className={classes.blogImg}
                src="https://images.pexels.com/photos/4226264/pexels-photo-4226264.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </Link>
            <h3 className={classes.blogHead}>
              <Link href="/">This is your Brain Outdoors</Link>
            </h3>
            <p className={classes.blogText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi fugit voluptatem dolores minus! Veniam
              delectus distinctio, praesentium nulla ullam, quos fugit
              exercitationem maiores reprehenderit at sit sed repellendus
              cumque?
            </p>
            <p className={classes.blogDate}>06 February, 2018</p>
          </div>
          <div className={classes.blogItem}>
            <Link href="/">
              <img
                className={classes.blogImg}
                src="https://images.pexels.com/photos/4033307/pexels-photo-4033307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt=""
              />
            </Link>
            <h3 className={classes.blogHead}>
              <Link href="/">Molecular Secrets Revealed</Link>
            </h3>
            <p className={classes.blogText}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perspiciatis excepturi fugit voluptatem dolores minus! Veniam
              delectus distinctio, praesentium nulla ullam, quos fugit
              exercitationem maiores reprehenderit at sit sed repellendus
              cumque?
            </p>
            <p className={classes.blogDate}>06 February, 2018</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Home;
