/** @jsx jsx */
import { jsx } from "theme-ui";
import PropTypes from "prop-types";
import { Link, graphql, useStaticQuery } from "gatsby";
import FeaturedProductsCarousel from "./FeaturedProductsCarousel";

function findProducts(productTitles, products) {
  const productArray = productTitles.map(function (title) {
    let featuredProduct = products.find(
      (product) => product.node.frontmatter.title === title
    );
    return featuredProduct;
  });

  return productArray;
}

const FeaturedProducts = ({ products, title }) => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query ProductsQuery {
        allMarkdownRemark(
          filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
          edges {
            node {
              id
              frontmatter {
                title
                price
                imagegallery {
                  productcolor
                  image {
                    childImageSharp {
                      fluid {
                        src
                      }
                    }
                  }
                }
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `
  );

  const { edges } = allMarkdownRemark;
  const featuredProducts = findProducts(products, edges);

  return (
    <aside>
      <h2>{title}</h2>
      <div
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(8, 1fr)",
          gridGap: 2,
        }}
      >
        {featuredProducts.map(({ node }) => {
          return (
            <div
              key={node.id}
              sx={{
                gridColumn: "span 2",
                gridRow: "1",
              }}
            >
              <FeaturedProductsCarousel
                slug={node.fields.slug}
                images={node.frontmatter.imagegallery}
                colors={node.frontmatter.productcolor}
              />

              <h3 sx={{ mt: 4 }}>{node.frontmatter.title}</h3>
              <p>{node.frontmatter.price}</p>
              <button sx={{ mt: 4 }}>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </aside>
  );
};

export default FeaturedProducts;

FeaturedProducts.propTypes = {
  products: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};
