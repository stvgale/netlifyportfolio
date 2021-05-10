import React from 'react'
import PropTypes from 'prop-types'
import Scene from '../components/scene'
import Fade from '../components/fade'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
}) => (


  <div className="content">
  <h1>
    {title}
  </h1>
  <div className="tscene">
  <div className="columns">
    <div className="column is-three-fifths is-offset-one-fifth">
      <h2 data-sal="slide-up" data-sal-delay="300" data-sal-easing="ease">Digital designer based in Seattle. Working in UI, UX, and product design. Studying MS Biomimicry.</h2>
    </div>
  </div>
  <Scene />

    <Fade />

  </div>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
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
      frontmatter {
        title
      }
    }
  }
`
