import { mdiMagnify } from "@mdi/js";
import Icon from "@mdi/react";
import styles from "./SearchBar.module.css";
import PropTypes from "prop-types";
import { useState } from "react";

const SearchBar = ({ handleSearch }) => {
  const [input, setInput] = useState("");

  const triggerSearch = () => handleSearch(input);
  const handleChange = (e) => setInput(e.target.value);
  const handleEnterKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      triggerSearch();
    }
  };

  return (
    <label className={styles.label}>
      <input
        className={styles.searchInput}
        value={input}
        onChange={handleChange}
        onKeyDown={handleEnterKeyPress}
        type="text"
      />
      <Icon
        className={styles.icon}
        onClick={triggerSearch}
        path={mdiMagnify}
        size={1}
      />
    </label>
  );
};

SearchBar.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default SearchBar;
