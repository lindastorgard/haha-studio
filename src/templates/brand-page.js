import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import BackgroundImg from "../components/BackgroundImg";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Content, { HTMLContent } from "../components/Content";

export const BrandPageTemplate = ({
  heroimage,
  imageAlt,
  title,
  sectionblock,
  herosection,
  content,
  contentComponent,
}) => {
  console.log(contentComponent);
  const PageContent = contentComponent || Content;
  console.log(PageContent);
  return (
    <section>
      <BackgroundImg
        imageInfo={{
          image: heroimage,
          alt: imageAlt,
          title: title,
        }}
      />
      <PreviewCompatibleImage
        imageInfo={{
          image: herosection.image,
          alt: herosection.imageAlt,
        }}
      />
      <h2>{herosection.title}</h2>
      <PageContent content={content} />

      {/* {sectionblock?.map((sectionblock) => {
        return (
          <div>
            {sectionblock.title}
            {sectionblock.body}
            {sectionblock.alt}
          </div>
        );
      })} */}
    </section>
  );
};

BrandPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
};

const BrandPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;

  return (
    <Layout>
      <BrandPageTemplate
        content={frontmatter.herosection.body}
        contentComponent={HTMLContent}
        title={frontmatter.title}
        heroimage={frontmatter.heroimage}
        imageAlt={frontmatter.alt}
        blocksection={frontmatter.blocksection}
        herosection={frontmatter.herosection}
      />
    </Layout>
  );
};

BrandPage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default BrandPage;

export const brandPageQuery = graphql`
  query BrandPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "brand-page" } }) {
      id
      frontmatter {
        heroimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        title
        sectionblock {
          title
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          body
          alt
        }
        herosection {
          alt
          body
          image {
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          title
        }
      }
    }
  }
`;
