import { IoMdCloud } from 'react-icons/io';
import './styles.css';

const Header = () => {
  return (
    <div className="container-header">
      <p className="date">14/03/2021</p>
      <p className="city">Porteirinha</p>

      <IoMdCloud color="#fff" size={200} />

      <p className="temp">30º</p>
    </div>
  )
}

export default Header;