import React, { useState } from 'react';

const Cell = ({ fondo }) => {
  // console.log(fondo);
  const [color, setColor] = useState('dark');
  const handleClick = () => {
    console.log('object');
  };
  return (
    <td
      className={`p-3 bg-${fondo ? fondo : color} border`}
      onClick={handleClick}
    ></td>
  );
};

export default Cell;
