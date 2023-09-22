import { create } from "zustand";
import { Product } from "../types";

type ProductState = {
  products: Record<string, Product[]>;
  setProducts: (products: Record<string, Product[]>) => void;
  updateProductName: (params: {
    id: number;
    name: string;
    category: string;
  }) => void;
};

const useProductStore = create<ProductState>((set) => ({
  products: {},
  setProducts: (products) => {
    set({ products: products });
  },
  updateProductName: ({ category, id, name }) => {
    return set((state) => ({
      products: {
        ...state.products,
        [category]: state.products[category].map((pro) => {
          if (pro.id === id) {
            pro.title = name;
          }

          return pro;
        }),
      },
    }));
  },
}));

export default useProductStore;
