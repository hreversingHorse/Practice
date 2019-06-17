import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Weather from './components/Weather'

const App = ({link}) => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState([])

  const getCountries = () => {
    axios.get(link)
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(getCountries, [])
  
  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  const namesOfChosenCountries = (chosenCountries) => 
    chosenCountries.map(country => <li>{country.name}<button onClick={() => setFilter(country.name)}>show</button></li>)

  const languagesForOneChosenCountry = (chosenCountries) => 
    chosenCountries[0].languages.map(language => <li>{language.name}</li>)

  const rows = () => {
    const chosenCountries = countries.filter(country => {
      if (country.name.toString().toLowerCase().includes(filter.toString().toLowerCase()) === true){
        return (
          true
        )
      }else {
        return (
          false
        )
      }
    })


    if (chosenCountries.length >= 10) {
      return (
        <div>
          To many available countries.
        </div>
      )
    }

    if (chosenCountries.length < 10 && chosenCountries.length !== 1){
      console.log(namesOfChosenCountries)
      return (
        <ul>
          {namesOfChosenCountries(chosenCountries)}
        </ul>
      )
    }

    if (chosenCountries.length === 1){
      return (
        <div>
          <h1>{chosenCountries[0].name}</h1>
          <div>
            <p>capital {chosenCountries[0].capital}</p>
            <p>population {chosenCountries[0].population}</p>
          </div>
          <div>
            <h2>languages</h2>
            <ul>
              {languagesForOneChosenCountry(chosenCountries)}
            </ul>
          </div>
          <div>
            <img src={chosenCountries[0].flag} width="400" height="250" alt="flag of country"/>
          </div>
          <Weather name={chosenCountries[0].capital}/>

        </div>
      )
    }
  }



  return (
    <div>
      <div>
        find countries <input value={filter} onChange={handleFilterChange}/>
      </div>
      <div>
        {rows()}
      </div>
      <ul>

      </ul>
    </div>
  );
};

export default App;