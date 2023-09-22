import SearchIcon from "./SearchIcon";
import CloseIcon from "./CloseIcon";
import { useImperativeHandle, useRef } from "react";
import Button from "./Button";

import * as React from "react";

import { cn } from "../utils/cn";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  wrapperClassName?: string;
}

const SearchInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);

    useImperativeHandle(ref, () => inputRef.current!, []);

    const handleOnClear = () => {
      if (!inputRef.current) return;
      inputRef.current.value = "";
      inputRef.current.focus();
    };

    return (
      <div className="relative inline-block w-fit">
        <input
          ref={inputRef}
          type="text"
          className={cn(
            "hover:bg-white focus:bg-white peer rounded-[50px] bg-transparent px-10 py-[10px] outline outline-2 placeholder-shown:bg-neutral-7 placeholder-shown:text-text-3 placeholder-shown:outline-neutral-3 hover:outline-primary-30 focus:outline-primary-100",
            className,
          )}
          {...props}
        />

        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 transform peer-placeholder-shown:text-text-3 peer-focus:text-text-0" />

        <Button
          type="button"
          onClick={handleOnClear}
          className="absolute right-4 top-1/2 -translate-y-1/2 transform rounded-full p-1 peer-placeholder-shown:invisible"
        >
          <CloseIcon />
        </Button>
      </div>
    );
  },
);
SearchInput.displayName = "SearchInput";
export default SearchInput;
