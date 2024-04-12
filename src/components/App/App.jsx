import { useEffect, useRef, useState } from "react";
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
  const [modal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState("");
  const [prevImagesLength, setPrevImagesLength] = useState(0);
  const [shouldFetch, setShouldFetch] = useState(false);

  const newImagesRef = useRef();

  useEffect(() => {
    if (images.length > prevImagesLength) {
      setTimeout(() => {
        newImagesRef.current[
          images.length - prevImagesLength - 1
        ]?.scrollIntoView({ behavior: "smooth" });
      }, 0);
      setPrevImagesLength(images.length);
    }
  }, [images]);

  useEffect(() => {
    const fetchNewImages = async () => {
      try {
        setError(false);
        setLoading(true);
        const data = await fetchImages(topic, page);
        setimages((prevImages) => [...prevImages, ...data.results]);
        setPage((prevPage) => prevPage + 1);
        page >= data.total_pages ? setloadMore(false) : setloadMore(true);
      } catch (error) {
        setError(true);
        setloadMore(false);
      } finally {
        setLoading(false);
        setShouldFetch(false);
      }
    };

    shouldFetch && fetchNewImages();
  }, [shouldFetch]);

  const handleImages = (newTopic) => {
    setimages([]);
    setTopic(newTopic);
    setPage(1);
    setShouldFetch(true);
  };

  const handleLoadMore = () => {
    setShouldFetch(true);
  };

  function handleModal(imageUrl) {
    setModal(!modal);
    setModalImage(imageUrl);
  }

  return (
    <>
      <SearchBar onSubmit={handleImages}></SearchBar>

      {error ? (
        <ErrorMessage />
      ) : (
        <>
          {images.length > 0 && (
            <>
              <ImageGallery
                items={images}
                toggleModal={handleModal}
                ref={newImagesRef}
              />
            </>
          )}
          {loading && <Loader />}
          {loadMore && <LoadMoreBtn onClick={handleLoadMore}></LoadMoreBtn>}
          <ImageModal
            isOpen={modal}
            toggleModal={handleModal}
            imageUrl={modalImage}
          ></ImageModal>
        </>
      )}
    </>
  );
}
