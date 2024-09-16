import { Oval } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Oval height={80} width={80} color="#00BFFF" />
    </div>
  );
};

export default Loader;
