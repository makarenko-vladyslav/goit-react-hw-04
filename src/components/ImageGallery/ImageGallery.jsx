import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, toggleModal }) {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.listItem} key={item.id}>
            <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
          </li>
        ))}
      </ul>
    </>
  );
}
