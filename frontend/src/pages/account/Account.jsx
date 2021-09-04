import Heading from "../../components/UI/Header/Header";
import classes from "./Account.module.css";
import { Fragment } from "react";
const Account = () => {
  return (
    <Fragment>
      <Heading img={classes.headerImg} header="Connect Whenever You want" />
      <section className={classes.loginForm}>
        <form action="" className={classes.loginFormComp}>
          <h2>Patient Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ullam optio voluptas excepturi aliquid tempore fuga!
          </p>
          <input className={classes.loginInput} type="text" placeholder="Patient Id" />
          <input className={classes.loginInput} type="email" placeholder="E-mail" />
          <input
            className={classes.loginInput}
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <input type="submit" value="Login" className={`${classes.loginButton} buttonLight`} />
        </form>
      </section>
    </Fragment>
  );
};
export default Account;
