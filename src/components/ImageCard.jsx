import styles from "../styles/ImageCard.module.css";

const ImageCard = ({ image }) => {
  if (!image || !image.urls) {
    return null;
  }

  return (
    <div className={styles.card}>
      <img
        src={image.urls.small}
        alt={image.alt_description || "No description available"}
      />
    </div>
  );
};

export default ImageCard;
