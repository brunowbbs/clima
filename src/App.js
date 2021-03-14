import React from 'react';
import './index.css';

import Condition from './Conditions';
import Header from './Header';
import Forecast from './Forecast';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import axios from 'axios'

const App = () => {

  const [value, setValue] = React.useState('Porteirinha,MG');
  const [wheater, setWheater] = React.useState();

  const handleChange = (city) => {
    let citySelected = city.value.terms[0].value + "," + city.value.terms[1].value;
    setValue(citySelected);
    console.log(city)
  }


  React.useEffect(() => {

    (async () => {
      //weather?key=df155030&city_name=Porteirinha,SP
      // const response = await axios.get(`https://api.hgbrasil.com/weather?key=49316412&city_name=Porteirinha,MG`);
      // alert(response.data)


      fetch("https://api.hgbrasil.com/weather?key=49316412&city_name=Porteirinha,MG")
        .then(res => res.json())
        .then(
          (result) => {
            alert('ok')
          },
          // Nota: É importante lidar com os erros aqui
          // em vez de um bloco catch() para não recebermos
          // exceções de erros dos componentes.
          (error) => {
            alert('erro')
          }
        )
    })();

  }, [value])

  return (
    <div className="home">

      <div className="container-input">
        <GooglePlacesAutocomplete
          selectProps={{
            value,
            onChange: handleChange,
            styles: {
              dropdownIndicator: () => ({
                display: 'none'
              }),

              input: (provided) => ({
                ...provided,
                width: '550px',
                justifyContent: 'start',
                alignItems: 'center',
                height: '45px',
                display: 'flex',
                outline: 'none',
                color: '#fff',
              }),
              control: (provided) => ({
                ...provided,
                width: '550px',
                alignItems: 'center',
                justifyContent: 'start',
                display: 'flex',
                outline: 'none',
              }),
              singleValue: (provided) => ({
                ...provided,
                color: '#fff',
              }),
            },
            placeholder: 'Selecione uma cidade',
            country: ['brl'],
          }}
        />
      </div>

      <Header />
      <Condition />
      <Forecast />


    </div>
  )
}


// const customStyles = {
//   option: (provided, state) => ({
//     ...provided,
//     borderBottom: '1px dotted pink',
//     color: state.isSelected ? 'red' : 'blue',
//     padding: 20,
//   }),
//   control: () => ({
//     // none of react-select's styles are passed to <Control />
//     width: 200,
//   }),
//   singleValue: (provided, state) => {
//     const opacity = state.isDisabled ? 0.5 : 1;
//     const transition = 'opacity 300ms';

//     return { ...provided, opacity, transition };
//   }
// }

export default App;
