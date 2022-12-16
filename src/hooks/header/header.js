import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Books from '../books/books';
import { getPosts } from '../../redux/books/posts/postsSlice';
import Catagories from '../catagories/catagories';
import './main.css';

// add navigation and using react router dom to manipulation the pages
export default function Header() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Router>
      <nav className="nav-bar">
        <a className="page-logo" href="#/">Bookstore CMS</a>
        <ul className="nav-links">
          <li><Link className="nav-link active-link" to="/">BOOKS</Link></li>
          <li><Link className="nav-link active-link" to="/catagories">CATEGORIES</Link></li>
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
