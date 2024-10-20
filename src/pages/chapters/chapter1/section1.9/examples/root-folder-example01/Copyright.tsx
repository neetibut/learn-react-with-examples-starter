interface CopyrightProps {
  year: number; // year should be a number
}

export default function Copyright({ year }: CopyrightProps) {
  return <p className="small">©️ {year}</p>;
}
