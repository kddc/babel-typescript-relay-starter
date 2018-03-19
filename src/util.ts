export interface Props {
  x: number;
  y: number;
}

const add = ({ x, y }: Props): number => {
  return (y && x + y) || x;
}

export { add }
