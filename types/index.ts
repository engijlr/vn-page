interface ingredients {
  name: string;
  quantity: string;
}

type meal = {
  mealId: number;
  name: string;
  thumbnail_image: string;
  category: string;
  instructions: string;
  tags?: string[];
  ingredients: ingredients[];
  prep_time: string;
  cook_time: string;
  servings: string;
  difficulty: string;
};

export interface Author {
  authorname: string;
  id: string;
  email: string;
  profilepicture: {
    url: string;
  };
}

export interface Category {
  categoryname: string;
  slug: string;
}

export interface Image {
  url: string;
}

export interface PostNode {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  image: Image;
  category: Category;
}

export interface PostEdge {
  node: PostNode;
}

export interface PostsConnection {
  edges: PostEdge[];
}

export interface GetPostsResponse {
  postsConnection: PostsConnection;
}
