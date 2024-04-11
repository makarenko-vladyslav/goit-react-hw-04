import css from "./ImageGallery.module.css";

import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items, openModal }) {
  return (
    <>
      <ul className={css.list}>
        {items.map((item) => (
          <li className={css.listItem} key={item.id}>
            <ImageCard item={item} toggleModal={openModal}></ImageCard>
          </li>
        ))}
      </ul>
    </>
  );
}
