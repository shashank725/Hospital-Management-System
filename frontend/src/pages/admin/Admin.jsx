import classes from "./admin.module.css";
import { Fragment } from "react";
import Header from "../../components/UI/Header/Header";

const Admin = (props) => {
  return (
    <Fragment>
      <Header img={classes.headerImg}></Header>
      <div className={classes.formContainer}>
        <form action="" className={classes.loginFormComp}>
          <h2>Admin Login</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            ullam optio voluptas excepturi aliquid tempore fuga!
          </p>
          <input
            className={classes.loginInput}
            type="text"
            placeholder="Admin Id"
          />
          <input
            className={classes.loginInput}
            type="email"
            placeholder="E-mail"
          />
          <input
            className={classes.loginInput}
            type="password"
            name=""
            id=""
            placeholder="Password"
          />
          <input
            type="submit"
            value="Login"
            className={`${classes.loginButton} buttonLight`}
          />
        </form>
      </div>
    </Fragment>
  );
};
export default Admin;
