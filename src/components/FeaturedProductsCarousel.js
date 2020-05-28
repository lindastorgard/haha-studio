/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import { useRef } from "react";
import PreviewCompatibleImage from "./PreviewCompatibleImage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const FeaturedProductsCarousel = ({ images, colors, slug }) => {
  let sliderRef = useRef(null);
  const settings = {
    initialSlide: 0,
    className: "center",
    swipeToSlide: true,
    slidesPerRow: 1,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => {
          if (image.productcolor !== null) {
            console.log("products", index, image.productcolor);
            return (
              <div
                key={`${image.productcolor}${index}`}
                sx={{
                  height: "300px",
                  div: {
                    height: "100%",
                  },
                }}
              >
                <Link to={slug}>
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: image.image,
                    }}
                  />
                </Link>
              </div>
            );
          }
          return null;
        })}
      </Slider>
      <div>
        {colors.map((color, index) => {
          console.log("colors", index, color.colorname);
          return (
            <div
              key={index}
              onClick={() => sliderRef.current.slickGoTo(index)}
              sx={{
                height: "15px",
                width: "15px",
                borderRadius: "50%",
                backgroundColor: color.hexcode,
              }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedProductsCarousel;

FeaturedProductsCarousel.propTypes = {
  images: PropTypes.array.isRequired,
  colors: PropTypes.array.isRequired,
  slug: PropTypes.string.isRequired,
};
