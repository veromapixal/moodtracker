import { useNavigate } from 'react-router-dom';
import './header.module.css';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          <li className="nav-item">
            <button onClick={() => navigate('/')}>Home</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/about')}>About</button>
          </li>
          <li className="nav-item">
            <button onClick={() => navigate('/contact')}>Contact Us</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};