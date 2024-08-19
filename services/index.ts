import { GetPostsResponse, PostEdge } from "@/types";
import { gql, request } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

if (!graphqlAPI) {
  throw new Error("NEXT_PUBLIC_GRAPHCMS_ENDPOINT is not defined");
}

export const getPosts = async (): Promise<PostEdge[]> => {
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

  try {
    const results = await request<any>(graphqlAPI, query);
    return results.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts");
  }
};
