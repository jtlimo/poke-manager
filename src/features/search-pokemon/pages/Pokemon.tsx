import React from 'react';

const Pokemon = (props: { image: string; name: string }) => {
  return (
    <div>
      <img src={props.image} data-testid={'image'} />
      <p> {props.name} </p>
    </div>
  );
};

export default Pokemon;
