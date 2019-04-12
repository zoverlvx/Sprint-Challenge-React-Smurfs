import React from 'react';

const Smurf = props => {
	const handleClick = (e) => {
		e.preventDefault();
		props.removeFromDB(props.id)
	}
  return (
    <div className="Smurf">
		<button onClick={handleClick}>Remove</button>
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

