import React from 'react';

const Input = (props) => {
  return (
    <div>
      <form onSubmit={props.getInput}>
        <input type="text" className="input" name="inputMovie" placeholder="Search a movie..."/>
        <button className="btn"><i class="fas fa-search"></i></button>
      </form>
    </div>
  )
}

export default Input;