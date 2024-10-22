import { useState } from "react";

// Define the structure of an artwork object
interface Artwork {
  id: number;
  title: string;
  seen: boolean;
}

// Define the initial list as an array of Artwork objects
let nextId = 3;
const initialList: Artwork[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  // State that holds an array of Artwork objects
  const [myList, setMyList] = useState<Artwork[]>(initialList);
  const [yourList, setYourList] = useState<Artwork[]>(initialList);

  // Function to toggle seen status for myList
  function handleToggleMyList(artworkId: number, nextSeen: boolean) {
    setMyList(
      myList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork
      )
    );
  }

  // Function to toggle seen status for yourList
  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    setYourList(
      yourList.map((artwork) =>
        artwork.id === artworkId ? { ...artwork, seen: nextSeen } : artwork
      )
    );
  }

  return (
    <>
      <h1>Art Bucket List</h1>
      <h2>My list of art to see:</h2>
      <ItemList artworks={myList} onToggle={handleToggleMyList} />
      <h2>Your list of art to see:</h2>
      <ItemList artworks={yourList} onToggle={handleToggleYourList} />
    </>
  );
}

// Define the props for the ItemList component
interface ItemListProps {
  artworks: Artwork[];
  onToggle: (artworkId: number, nextSeen: boolean) => void;
}

function ItemList({ artworks, onToggle }: ItemListProps) {
  return (
    <ul>
      {artworks.map((artwork) => (
        <li key={artwork.id}>
          <label>
            <input
              type="checkbox"
              checked={artwork.seen}
              onChange={(e) => onToggle(artwork.id, e.target.checked)}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
