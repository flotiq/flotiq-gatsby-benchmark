import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import Layout from "../components/layout_1"

const Article = ({ data }) => {
	console.log(data);

  return (
    <Layout>
      <Link to="/">Go back to index page</Link>
      <div>
        <h2>{data.article.title}</h2>
          {/*<Img fluid={data.article.image[0].localImage.childImageSharp.fluid} />*/}

        <div dangerouslySetInnerHTML={{ __html: data.article.content }} />
      </div>
    </Layout>
  )
}

export default Article

export const query = graphql`
  query($slug: String!){
	  article: article(id: {eq: $slug }) {
	    id
        title
        content
       
      }
  }
`
