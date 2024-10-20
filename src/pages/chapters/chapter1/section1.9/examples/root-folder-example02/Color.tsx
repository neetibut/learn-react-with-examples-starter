interface ColorProps {
  value: string; // value is a string representing a CSS color
}

export default function Color({ value }: ColorProps) {
  return <div className="colorbox" style={{ backgroundColor: value }} />;
}
