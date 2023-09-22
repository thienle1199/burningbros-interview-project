import { useMemo, useEffect } from "react";
import { Product } from "../types";
import useProductStore from "./useProductStore";
import { useProductsQuery } from "./useProductsQuery";
import { useSearchProductQuery } from "./useSearchProductsQuery";

const groupByCategory = (products: Product[] = []) => {
  return products.reduce<Record<string, Product[]>>((acc, current) => {
    if (!acc[current.category]) {
      acc[current.category] = [];
    }
    acc[current.category].push(current);

    return acc;
  }, {});
};

const useFetchProductToStore = (searchString: string) => {
  const { data: allProductsData } = useProductsQuery();

  const { data: searchProductData } = useSearchProductQuery(searchString);

  const { setProducts } = useProductStore();

  const groupData = useMemo(() => {
    return groupByCategory(allProductsData?.products);
  }, [allProductsData?.products]);

  const groupSearchData = useMemo(() => {
    return groupByCategory(searchProductData?.products);
  }, [searchProductData?.products]);

  useEffect(() => {
    if (searchString) {
      setProducts(groupSearchData);
    } else {
      setProducts(groupData);
    }
  }, [groupData, groupSearchData, searchString, setProducts]);
};

export default useFetchProductToStore;
