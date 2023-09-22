import { FormEventHandler, MouseEventHandler, useRef, useState } from "react";
import Button from "./components/Button";
import ProductList from "./components/ProductList";
import SearchInput from "./components/SearchInput";
import useFetchProductToStore from "./hooks/useFetchProductToStore";
import useProductStore from "./hooks/useProductStore";

function App() {
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [searchValue, setSearchValue] = useState("");

  useFetchProductToStore(searchValue);
  const { products } = useProductStore();

  const onCancel: MouseEventHandler<HTMLButtonElement> = () => {
    setSearchValue("");
    if (searchInputRef.current) {
      searchInputRef.current.value = "";
    }
  };

  const handleSearch: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    if (searchInputRef.current?.value) {
      setSearchValue(searchInputRef.current?.value);
    }
  };

  return (
    <main className="min-h-screen w-screen bg-primary-10 pt-7">
      <div className="shadow-basic mx-auto mt-10 flex max-w-[527px] flex-col gap-6 rounded-3xl bg-neutral-7 p-6 text-text-0">
        <form onSubmit={handleSearch}>
          <SearchInput
            placeholder="Search"
            name="search"
            ref={searchInputRef}
          />
          {searchValue && (
            <Button
              type="button"
              onClick={onCancel}
              className="ml-2 rounded-lg px-4 py-3"
            >
              Cancel
            </Button>
          )}
        </form>

        <div className="flex flex-col gap-6">
          <h2 className="text-headline2">Product List</h2>

          <ProductList products={products} />
        </div>
      </div>
    </main>
  );
}

export default App;
