/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

const BackgroundImg = ({ imageInfo }) => {
  console.log(imageInfo);
  const { alt = "", childImageSharp, image, title } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
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
    );
  }

  if (!!childImageSharp) {
    return (
      <BackgroundImage
        fluid={childImageSharp.fluid}
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
    );
  }

  if (!!image && typeof image === "string")
    return (
      <div>
        <img src={image} alt={alt} />{" "}
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
      </div>
    );

  return null;
};

BackgroundImg.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    title: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
  }).isRequired,
};

export default BackgroundImg;
