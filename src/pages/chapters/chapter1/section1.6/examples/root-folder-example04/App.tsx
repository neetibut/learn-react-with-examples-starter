// Define the props for the Item component
interface ItemProps {
  name: string;
  isPacked: boolean;
}

function Item({ name, isPacked }: ItemProps) {
  // if (isPacked) {
  //   return <li className="item">{name} ✅</li>;
  // }
  // return <li className="item">{name}</li>;
  return <li className="item">{isPacked ? name + " ✅" : name}</li>;
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
