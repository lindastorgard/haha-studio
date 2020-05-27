/** @jsx jsx */
import { jsx } from "theme-ui"
import PropTypes from 'prop-types'

const SectionConainer = ({ children }) => (
    <section sx={{mx: [1, null, 4]}}>
        {children}
    </section> 
);

export default SectionConainer;

SectionConainer.propTypes = {
    children: PropTypes.node.isRequired 
}