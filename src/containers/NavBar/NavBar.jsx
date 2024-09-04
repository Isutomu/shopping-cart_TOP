import Icon from "@mdi/react";
import { mdiCartOutline } from "@mdi/js";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import logo from "../../assets/logo.svg";
import SearchBar from "../../components/SearchBar/SearchBar";
import styles from "./NavBar.module.css";

const NavBar = ({ handleSearch, toggleVisibilityShoppingCart }) => {
  return (
    <header className={styles.header}>
      <Link className={styles.logo} to="/">
        <img src={logo} />
      </Link>
      <SearchBar handleSearch={handleSearch} />
      <Icon
        className={styles.shoppingCart}
        path={mdiCartOutline}
        size={1}
        onClick={toggleVisibilityShoppingCart}
      />
    </header>
  );
};

NavBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  toggleVisibilityShoppingCart: PropTypes.func.isRequired,
};

export default NavBar;
