import { useState } from "react";
import toast from "react-hot-toast";
import styles from "../styles/SearchBar.module.css";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSubmit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") {
      toast.error("Please enter a search term");
      return;
    }
    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <header className={styles.header}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          className={styles.input}
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
        <FaSearch className={styles.searchIcon} onClick={handleSubmit} />{" "}
      </form>
    </header>
  );
};

export default SearchBar;
