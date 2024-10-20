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

export default function Avatar({ person, size }: AvatarProps) {
  return (
    <img
      className="avatar"
      src={getImageUrl(person)} // person is typed as Person
      alt={person.name} // Accessing the person's name
      width={size} // size is a number
      height={size}
    />
  );
}
