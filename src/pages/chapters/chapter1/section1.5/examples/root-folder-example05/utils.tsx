// Define the type for the person object
type Person = {
  imageId: string;
};

// Make getImageUrl function TypeScript safe
export function getImageUrl(person: Person, size: string = "s"): string {
  return `https://i.imgur.com/${person.imageId}${size}.jpg`;
}
