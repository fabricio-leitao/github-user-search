import React from 'react';
import './styles.scss';

type Props = {
  name: string;
  result: number;
};
const Info = ({ name, result }: Props) => {
  return (
    <span className="info-form">
      {name}
      {result}
    </span>
  );
};

export default Info;
