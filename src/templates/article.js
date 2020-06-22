import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout_1"

const Article = ({ data }) => {
	console.log(data);
	data.article = data.article.nodes[0];
  return (
    <Layout>
      <Link to="/">Go back to index page</Link>
      <div>
        <h2>{data.article.title}</h2>
          <div>Image can't be displayed</div>
        <div dangerouslySetInnerHTML={{ __html: data.article.content }} />
      </div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String!){
	  article: allArticle(filter:{id: {eq: $slug }}) {
nodes{
      title
      content
}
    }
  }
`
