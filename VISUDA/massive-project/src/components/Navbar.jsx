import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Link to="/">
          <img src="src/components/LOGO-VISUDA-FINAL-ANTI-REVISI-3.png" alt="Logo" />
        </Link>
      </div>
      <div className="menu">
        <ul>
          <li>
            <Link to="/">Beranda</Link>
          </li>
          <li>
            <Link to="/tentang-kami">Tentang Kami</Link>
          </li>
          <li>
            <Link to="/testimonials">Testimonials</Link>
          </li>
          <li>
            <Link to="/hubungi-kami">Hubungi Kami</Link>
          </li>
          <li>
            <Link to="/login" className="button">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
