function Carousel() {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="public/images/movie3.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />
        </div>
        <div className="carousel-item">
          <img
            src="public/images/movie2.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />{" "}
        </div>
        <div className="carousel-item">
          <img
            src="public/images/movie1.jpg"
            className="d-block w-100 carousel-img"
            alt="..."
          />{" "}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
