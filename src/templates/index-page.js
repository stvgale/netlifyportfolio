import React from 'react'
import PropTypes from 'prop-types'
import Scene from '../components/scene'
import { Link, graphql } from 'gatsby'

import Layout from '../components/Layout'

export const IndexPageTemplate = ({
  title,
}) => (
  <div className="content has-text-centered">
  <h1>
    {title}
  </h1>
  <Scene />
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
