import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";

// export const BrandPageTemplate = ({ title, content, contentComponent }) => {
export const BrandPageTemplate = ({ markdownRemark }) => {
  console.log(markdownRemark);
  // const PageContent = contentComponent || Content;

  return (
    <section className="section section--gradient">
      {/* <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

// BrandPageTemplate.propTypes = {
//   title: PropTypes.string.isRequired,
//   content: PropTypes.string,
//   contentComponent: PropTypes.func,
// };

const BrandPage = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <Layout>
      <BrandPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  );
};

BrandPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BrandPage;

export const brandPageQuery = graphql`
  query BrandPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        title
        alt
        heroimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        herosection {
          title
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
        sectionblock {
          title
          text
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          alt
        }
      }
    }
  }
`;


// html
//       frontmatter {
//         title
//       }