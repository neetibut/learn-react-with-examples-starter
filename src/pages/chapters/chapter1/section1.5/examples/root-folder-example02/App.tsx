import { getImageUrl } from "./utils";

// Define the type for the person object
type Person = {
  name: string;
  imageId: string;
};

// Define the type for the props passed to Avatar
interface AvatarProps {
  person: Person;
  size: number;
}

function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar rounded-full"
      src={getImageUrl(person)} // Ensure getImageUrl expects 'person' of type 'Person'
      alt={person.name}
      width={size}
      height={size}
    />
  );
}

export default function Profile() {
  return (
    <div className="flex flex-col gap-6">
      <Avatar
        size={100}
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size={80}
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size={50}
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}
