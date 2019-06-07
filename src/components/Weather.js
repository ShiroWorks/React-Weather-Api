import React from 'react';

const Weather = props => (
  <div className="weather__info">
    {props.city && props.country && (
      <p className="weather__key">
        {' '}
        Elhelyezkedés:
        <span className="weather__value">
          {' '}
          {props.city}, {props.country}
        </span>
      </p>
    )}
    {props.temperature && (
      <p className="weather__key">
        {' '}
        Hőmérséklet:
        <span className="weather__value"> {props.temperature} &#8451; </span>
      </p>
    )}
    {props.humidity && (
      <p className="weather__key">
        {' '}
        Páratartalom:
        <span className="weather__value"> {props.humidity} % </span>
      </p>
    )}
    {props.description && (
      <p className="weather__key">
        {' '}
        Körülmények:
        <span className="weather__value"> {props.description} </span>
      </p>
    )}
    {props.error && <p className="weather__error">{props.error}</p>}
  </div>
);

export default Weather;
