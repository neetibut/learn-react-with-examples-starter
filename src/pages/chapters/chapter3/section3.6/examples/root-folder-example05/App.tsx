const person = {
  name: "Gregorio Y. Zara",
  theme: {
    backgroundColor: "black",
    color: "pink",
  },
};

export default function TodoList() {
  return (
    <div
      style={person.theme}
      className="w-2/3 text-xl border-black rounded-xl p-4"
    >
      <h1>{person.name}'s Todos</h1>
      <img
        className="avatar rounded-[100%]"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul className="list-disc list-inside text-start">
        <li>Improve the videophone</li>
        <li>Prepare aeronautics lectures</li>
        <li>Work on the alcohol-fuelled engine</li>
      </ul>
    </div>
  );
}
