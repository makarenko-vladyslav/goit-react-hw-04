import { RotatingLines } from "react-loader-spinner";

export default function Loader() {
  return (
    <>
      <RotatingLines
        visible={true}
        height="60"
        width="60"
        color="grey"
        strokeColor="#c0e0e8"
        strokeWidth="5"
        animationDuration="0.5"
        ariaLabel="rotating-lines-loading"
      />
    </>
  );
}
