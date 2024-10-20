import React from "react";
import { Link } from "react-router-dom";

export default function Example07() {
  return (
    <div className="page-container">
      <Link className="link-homepage" to="/section2.1">
        Back to Section Page
      </Link>
      <section className="py-6 text-xl">
        <h2>Example 07: </h2>
        <h2>Passing handlers as alternative to propagation</h2>
      </section>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <OuterDiv />
      </div>
    </div>
  );
}

// Event handling function for both capturing and bubbling phases

// function handleClick(
//   event: React.MouseEvent<HTMLDivElement, MouseEvent>,
//   phase: string
// ) {
//   const element = event.currentTarget;
//   console.log(`${element.id} clicked during ${phase} phase`);
// }

// // Individual component for the inner div
// function InnerDiv() {
//   return (
//     <div
//       id="inner"
//       className="p-6 bg-red-300"
//       onClickCapture={(e) => handleClick(e, "Capturing")}
//       onClick={(e) => handleClick(e, "Bubbling")}
//     >
//       Inner Div
//     </div>
//   );
// }

// // Component for the middle div
// function MiddleDiv() {
//   return (
//     <div
//       id="middle"
//       className="p-8 bg-green-300"
//       onClickCapture={(e) => handleClick(e, "Capturing")}
//       onClick={(e) => handleClick(e, "Bubbling")}
//     >
//       Middle Div
//       <InnerDiv />
//     </div>
//   );
// }

// // Component for the outer div
// function OuterDiv() {
//   return (
//     <div
//       id="outer"
//       className="p-10 bg-blue-300"
//       onClickCapture={(e) => handleClick(e, "Capturing")}
//       onClick={(e) => handleClick(e, "Bubbling")}
//     >
//       Outer Div
//       <MiddleDiv />
//     </div>
//   );
// }

// Example of Passing Handlers as Props:

// Define a type for the onClick prop using MouseEvent
type OnClickType = (
  event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;

// Define a type for the props of InnerDiv and MiddleDiv
type ButtonProps = {
  onClick: OnClickType;
};

// Child component receives the parent handler and calls it explicitly
function InnerDiv({ onClick }: ButtonProps) {
  function handleInnerClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation(); // Prevent the event from bubbling up to MiddleDiv or OuterDiv
    console.log("Inner Div clicked!");
  }

  return (
    <div id="inner" className="p-6 bg-red-300" onClick={handleInnerClick}>
      Inner Div
    </div>
  );
}

// MiddleDiv also passes a handler to the InnerDiv
function MiddleDiv({ onClick }: ButtonProps) {
  function handleMiddleClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation(); // Prevent the event from bubbling up to OuterDiv
    console.log("Middle Div clicked!");
  }

  return (
    <div id="middle" className="p-8 bg-green-300" onClick={handleMiddleClick}>
      Middle Div
      <InnerDiv onClick={onClick} />
    </div>
  );
}

// OuterDiv now logs clicks on itself and stops propagation
function OuterDiv() {
  function handleOuterClick(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) {
    event.stopPropagation(); // No need for the event to propagate further
    console.log("Outer Div clicked!");
  }

  return (
    <div
      id="outer"
      className="p-10 bg-blue-300"
      onClick={handleOuterClick} // Add the click handler here
    >
      Outer Div
      <MiddleDiv onClick={handleOuterClick} />
    </div>
  );
}
