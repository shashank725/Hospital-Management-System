import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header + " " + props.img}>
      <h1>{props.header}</h1>
    </div>
  );
};
export default Header;
