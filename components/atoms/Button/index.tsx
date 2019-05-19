import * as React from 'react';

type Props = {
  children: string;
};

const Button: React.FC<Props> = ({ children }) => (
  <button type="button">{children}</button>
);

export default Button;
