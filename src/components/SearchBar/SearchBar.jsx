import toast, { Toaster } from "react-hot-toast";

// import css from "./SearchBar.module.css";

export default function SearchBar({ onSubmit }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();

    const form = evt.target;
    const topic = form.elements.topic.value;

    !topic.trim()
      ? toast.error("Your should to enter text for image search!")
      : onSubmit(topic);

    form.reset();
  };

  return (
    <>
      <header>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            name="topic"
          />
          <button type="submit">Search</button>
        </form>
        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            duration: "40000",
            style: {
              border: "1px solid #ff4800",
              padding: "16px",
              color: "#ff4800",
            },
          }}
        />
      </header>
    </>
  );
}
