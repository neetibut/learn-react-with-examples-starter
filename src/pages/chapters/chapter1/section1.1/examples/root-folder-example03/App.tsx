export default function App() {
  return Gallery();
}

function Profile() {
  return <img src="https://i.imgur.com/GFcRn8s.png" alt="Amazing JSD8" />;
}

function Gallery() {
  return (
    <section>
      <h1 className="text-4xl">The Amazing JSD8!</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
