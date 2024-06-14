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
