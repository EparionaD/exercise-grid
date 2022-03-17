import React, { useState } from 'react';
import Cell from './Cell';

const Grid = () => {
  const [cantidad, setCantidad] = useState(1);
  const [color, setColor] = useState('dark');

  const handleChange = (e) => {
    setCantidad(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const prueba = () => {
    const row = [];
    for (let i = 0; i < cantidad; i++) {
      row.push(<tr></tr>);
      for (let j = 0; j < cantidad; j++) {
        row.push(<Cell />);
      }
    }
    return row;
  };
  const handleClick = (color) => {
    setColor(color);
  };
  console.log(color);
  return (
    <div>
      <h1>Rejilla</h1>
      <h2>El tamaño de la cuadricula es: {cantidad}</h2>
      <div>
        <form onSubmit={handleSubmit}>
          <input type='text' value={cantidad} onChange={handleChange} />
        </form>
      </div>
      <div>{prueba()}</div>
      <div className='pt-5'>
        <button
          className='btn btn-dark py-3'
          onClick={() => handleClick('dark')}
        ></button>
        <button
          className='btn btn-primary py-3'
          onClick={() => handleClick('primary')}
        ></button>
        <button
          className='btn btn-success py-3'
          onClick={() => handleClick('success')}
        ></button>
      </div>
    </div>
  );
};

export default Grid;
