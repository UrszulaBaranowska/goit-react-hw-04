import { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import Loader from "./components/Loader";
import LoadMoreBtn from "./components/LoadMoreButton";
import ImageModal from "./components/ImageModal";
import ErrorMessage from "./components/ErrorMessage";
import "./App.css";

const API_KEY = "NKzXl1ti2I6lgGLOh6bUvsRv0DptfO3XsANXmhQ4LNQ";

const App = () => {
  const [query, setQuery] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const fetchImages = async (query, page) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.unsplash.com/search/photos`,
        {
          params: {
            query,
            page,
            per_page: 12,
            client_id: API_KEY
          }
        }
      );
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (error) {
      setError("Error fetching images");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setImages([]);
    setPage(1);
    fetchImages(newQuery, 1);
  };

  const loadMoreImages = () => {
    fetchImages(query, page + 1);
    setPage((prevPage) => prevPage + 1);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery images={images} onImageClick={handleImageClick} />
      {isLoading && <Loader />}
      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMoreImages} />
      )}
      {showModal && <ImageModal image={selectedImage} onClose={closeModal} />}
    </div>
  );
};

export default App;
