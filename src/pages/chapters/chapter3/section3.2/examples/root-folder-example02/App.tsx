import { useState } from "react";

export default function MovingDot() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  return (
    <>
      <style>{`
        /* Reset global styles inside App */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html, body {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }

        .container {
          width: 100vw;
          height: 100vh;
          position: relative;
        }
      `}</style>
      <div
        className="container"
        onPointerMove={(e) => {
          setPosition({
            x: e.clientX,
            y: e.clientY,
          });
        }}
      >
        <div
          style={{
            position: "absolute",
            backgroundColor: "red",
            borderRadius: "50%",
            transform: `translate(${position.x - 10}px, ${position.y - 10}px)`, // Center the dot
            width: 20,
            height: 20,
          }}
        />
      </div>
    </>
  );
}
