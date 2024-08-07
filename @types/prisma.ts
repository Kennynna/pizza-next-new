import { Product, Ingredient, ProductItem } from "@prisma/client";

export type ProductWithRelations = Product & {
  items: ProductItem[];
  ingredients: Ingredient[];
};