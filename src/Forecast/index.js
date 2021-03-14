import './styles.css'

import { IoRainyOutline } from 'react-icons/io5';
import { WiDaySunny } from 'react-icons/wi';

const Forecast = () => {

  const myList = [
    {
      "date": "01/03",
      "weekday": "Seg",
      "max": "25",
      "min": "17",
      "description": "Tempestades isoladas",
      "condition": "storm"
    },
    {
      "date": "02/03",
      "weekday": "Ter",
      "max": "25",
      "min": "17",
      "description": "Tempestades isoladas",
      "condition": "cloud"
    },
    {
      "date": "03/03",
      "weekday": "Qua",
      "max": "25",
      "min": "17",
      "description": "Tempestades isoladas",
      "condition": "storm"
    },

  ]


  return (
    <div className="list-forecast">
      {
        myList.map(item => (
          <div className="item-list" >
            <p>{item.date}</p>

            {item.condition === 'storm' ?
              <IoRainyOutline color="#1ed6ff" size={28} style={{ margin: '0 auto' }} /> :
              <WiDaySunny color="#1ed6ff" size={36} style={{ margin: '0 auto' }} />
            }



            <div>
              <p>{item.min}º</p>
              <p style={{ fontSize: 18, fontWeight: 'bold' }}>{item.max}º</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Forecast;