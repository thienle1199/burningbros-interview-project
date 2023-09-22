const SearchIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.87223 14.5384C9.35138 14.5381 10.7879 14.0429 11.9531 13.1317L15.0272 16.2059C15.3526 16.5313 15.8802 16.5313 16.2056 16.2059V16.2059C16.531 15.8805 16.531 15.353 16.2056 15.0276L13.1314 11.9534C14.0431 10.7881 14.5385 9.35128 14.5389 7.87174C14.5389 4.19591 11.5481 1.20508 7.87223 1.20508C4.1964 1.20508 1.20557 4.19591 1.20557 7.87174C1.20557 11.5476 4.1964 14.5384 7.87223 14.5384ZM7.87223 2.87174C10.6297 2.87174 12.8722 5.11424 12.8722 7.87174C12.8722 10.6292 10.6297 12.8717 7.87223 12.8717C5.11473 12.8717 2.87223 10.6292 2.87223 7.87174C2.87223 5.11424 5.11473 2.87174 7.87223 2.87174Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default SearchIcon;
