interface FancyTextProps {
  title: boolean; // title is a boolean
  text: string; // text is a string
}

export default function FancyText({ title, text }: FancyTextProps) {
  return title ? (
    <h1 className="fancy title">{text}</h1>
  ) : (
    <h3 className="fancy cursive">{text}</h3>
  );
}
