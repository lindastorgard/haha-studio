/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "./PreviewCompatibleImage";

const ImageGallery = ({ images }) => {
  return (
    <section
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(6, 1fr)",
        gridGap: 2,
      }}
    >
      {images.map((image, index) => {
        return (
          <div
            sx={{
              gridColumn: "span 3",
              gridRow: "1",
              "&:nth-of-type(3n)": {
                gridColumn: "span 2",
                gridRow: "2",
              },
              "&:nth-of-type(4n)": {
                gridColumn: "1 / 3",
                gridRow: "3",
              },
              "&:nth-of-type(5n)": {
                gridColumn: "3/7",
                gridRow: "2 / 4",
              },
              "&:nth-of-type(6n)": {
                gridColumn: "span 3",
                gridRow: "4",
              },
              "&:nth-of-type(7n)": {
                gridColumn: "span 3",
                gridRow: "4",
              },
              "&:nth-of-type(8n)": {
                gridColumn: "span 2",
                gridRow: "5",
              },
              "&:nth-of-type(9n)": {
                gridColumn: "1 / 3",
                gridRow: "6",
              },
              "&:nth-of-type(10n)": {
                gridColumn: "3/7",
                gridRow: "5 / 7",
              },
            }}
            key={index}
          >
            <PreviewCompatibleImage
              imageInfo={{
                image: image.image,
                alt: image.alttext,
              }}
            />
          </div>
        );
      })}
    </section>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  images: PropTypes.array.isRequired,
};
