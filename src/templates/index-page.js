/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sectionblock from "../components/Sectionblock";
import BackgroundImg from "../components/BackgroundImg";

export const IndexPageTemplate = ({ title, image, imageAlt, section }) => {
  return (
    <section>
      <BackgroundImg
        imageInfo={{
          image: image,
          alt: imageAlt,
          title: title,
        }}
      />
      {section?.map((section) => {
        return (
          <Sectionblock
            key={section.heading}
            section={section}
            color={"#F1F1EF"}
          />
        );
      })}
    </section>
  );
};

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  section: PropTypes.array,
};

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        image={frontmatter.image}
        imageAlt={frontmatter.alt}
        heading={frontmatter.heading}
        section={frontmatter.section}
      />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      id
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        heading
        section {
          heading
          text
          linktitle
          alt
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
