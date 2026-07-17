import React from 'react';

const GradientText = ({ children, as: Tag = 'span', className = '', animated = false }) => {
  return (
    <Tag
      className={`gradient-text ${animated ? 'gradient-text-animated' : ''} ${className}`}
    >
      {children}
    </Tag>
  );
};

export default GradientText;
