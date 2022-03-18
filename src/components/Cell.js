import React, { useState } from 'react';

const Cell = ({ cambio }) => {
  const [color, setColor] = useState('dark');
  const handleClick = () => {
    setColor(cambio);
  };
  return <td className={`p-3 bg-${color} border`} onClick={handleClick}></td>;
};

export default Cell;
