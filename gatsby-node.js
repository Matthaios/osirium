exports.createPages = async function({ actions, graphql }) {
  const {
    data: {
      all: { articles },
    },
  } = await graphql(`
    query {
      all: allContentfulArticle {
        articles: nodes {
          slug
        }
      }
    }
  `)
  articles.forEach(article => {
    const { slug } = article
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/page.js`),
      context: { slug },
    })
  })
}
