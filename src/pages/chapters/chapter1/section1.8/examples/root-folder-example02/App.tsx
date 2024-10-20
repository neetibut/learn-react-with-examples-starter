// let guest = 0;

// function Cup() {
//   // Bad: changing a preexisting variable!
//   guest = guest + 1;
//   return <h2>Tea cup for guest #{guest}</h2>;
// }

// export default function TeaSet() {
//   return (
//     <>
//       <Cup />
//       <Cup />
//       <Cup />
//     </>
//   );
// }

interface CupProps {
  guest: number; // guest is a number
}

function Cup({ guest }: CupProps) {
  return <h2>Tea cup for guest #{guest}</h2>;
}

export default function TeaSet() {
  return (
    <>
      <Cup guest={1} />
      <Cup guest={2} />
      <Cup guest={3} />
    </>
  );
}
