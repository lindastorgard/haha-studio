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

export const ProductPostTemplate = ({ title, helmet }) => {
  return (
    <SectionContainer>
      {helmet || ""}
      <section sx={{ display: "flex" }}>
        <article sx={{ flex: 2 }}>
          <h1>{title}</h1>
        </article>
      </section>
      <aside>
        <h2>Featured products</h2>
      </aside>
    </SectionContainer>
  );
};

const ProductPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Layout>
      <ProductPostTemplate
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Product">
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

ProductPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
};

export default ProductPost;

export const pageQuery = graphql`
  query ProductPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
