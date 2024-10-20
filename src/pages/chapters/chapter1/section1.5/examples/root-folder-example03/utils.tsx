// Define the type for the person object
type Person = {
  name: string;
  imageId: string;
};

// Define the type for the props passed to Avatar
interface AvatarProps {
  person: Person;
  size?: string; // Optional size property, default will be applied in getImageUrl
}

// Corrected getImageUrl function
export function getImageUrl(person: Person, size: string = "s") {
  return "https://i.imgur.com/" + person.imageId + size + ".jpg";
}

// Now the Avatar component and getImageUrl are separate
function Avatar({ person, size = "100" }: AvatarProps) {
  return (
    <img
      className="avatar rounded-full"
      src={getImageUrl(person, size)} // Pass both person and size
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
        size="100"
        person={{
          name: "Katsuko Saruhashi",
          imageId: "YfeOqp2",
        }}
      />
      <Avatar
        size="80"
        person={{
          name: "Aklilu Lemma",
          imageId: "OKS67lh",
        }}
      />
      <Avatar
        size="50"
        person={{
          name: "Lin Lanying",
          imageId: "1bX5QH6",
        }}
      />
    </div>
  );
}
