import React, { use } from 'react';
import Country from '../Country/Country';
import "./countries.css";

   const Countries = ({ countriesPromise }) => {

   const[visitedCountries,setvisitedCountries]=([]);
   
   const handlevisitedCountries=({country})=>{
     console.log('handle visited country clicked',country);
   }

   const countriesData = use(countriesPromise);
   const countries=countriesData.countries;

  return (
    <div>
      <h1>In the countries:{countries.length}</h1>
      <h3>Total Country Visited:</h3>
      <div className="countries">
        {countries.map((country) => (
          <Country
            handlevisitedCountries={handlevisitedCountries}
            key={country.cca3.cca3}
            country={country}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;