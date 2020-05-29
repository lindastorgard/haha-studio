/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Sectionblock from "../components/Sectionblock";
import HeroImage from "../components/HeroImage";

export const IndexPageTemplate = ({ title, image, imageAlt, section }) => {
  return (
    <section>
      <HeroImage image={image} title={title} alt={imageAlt} />
      {section?.map((section) => {
        return (
          <Sectionblock
            key={section.title}
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
          title
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
