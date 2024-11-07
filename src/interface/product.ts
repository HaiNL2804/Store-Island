// interface IProduct {
//   id: number | string;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage?: number;
//   rating?: number;
//   stock?: number;
//   brand?: string;
//   category?: string;
//   thumbnail: string;
//   images?: string[];
// }
// export default IProduct;

export default interface Product {
  id: string;
  name: string;
  price: string;
  dimensions?: string;
  material?: string;
  category?: string;
  image: string;
}
export type ProductInput = Omit<Product, "id">;
