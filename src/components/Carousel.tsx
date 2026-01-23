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
            alt="image1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="public/images/movie2.jpg"
            className="d-block w-100 carousel-img"
            alt="image2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="public/images/movie1.jpg"
            className="d-block w-100 carousel-img"
            alt="image3"
          />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
