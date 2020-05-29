/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import PropTypes from "prop-types";
import BackgroundImage from "gatsby-background-image";

const HeroImage = ({ title, image, alt }) => {
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

  // if (!!childImageSharp) {
  //   return (
  //     <BackgroundImage
  //       fluid={image.childImageSharp.fluid}
  //       alt={alt}
  //       backgroundColor={`#F1F1EF`}
  //       style={{
  //         height: "100vh",
  //       }}
  //     >
  //       <h2
  //         sx={{
  //           position: "absolute",
  //           bottom: 3,
  //           left: 4,
  //           fontSize: 5,
  //           color: "background",
  //         }}
  //       >
  //         {title}
  //       </h2>
  //     </BackgroundImage>
  //   );
  // }

  if (!!image && typeof image === "string")
    return (
      <div sx={{ height: "100vh" }}>
        <img src={image} alt={alt} />
        <h2
          sx={{
            position: "absolute",
            bottom: 3,
            left: 4,
            fontSize: 5,
            color: "white",
          }}
        >
          {title}
        </h2>
      </div>
    );

  return null;
};

export default HeroImage;

HeroImage.propTypes = {
  image: PropTypes.object,
};
