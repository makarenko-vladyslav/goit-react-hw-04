import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";

const ImageGallery = forwardRef(({ items, toggleModal }, ref) => (
  <ul className={css.list}>
    {items.map((item, index) => (
      <li className={css.listItem} key={item.id} ref={index === 0 ? ref : null}>
        <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
      </li>
    ))}
  </ul>
));

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
