const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function List() {
  const listItems = people.map((person) => <li>{person}</li>);
  return (
    <ul className="bg-white text-black list-disc list-inside text-start text-xl border-black rounded p-6">
      {listItems}
    </ul>
  );
}
