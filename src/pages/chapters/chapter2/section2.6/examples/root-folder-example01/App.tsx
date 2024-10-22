import { useState } from "react";

export default function Avatar() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  position.x = 5;

  return (
    <img
      className="avatar"
      src="https://i.imgur.com/7vQD0fPs.jpg"
      alt="Gregorio Y. Zara"
    />
  );
}
