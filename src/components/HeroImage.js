/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

const HeroImage = ({ image, alt, title }) => {
  console.log(image);
  return (
    <div>
      {image ? (
        <BackgroundImage
          fluid={image.childImageSharp.fluid}
          alt={alt}
          backgroundColor={`#F1F1EF`}
          style={{
            height: "100vh",
          }}
        >
          <h2
            sx={{
              position: "absolute",
              bottom: 3,
              left: 4,
              fontSize: 5,
              color: "background",
            }}
          >
            {title}
          </h2>
        </BackgroundImage>
      ) : null}
    </div>
  );
};

export default HeroImage;

HeroImage.propTypes = {
  image: PropTypes.object,
};