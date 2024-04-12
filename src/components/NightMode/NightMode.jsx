import { HiOutlineSun } from "react-icons/hi2";
import { LuMoon } from "react-icons/lu";

import css from "./NightMode.module.css";

export default function NightMode({ toggleNightMode, nightMode }) {
  return (
    <>
      <div className={css.btnWrapper}>
        <button className={css.btn} onClick={toggleNightMode}>
          <i className={nightMode ? css.darkThema : css.lightThema}>
            {nightMode ? <HiOutlineSun /> : <LuMoon />}
          </i>
        </button>
      </div>
    </>
  );
}
