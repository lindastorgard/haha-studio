/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from 'prop-types'
import { ProjectPostTemplate } from '../../templates/project-post'

const ProjectPostPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <ProjectPostTemplate
        title={data.title}
        description={data.description}
        details={data.details}
        featuredimage={data.featuredimage}
        featuredimagealt={data.featuredimagealt}
        photocredits={data.photocredits}
        releaseyear={data.releaseyear}
        imagegallery={data.imagegallery || { blurbs: [] }}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

ProjectPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ProjectPostPreview