/* eslint-disable */

import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
const IndexPage = ({
  data: {
    all: { articles },
  },
}) => {
  return (
    <Layout>
      <div className="d-flex flex-column-reverse">
        {articles.map(article => (
          <div className="py-2 px-4 py-md-3 px-md-5" key={article.slug}>
            <h2>
              <Link to={article.slug}>{article.title}</Link>
            </h2>
            <p className="">{article.excerpt.excerpt}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  {
    all: allContentfulArticle {
      articles: nodes {
        title
        slug
        excerpt {
          excerpt
        }
      }
    }
  }
`
