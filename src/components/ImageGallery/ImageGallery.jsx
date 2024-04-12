// import css from "./ImageGallery.module.css";
// import ImageCard from "../ImageCard/ImageCard";
// import { forwardRef } from "react";

// const ImageGallery = forwardRef(({ items, toggleModal }, ref, lastImage) => (
//   <ul className={css.list}>
//     {items.map((item) => (
//       lastImage = item.id;
//       <li className={css.listItem} key={item.id}>
//         <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
//       </li>

//     ))}
//   </ul>
// ));

// ImageGallery.displayName = "ImageGallery";

// export default ImageGallery;

// import css from "./ImageGallery.module.css";
// import ImageCard from "../ImageCard/ImageCard";
// import { forwardRef, useRef } from "react";

// const ImageGallery = forwardRef(({ items, toggleModal }, ref) => {
//   // ref = useRef(null);

//   return (
//     <ul className={css.list}>
//       {items.map((item, index) => {
//         if (index === items.length - 1) {
//           ref.current = item.id;
//         }
//         return (
//           <li className={css.listItem} key={item.id}>
//             <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
//           </li>
//         );
//       })}
//     </ul>
//   );
// });

// ImageGallery.displayName = "ImageGallery";

// export default ImageGallery;

// import css from "./ImageGallery.module.css";
// import ImageCard from "../ImageCard/ImageCard";
// import { forwardRef } from "react";

// const ImageGallery = forwardRef(({ items, toggleModal }, ref) => {
//   return (
//     <ul className={css.list}>
//       {items.map((item, index) => (
//         <li
//           className={css.listItem}
//           key={item.id}
//           ref={index === 0 ? ref : null}
//         >
//           <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
//         </li>
//       ))}
//     </ul>
//   );
// });

// ImageGallery.displayName = "ImageGallery";

// export default ImageGallery;

import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { forwardRef } from "react";

const ImageGallery = forwardRef(({ items, toggleModal }, ref) => {
  const NEW_IMAGE_INDEX = items.length - 19;
  const isNewImage = (index) => index === NEW_IMAGE_INDEX;

  return (
    <ul className={css.list}>
      {items.map((item, index) => (
        <li
          className={css.listItem}
          key={item.id}
          ref={isNewImage(index) ? ref : null}
        >
          <ImageCard item={item} toggleModal={toggleModal}></ImageCard>
        </li>
      ))}
    </ul>
  );
});

ImageGallery.displayName = "ImageGallery";

export default ImageGallery;
