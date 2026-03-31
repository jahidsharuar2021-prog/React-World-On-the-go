import React, { useState } from 'react';
import  './Country.css';

const Country = ({ country, handlevisitedCountries }) => {
  // console.log(country.area.area);
  // console.log(handlevisitedCountries);

  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    // setVisited(visited ? false:true);
    setVisited(!visited);
    handlevisitedCountries({country});
  };

  return (
    <div className={`card ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt="country flag " />
      <h3>Name:{country.name.common}</h3>
      <h5>Capital:{country.capital.capital}</h5>
      <p>Population:{country.population.population}</p>
      <p>
        Area:{country.area.area}{" "}
        {country.area.area > 300000 ? "Big country " : "Small country"}
      </p>
      <br />
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not visited"}
      </button>
      <br />
    </div>
  );
};

export default Country;