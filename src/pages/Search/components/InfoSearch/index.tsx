import React from 'react';
import './styles.scss';

type Props = {
  name: string;
  result: string;
};
const InforSearch = ({ name, result }: Props) => {
  return (
    <div className="info-search-result">
      <span className="info-search-title">{name}</span>
      <span className="info-search-content">{result}</span>
    </div>
  );
};

export default InforSearch;
