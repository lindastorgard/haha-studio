/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from 'prop-types'

const SectionContainer = ({ children }) => (
    <section sx={{mx: [1, null, 4]}}>
        {children}
    </section> 
);

export default SectionContainer;

SectionContainer.propTypes = {
    children: PropTypes.node.isRequired 
}