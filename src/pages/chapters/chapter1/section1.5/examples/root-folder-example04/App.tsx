import Button from "./Button";
import { ButtonHTMLAttributes } from "react";

// Define the buttonProps type using ButtonHTMLAttributes
export default function ParentComponent() {
  const buttonProps: ButtonHTMLAttributes<HTMLButtonElement> = {
    type: "submit",
    className: "bg-blue-500 text-white p-2 rounded",
    onClick: () => alert("Button Clicked!"),
  };

  return (
    <div>
      <h1>Forwarding Props Example</h1>
      {/* Spreading props into the Button component */}
      <Button {...buttonProps}>Submit</Button>
    </div>
  );
}
