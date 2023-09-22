import { useEffect, RefObject } from "react";

function useOnClickOutSide<T extends HTMLElement>(
  ref: RefObject<T>,
  onClickOutSide?: () => void,
): void {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent): void {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        if (onClickOutSide) {
          onClickOutSide();
        }
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, onClickOutSide]);
}

export default useOnClickOutSide;
