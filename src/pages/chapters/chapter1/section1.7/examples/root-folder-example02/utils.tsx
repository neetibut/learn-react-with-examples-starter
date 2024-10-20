// Define the type for the person object
type Person = {
  imageId: string;
};

export function getImageUrl(person: Person) {
  return "https://i.imgur.com/" + person.imageId + "s.jpg";
}
