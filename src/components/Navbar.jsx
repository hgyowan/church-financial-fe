import logo from '../assets/react.svg';
import './Navbar.css';

function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <img src={logo} className="navbar-logo" alt="Church Financial Logo" />
        <nav className="navbar-menu">
          <a href="#hero">소개</a>
          <a href="#features">주요기능</a>
          <a href="#contact">문의</a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar; 