/** @jsx jsx */
import { jsx, Styled } from "theme-ui";
import { Link } from "gatsby";
import PropTypes from "prop-types";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";

const Sectionblock = ({ section, color }) => {
  console.log(section);
  return (
    <article
      sx={{
        display: "flex",
        flexDirection: ["column", "row"],
        backgroundColor: color,
        color: "text",
        "&:nth-of-type(2)": {
          flexDirection: [null, "row-reverse"],
        },
      }}
    >
      <div sx={{ flex: 3 }}>
        <PreviewCompatibleImage
          imageInfo={{
            image: section.image,
            alt: section.alt,
          }}
        />
      </div>
      <div sx={{ flex: 2, p: 5, alignSelf: "center" }}>
        <Styled.h2>{section.title}</Styled.h2>
        <p>{section.text}</p>
        <Link to="#" className="navbar-item">
          {section.linktitle}
        </Link>
      </div>
    </article>
  );
};

export default Sectionblock;

Sectionblock.propTypes = {
  section: PropTypes.object,
  color: PropTypes.string,
};
