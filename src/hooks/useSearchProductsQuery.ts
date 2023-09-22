import { useQuery } from "react-query";
import { GetProductsApiResponse } from "../types";

const fetchAllProducts = (query: string): Promise<GetProductsApiResponse> =>
  fetch(`https://dummyjson.com/products/search?q=${query}`).then((res) =>
    res.json(),
  );

export const useSearchProductQuery = (query: string) => {
  return useQuery(`product-${query}`, () => fetchAllProducts(query), {
    enabled: !!query,
  });
};
