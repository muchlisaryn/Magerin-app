import Navbar from "../Navbar";

export default function Container({ children }) {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row row-cols-lg-5">{children}</div>
      </div>
    </>
  );
}
