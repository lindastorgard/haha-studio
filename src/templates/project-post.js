/** @jsx jsx */
import { jsx, Divider } from "theme-ui"
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

export const ProjectPostTemplate = ({ data }) => {
    const { markdownRemark: project } = data
    console.log(project);
    
    return(
        <div>Im project </div>  
    )
};

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

