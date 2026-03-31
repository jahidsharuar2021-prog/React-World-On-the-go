import React from 'react';

const Country = ({ country }) => {
  console.log(country.name.common);
  return (
    <div>
      <h3>Name:{country.name.common}</h3>
    </div>
  );
};

export default Country;