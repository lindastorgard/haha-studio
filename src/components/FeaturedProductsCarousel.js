/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedProductsCarousel = ({ images, colors }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {images.map((image) => {
        console.log(image.productcolor);
        if (image.productcolor !== null) {
          return (
            <div
              sx={{
                height: "300px",
                div: {
                  height: "100%",
                },
              }}
            >
              <PreviewCompatibleImage
                imageInfo={{
                  image: image.image,
                }}
              />
            </div>
          );
        }
        return null;
      })}
    </Slider>
  );
};

export default FeaturedProductsCarousel;

FeaturedProductsCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
};
