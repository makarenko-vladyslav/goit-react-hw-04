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
  const [loadMore, setloadMore] = useState(false);
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
      setimages(data.results);
    } catch (error) {
      setError(true);
      setPage(0);
    } finally {
      setLoading(false);
      setloadMore(true);
    }
  };

  const handleLoadMore = async () => {
    try {
      setError(false);
      setloadMore(false);
      setLoading(true);
      const newPage = page + 1;
      const data = await fetchImages(topic, newPage);
      setimages([...images, ...data.results]);
      setPage(newPage);

      newPage >= data.total_pages ? setloadMore(false) : setloadMore(true);
    } catch (error) {
      setError(true);
      setloadMore(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SearchBar onSubmit={handleImages}></SearchBar>

      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {images.length > 0 && <ImageGallery items={images} />}
          {loading && <Loader />}
          {loadMore && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
          <ImageModal></ImageModal>
        </>
      )}
    </>
  );
}
