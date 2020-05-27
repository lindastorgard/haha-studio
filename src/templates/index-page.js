/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes, { array } from 'prop-types'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'

export const IndexPageTemplate = ({ title, image, imageAlt , section}) => {
  return (
    <section>
      <h2>
          {title}
        </h2>
       {image ? (
          <PreviewCompatibleImage
            imageInfo={{
              image: image,
              alt: imageAlt,
            }}
          />  
        ) : null}
       {section.map( s => {
         return(
           <section key={s.heading} sx={{display: "flex"}}>
              <div sx={{flex: 3}}>
                <PreviewCompatibleImage
                  imageInfo={{
                    image: s.image,
                    alt: s.alt,
                  }}
               />  
              </div>
             <article sx={{flex: 2}}>
              <h2>{s.heading}</h2>
              <p>{s.text}</p>
              <button>{s.linktitle}</button>
              </article>
           </section>
         )
       })}
    </section>
  )
}


IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  imageAlt: PropTypes.string,
  heading: PropTypes.string,
  section: PropTypes.array,
  // intro: PropTypes.shape({
  //   blurbs: PropTypes.array,
  // }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark
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
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage


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
`












