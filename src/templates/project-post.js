/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import SectionContainer from "../components/SectionContainer";
import ImageGallery from "../components/ImageGallery";
import FeaturedProducts from "../components/FeaturedProducts";
import Content, { HTMLContent } from "../components/Content";

export const ProjectPostTemplate = ({
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
      <section
        sx={{
          display: "flex",
          flexDirection: ["column", null, "row"],
          alignItems: "center",
          mb: 4,
        }}
      >
        {featuredimage ? (
          <div sx={{ flex: 3, width: "100%" }}>
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: featuredimagealt,
              }}
            />
            <p sx={{ fontSize: 0, my: [0, 1], padding: [3, null, "0px"] }}>
              Photo credits: {photocredits}
            </p>
          </div>
        ) : null}
        <article
          sx={{
            flex: 2,
            padding: [3, 4],
          }}
        >
          <h1 sx={{ fontSize: 6, mb: [3, 4] }}>{title}</h1>
          <p sx={{ fontSize: 0 }}>{details}</p>
          <p sx={{ mb: [3, 4], fontSize: 0 }}>{releaseyear}</p>
          {/* <p sx={{ fontSize: 2 }}>{description}</p> */}
        </article>
      </section>
      {imagegallery.length > 0 && imagegallery ? (
        <ImageGallery images={imagegallery} />
      ) : null}
      {products && products.length > 0 ? (
        <FeaturedProducts products={products} title={relatedproductstitle} />
      ) : null}
    </SectionContainer>
  );
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <ProjectPostTemplate
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
