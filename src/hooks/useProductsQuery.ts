import { useQuery } from "react-query";
import { GetProductsApiResponse } from "../types";

const fetchAllProducts = (): Promise<GetProductsApiResponse> =>
  fetch(
    "https://dummyjson.com/products?limit=0&select=title,price,thumbnail,category",
  ).then((res) => res.json());

export const useProductsQuery = () => useQuery("products", fetchAllProducts);
