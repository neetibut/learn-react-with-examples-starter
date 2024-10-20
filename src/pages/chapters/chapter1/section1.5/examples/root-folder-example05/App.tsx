import Avatar from "./Avatar";
import React, { ReactNode } from "react";

// Define the type for the props passed to Card
interface CardProps {
  children: ReactNode; // ReactNode allows any valid React child elements (text, components, etc.)
}

function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
    </Card>
  );
}
