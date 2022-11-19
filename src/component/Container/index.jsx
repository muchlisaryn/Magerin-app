export default function Container({ children }) {
  return (
    <>
      <div className="container-fluid">
        <div className="row row-cols-lg-6 g-lg-3">{children}</div>
      </div>
    </>
  );
}
