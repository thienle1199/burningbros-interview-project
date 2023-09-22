import React from "react";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`${className} hover:bg-neutral-7 hover:text-neutral-2 focus:outline-primary-30 active:bg-neutral-6 disabled:bg-[#fff] disabled:text-text-4`}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
export default Button;
