/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from 'prop-types'
import { kebabCase } from 'lodash'
import { Helmet } from 'react-helmet'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import SectionConainer from "../components/SectionContainer"

export const ProjectPostTemplate = ({ description, details, featuredimage, featuredimagealt, photocredits, releaseyearn, title,
  helmet }) => {
    return(
      <SectionConainer>
        {helmet || ''}
        {featuredimage ? (
          <div >
            <PreviewCompatibleImage
              imageInfo={{
                image: featuredimage,
                alt: featuredimagealt,
              }}
            />
          </div>
        ) : null}
          <h1>{title}</h1>
          <p>{description}</p>
    </SectionConainer>
    )
};

const ProjectPost = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(post.id)
  return (
    <Layout>
      <ProjectPostTemplate
        description={post.frontmatter.description}
        details={post.frontmatter.details}
        featuredimage={post.frontmatter.featuredimage}
        featuredimagealt={post.frontmatter.featuredimagealt}
        photocredits={post.frontmatter.photocredits}
        releaseyear={post.frontmatter.releaseyear}
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
  )
}

ProjectPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object,
  }),
}

export default ProjectPost

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      frontmatter {
        imagegallery {
          alt
          image {
            childImageSharp {
              fluid {
                src
              }
            }
          }
        date(formatString: "MMMM DD, YYYY")
        title
        description
        details
        releaseyear
        photocredits
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
`


