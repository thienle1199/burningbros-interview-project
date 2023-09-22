import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./Accordion";
import { Product } from "../types";
import ProductItem from "./ProductItem";

const ProductList = ({ products }: { products: Record<string, Product[]> }) => {
  return (
    <Accordion type="multiple">
      {Object.keys(products).map((key) => (
        <AccordionItem key={key} value={key}>
          <AccordionTrigger className="rounded-lg text-headline3 capitalize hover:bg-neutral-7 active:bg-neutral-6">
            {key}
          </AccordionTrigger>
          <AccordionContent className="pl-8">
            {products[key].map((pro) => (
              <ProductItem
                id={pro.id}
                key={pro.id}
                price={pro.price}
                thumbnail={pro.thumbnail}
                title={pro.title}
                category={pro.category}
              />
            ))}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default ProductList;
