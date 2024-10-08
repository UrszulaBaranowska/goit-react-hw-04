import { RotatingLines } from "react-loader-spinner";
import styles from "../styles/Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RotatingLines
        visible={true}
        height="96"
        width="96"
        color="grey"
        strokeWidth="5"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
