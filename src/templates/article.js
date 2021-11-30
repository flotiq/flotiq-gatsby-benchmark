import React from 'react';
import { graphql, Link } from 'gatsby';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from '../components/layout_1';

const Article = ({ data }) => {
    let article = data.article.nodes[0];
    const image = getImage(article.image_[0]);
    return (
        <Layout>
            <Link to="/">Go back to index page</Link>
            <div>
                <h2>{article.title}</h2>
                {article.image_ && article.image_[0] ? (
                    <GatsbyImage image={image} alt="post image" />
                ) : (
                    <div>Image can't be displayed</div>
                )}
                <div dangerouslySetInnerHTML={{ __html: article.content }}/>
            </div>
        </Layout>
    );
};

export default Article;

export const query = graphql`
    query($slug: String!){
        article: allArticle(filter:{id: {eq: $slug }}) {
            nodes{
                title
                content
                image_ {
                    gatsbyImageData(width: 1000)
                    extension
                    url
                }
            }
        }
    }
`;
