import React from 'react';
import './styles.scss';

type Props = {
  children: React.ReactNode;
};
const BaseForm = ({ children }: Props) => {
  return <div className="base-form-container">{children}</div>;
};

export default BaseForm;
