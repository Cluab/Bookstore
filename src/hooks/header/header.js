import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from '../books/books';
import Catagories from '../catagories/catagories';
import './main.css';

// add navigation and using react router dom to manipulation the pages
export default function Header() {
  return (
    <Router>
      <nav className="nav-bar">
        <a className="page-logo" href="#/">Bookstore CMS</a>
        <ul className="nav-links">
          <li><Link className="nav-link active-link" to="/">BOOKS</Link></li>
          <li><Link className="nav-link active-link" to="/catagories">CATAGORIES</Link></li>
        </ul>
        <button className="icon-button" type="button">
          <i className="fa-solid fa-user" />
        </button>
      </nav>
      <Routes>
        <Route path="/catagories" element={<Catagories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  );
}
