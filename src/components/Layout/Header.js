import classes from "./Header.module.css";
import mealsImage from "../../assets/meals.jpg";
import HeaderCardButton from "./HeaderCardButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Biryani!</h1>
        <HeaderCardButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Table full of delicious meal!" />
      </div>
    </>
  );
};

export default Header;
