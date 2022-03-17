import React, { useState } from 'react';

const Cell = ({ cambio }) => {
  // console.log(fondo);
  // console.log(cambio);
  const [color, setColor] = useState('dark');
  const handleClick = () => {
    // console.log('object');
    // console.log(cambio);
    setColor(cambio);
  };
  return <td className={`p-3 bg-${color} border`} onClick={handleClick}></td>;
};

export default Cell;
