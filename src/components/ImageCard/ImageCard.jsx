import css from "./ImageCard.module.css";

export default function ImageCard({ item }) {
  return (
    <>
      <div>
        <img src={item.urls.small} alt={item.alt_description} />
        <ul className={css.list}>
          <li className={css.listItem}>
            <h4>Likes</h4>
            <p>{item.likes}</p>
          </li>
        </ul>
      </div>
    </>
  );
}
