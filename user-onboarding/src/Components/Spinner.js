import React from 'react';
import spinner from '../Assets/spinner.gif';
const Spinner = () => {
  return (
    <div className='spinner-center'>
      <img className='spinner' src={require('../assets/spinner.gif')} alt='loading...' />
    </div>
  );
};

export default Spinner;
