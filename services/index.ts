import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              authorname
              id
              email
              profilepicture {
                url
              }
            }
            createdAt
            slug
            title
            excerpt
            image {
              url
            }
            category {
              categoryname
              slug
            }
          }
        }
      }
    }
  `;

  const results = await request(graphqlAPI as string, query);
  return results.postsConnection.edges;
};
