import React from 'react';

const Country = ({ country }) => {
  console.log(country.capital.capital);
  return (
    <div>
      <img src={country.flags.flags.png} alt="country flag " />
      <h3>Name:{country.name.common}</h3>
      <h5>Capital:{country.capital.capital}</h5>
      <p>Population:{country.population.population}</p>
      <br />
    </div>
  );
};

export default Country;