import React, { useState } from 'react';
import Cell from './Cell';

const Grid = () => {
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState('dark');

  const handleChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleClick = (color) => {
    setColor(color);
  };
  const createGrid = () => {
    const row = [];
    for (let i = 0; i < quantity; i++) {
      row.push(<tr key={`tr_${i}`}></tr>);
      for (let j = 0; j < quantity; j++) {
        row.push(<Cell key={`cel_${i}`} cambio={color} />);
      }
    }
    return row;
  };
  return (
    <div>
      <div className='row bg-light bg-gradient py-4'>
        <div className='col-12 col-md-8 ps-5'>
          <h1 className='fw-bold mb-5'>Grid dinámico</h1>
          <h4>Escribe el tamaño de cuadricula:</h4>
          <div className='py-2'>
            <form>
              <input
                className='form-control w-25'
                type='text'
                value={quantity}
                onChange={handleChange}
              />
            </form>
          </div>
        </div>
        <div className='col-12 col-md-4'>
          <h4>Selecciona un color:</h4>
          <div className='d-flex mt-3 p-3'>
            <button
              className='btn btn-dark py-3 me-2 px-4'
              onClick={() => handleClick('dark')}
            ></button>
            <button
              className='btn btn-primary py-3 px-4 me-2'
              onClick={() => handleClick('primary')}
            ></button>
            <button
              className='btn btn-success py-3 px-4'
              onClick={() => handleClick('success')}
            ></button>
          </div>
        </div>
      </div>
      <div className='d-flex justify-content-center mt-4'>
        <div>{createGrid()}</div>
      </div>
    </div>
  );
};

export default Grid;
