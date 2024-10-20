import { ButtonHTMLAttributes } from "react";

// Define the props type by extending the built-in ButtonHTMLAttributes
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props}>
      {children} {/* This renders the button label passed as a child */}
    </button>
  );
}
