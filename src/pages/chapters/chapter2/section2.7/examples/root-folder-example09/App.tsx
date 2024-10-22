import { useState } from "react";
import { useImmer } from "use-immer";

// Define the structure of an artwork object
interface Artwork {
  id: number;
  title: string;
  seen: boolean;
}

let nextId = 3;
const initialList: Artwork[] = [
  { id: 0, title: "Big Bellies", seen: false },
  { id: 1, title: "Lunar Landscape", seen: false },
  { id: 2, title: "Terracotta Army", seen: true },
];

export default function BucketList() {
  const [myList, updateMyList] = useImmer<Artwork[]>(initialList); // Type the useImmer state with an array of Artwork objects
  const [yourList, updateYourList] = useImmer<Artwork[]>(initialList);

  // Type the parameters as number (for id) and boolean (for nextSeen)
  function handleToggleMyList(id: number, nextSeen: boolean) {
    updateMyList((draft) => {
      const artwork = draft.find((a) => a.id === id);
      if (artwork) {
        artwork.seen = nextSeen; // Only update if the artwork is found
      }
    });
  }

  function handleToggleYourList(artworkId: number, nextSeen: boolean) {
    updateYourList((draft) => {
      const artwork = draft.find((a) => a.id === artworkId);
      if (artwork) {
        artwork.seen = nextSeen; // Only update if the artwork is found
      }
    });
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
  onToggle: (id: number, nextSeen: boolean) => void;
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
              onChange={(e) => {
                onToggle(artwork.id, e.target.checked);
              }}
            />
            {artwork.title}
          </label>
        </li>
      ))}
    </ul>
  );
}
