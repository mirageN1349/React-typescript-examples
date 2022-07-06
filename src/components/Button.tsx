import { MouseEvent, PropsWithChildren, ReactNode } from 'react';

// interface A {
//   name: string;
// }

// type B = A & {
//   lastname: string;
// };

// type Foo = 'start' | 'progress';

// const b: B = {};

// interface Test {
//   foo: (a: string, b: number) => boolean;
// }

// type Type = {
//   foo: (a: string, b: number) => boolean;
// };

type Props = PropsWithChildren<{
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  name?: string;
  type?: 'submit' | 'reset' | 'button'; // union type
  disabled?: boolean;
  className?: string;
}>;

export const Button = (props: Props) => {
  return <button {...props}>{props.children}</button>;
};
