// Define the props for the Item component
interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  let itemContent: string | JSX.Element = name; // Allow itemContent to be a string or JSX
  if (isPacked) {
    itemContent = <del>{name + " ✅"}</del>; // JSX when isPacked is true
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride's Packing List</h1>
      <ul className="list-disc list-inside text-start text-xl">
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
