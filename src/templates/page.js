/* eslint-disable */

import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Back from "../components/back"
import styled from "styled-components"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const Content = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--primary);
  }
`

const Post = ({ data }) => {
  const {
    title,
    content: { json },
  } = data.article

  return (
    <Layout>
      <div className="py-2 px-4 py-md-3 px-md-5">
        <Link className="text-light d-inline-flex align-items-center" to="/">
          {" "}
          <Back />
          Back
        </Link>
        <h1 className="text-primary mb-3 mt-2">{title}</h1>
        <Content>{documentToReactComponents(json)}</Content>
      </div>
    </Layout>
  )
}

export default Post

export const query = graphql`
  query($slug: String!) {
    article: contentfulArticle(slug: { eq: $slug }) {
      title
      content {
        json
      }
    }
  }
`
