import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from '../books/books';
import Catagories from '../catagories/catagories';
// add navigation and using react router dom to manipulation the pages
export default function Header() {
  return (
    <Router>
      <nav>
        <Link to="/">Books</Link>
        <Link to="/catagories">Catagories</Link>
      </nav>
      <Routes>
        <Route path="/catagories" element={<Catagories />} />
        <Route path="/" element={<Books />} />
      </Routes>
    </Router>
  );
}
