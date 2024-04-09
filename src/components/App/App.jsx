import { useState } from "react";
import { fetchImages } from "../../images-api";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import ImageModal from "../ImageModal/ImageModal";

import "./App.module.css";

export default function App() {
  const [images, setimages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [topic, setTopic] = useState("");

  const handleImages = async (newTopic) => {
    try {
      setimages([]);
      setError(false);
      setLoading(true);
      setTopic(newTopic);
      const data = await fetchImages(newTopic, page);
      setimages(data);
    } catch (error) {
      setError(true);
      setPage(0);
    } finally {
      setLoading(false);
    }
  };

  const handleLoadMore = async () => {
    try {
      setError(false);
      setLoading(true);
      const data = await fetchImages(topic, page + 1);
      setimages([...images, ...data]);
      setPage(page + 1);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleImages}></SearchBar>

      {!error || images.length > 0 ? (
        <>
          <ImageGallery items={images} />
          {loading && <Loader />}
          <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>
          <ImageModal></ImageModal>
        </>
      ) : (
        <ErrorMessage />
      )}
    </>
  );
}
