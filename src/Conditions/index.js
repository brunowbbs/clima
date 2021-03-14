import { FaWind } from 'react-icons/fa';
import { FiDroplet } from 'react-icons/fi';
import { WiSunset } from 'react-icons/wi';
import { WiSunrise } from 'react-icons/wi';
import './styles.css';

const Condition = () => {
  return (
    <div className="container">
      <div className="condition">
        <FaWind className="icon" size={23} color="#1ed6ff" />
        <p className="text">7 km/h</p>
      </div>

      <div className="condition">
        <WiSunrise className="icon" size={33} color="#1ed6ff" />
        <p className="text">5:22 am</p>
      </div>

      <div className="condition">
        <WiSunset className="icon" size={33} color="#1ed6ff" />
        <p className="text">6:22 pm</p>
      </div>

      <div className="condition">
        <FiDroplet className="icon" size={23} color="#1ed6ff" />
        <p className="text">7 km/h</p>
      </div>
    </div>
  )
}

export default Condition;