/** @jsx jsx */
import { jsx } from "theme-ui"
// import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

const ProjectPostTemplate = ({ data }) => {
    const { markdownRemark: post } = data
    console.log(post);
    
    return(
        <div>Im project </div>  
    )
};

export default ProjectPostTemplate;

export const pageQuery = graphql`
  query ProjectPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`


