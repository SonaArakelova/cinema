import React, { useState } from "react";
import { Header } from "./components/header/header";
import { SearchMovies } from "./pages/search-movies/search-movies";
import { Movies } from "./pages/movies/movies";
import { Footer } from "../src/components/footer/footer.jsx";
import "./App.css"

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const tab = {
  search: "search",
  movies: "movies",
};

function App() {
  const [searchQuery, setSearchQuery] = useState("Home");
  const [activeTab, setActiveTab] = useState(tab.search);



  return (
    <div className="page">
      <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => setActiveTab(tab.search)}
            className={`nav-link link-button ${activeTab === tab.search ? 'active-button' : ''}`}
          >
            Search Movies
          </button>
        </li>
        <li className="nav-item">
          <button 
          onClick={() => setActiveTab(tab.movies)} 
          className={`nav-link link-button ${activeTab === tab.movies ? 'active-button' : ''}`}>
          My Favorite Movies 
          </button>
        </li>
      </ul>

      {activeTab === tab.search ? (

        <SearchMovies searchQuery={searchQuery} />
      ) : (
        <Movies />
      )}

      <main className="container mt-4"></main>

      <Footer />

    </div>
  );
}

export default App;