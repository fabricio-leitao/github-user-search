import React from 'react';
import './styles.scss';

type Props = {
  buttonText: string;
};

const Button = ({ buttonText }: Props) => (
  <button className="btn">{buttonText}</button>
);

export default Button;
