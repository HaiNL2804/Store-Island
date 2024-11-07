export type Product = {
  id: number;
  name: string;
  image: string;
  price: number;
  description: string;
};

export type ProductInput = Omit<Product, "id">;
