import React from 'react'
import spinner from '../../img/spinner-7.gif';

const Spinner = ({
  count
}) =>{
  return (
    <div>
      
        <img
        src={spinner}
        alt="Loading..."
        className={{ width: '200px', margin:'10px'}}
        />
        <p className="text-center">Received {count} Blocks.</p>
        
    </div>
  )
}

export default Spinner;
