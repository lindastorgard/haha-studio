/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SectionContainer from "../components/SectionContainer";
import ImageGallery from "../components/ImageGallery";
import FeaturedProducts from "../components/FeaturedProducts";

export const ProjectPostTemplate = ({
  description,
  details,
  featuredimage,
  featuredimagealt,
  photocredits,
  releaseyear,
  title,
  imagegallery,
  helmet,
  relatedproductstitle,
  products,
}) => {
  return (
    <SectionContainer>
      {helmet || ""}
      <section sx={{ display: "flex", alignItems: "center" }}>
        {featuredimage ? (
          <div sx={{ flex: 3 }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: featuredimagealt,
              }}
            />
            <p>{photocredits}</p>
          </div>
        ) : null}
        <article sx={{ flex: 2, p: 4 }}>
          <h1>{title}</h1>
          <p>{details}</p>
          <p>{releaseyear}</p>
          <p>{description}</p>
        </article>
      </section>
      {imagegallery ? <ImageGallery images={imagegallery} /> : null}

      {/* <FeaturedProducts products={products} title={relatedproductstitle} /> */}
    </SectionContainer>
  );
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <ProjectPostTemplate
        description={post.frontmatter.description}
        details={post.frontmatter.details}
        featuredimage={post.frontmatter.featuredimage}
        featuredimagealt={post.frontmatter.featuredimagealt}
        photocredits={post.frontmatter.photocredits}
        releaseyear={post.frontmatter.releaseyear}
        imagegallery={post.frontmatter.imagegallery}
        relatedproductstitle={post.frontmatter.relatedproductstitle}
        products={post.frontmatter.products}
        helmet={
          <Helmet titleTemplate="%s | Project">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        title={post.frontmatter.title}
      />
    </Layout>
  );
};

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProjectPost;

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        details
        releaseyear
        photocredits
        relatedproductstitle
        products
        imagegallery {
          image {
            id
            childImageSharp {
              fluid(maxWidth: 2048, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
        featuredimagealt
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
