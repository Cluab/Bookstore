import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Books from "../books/books";

export default function Header() {
  return (
    <Router>
        <nav>
            <h1>hello</h1>
            <Link to="/">Books</Link>
            <Link to="/catagories">Catagories</Link>
        </nav>
        <Routes>
           {/* <Route path="/catagories" element={<Topics />} /> */}
           <Route path="/" element={<Books/>} />
        </Routes>
    </Router>
  );
}
