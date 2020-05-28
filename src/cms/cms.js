import React from 'react'
import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProjectPostPreview from './preview-templates/ProjectPostPreview'
import CSSInjector from './CSSInjector'


CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)


CMS.registerPreviewTemplate('index', props => (
    <CSSInjector>
      <IndexPagePreview {...props} />
    </CSSInjector>
  ))

CMS.registerPreviewTemplate('projects', props => (
    <CSSInjector>
      <ProjectPostPreview {...props} />
    </CSSInjector>
))

CMS.registerPreviewTemplate('about', props => (
    <CSSInjector>
      <AboutPagePreview {...props} />
    </CSSInjector>
  ))

CMS.registerPreviewTemplate('blog', props => (
    <CSSInjector>
      <BlogPostPreview {...props} />
    </CSSInjector>
  ))
