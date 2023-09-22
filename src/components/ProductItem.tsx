import { ChangeEventHandler, FormEventHandler, useRef, useState } from "react";
import Button from "./Button";
import useOnClickOutSide from "../hooks/useOnClickOutSide";
import useProductStore from "../hooks/useProductStore";

type ProductItemProps = {
  thumbnail: string;
  price: number;
  title: string;
  id: number;
  category: string;
};

const ProductItem = ({
  price,
  thumbnail,
  title,
  id,
  category,
}: ProductItemProps) => {
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(title);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { updateProductName } = useProductStore();

  useOnClickOutSide(wrapperRef, () => {
    setEditValue(title);
    setEdit(false);
  });

  const onEditChange: ChangeEventHandler<HTMLInputElement> = (evt) => {
    setEditValue(evt.target.value);
  };

  const onUpdateProductName: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    updateProductName({ category, id, name: editValue });
    setEdit(false);
  };

  return (
    <div
      ref={wrapperRef}
      className="flex items-center gap-6 overflow-hidden rounded-lg px-4 py-3 hover:ring-1 hover:ring-inset hover:ring-primary-30"
    >
      <img
        src={thumbnail}
        width={72}
        height={72}
        alt={title}
        loading="lazy"
        className="h-[72px] w-[72px] shrink-0 rounded-lg object-cover"
      />
      <div className="flex w-full flex-col items-start gap-2">
        {edit ? (
          <form className="w-full" onSubmit={onUpdateProductName}>
            <input
              className="w-full rounded-lg  bg-transparent px-2 py-[6px] text-headline4 outline-none ring-2 ring-primary-30 focus:ring-primary-100"
              onChange={onEditChange}
              value={editValue}
              ref={inputRef}
              name="productName"
            />
          </form>
        ) : (
          <Button
            onClick={() => {
              setEdit(true);
              setTimeout(() => {
                inputRef.current?.focus();
              });
            }}
            className="px-2 py-[6px] text-left text-headline4"
          >
            {title}
          </Button>
        )}

        <span className="pl-2 text-body2 text-text-1">
          {Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            maximumFractionDigits: 0,
          }).format(price)}
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
