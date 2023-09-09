// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <div className="nav-content">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="logo-img"
      />
      <ul className="nav-menu">
        <Link to="/" className="nav-link">
          <li className="list-item">Home</li>
        </Link>
        <Link to="/products" className="nav-link">
          <li className="list-item">Products</li>
        </Link>
        <Link to="/cart" className="nav-link">
          <li className="list-item">Cart</li>
        </Link>
      </ul>
      <button type="button" className="logout-btn">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
