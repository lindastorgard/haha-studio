import React from "react";
import PropTypes from "prop-types";
import { BrandPageTemplate } from "../../templates/brand-page";

const BrandPagePreview = ({ entry, widgetFor }) => (
  <BrandPageTemplate
    title={entry.getIn(["data", "title"])}
    content={widgetFor("body")}
  />
);

BrandPageTemplate.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
};

export default BrandPagePreview;
