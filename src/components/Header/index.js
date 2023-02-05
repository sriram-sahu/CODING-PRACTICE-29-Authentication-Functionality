import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header">
    <li>
      <Link to="/" className="nav-link">
        Home
      </Link>
      <li>
        <Link to="/about" className="nav-link">
          about
        </Link>
      </li>
    </li>
  </ul>
)

export default Header
