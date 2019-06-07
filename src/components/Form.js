import React from 'react';

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" placeholder="Város..." />
    <input type="text" name="country" placeholder="Ország..." />
    <button>Időjárás</button>
  </form>
);

export default Form;
