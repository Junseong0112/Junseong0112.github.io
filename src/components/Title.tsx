interface Props {
  value: string;
}

export default function Title({ value }: Props) {
  return <h1 className="eng text-32">{value}</h1>;
}
