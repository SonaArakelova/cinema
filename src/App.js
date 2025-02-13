// import React, { useState } from "react";
// import { Header } from "./components/header/header";
// import { SearchMovies } from "./pages/search-movies/search-movies";
// import { Movies } from "./pages/movies/movies";
// import { Footer } from "../src/components/pagination/pagination.jsx";
// import "./App.css"
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-icons/font/bootstrap-icons.css";


// const tab = {
//   search: "search",
//   movies: "movies",
// };

// function App() {
//   const [searchQuery, setSearchQuery] = useState("NFL");
//   const [activeTab, setActiveTab] = useState(tab.search);



//   return (
//     <div className="page">
//       <Header searchQuery={searchQuery} onSearch={setSearchQuery} />
//       <ul className="nav nav-tabs">
//         <li className="nav-item">
//           <button
//             onClick={() => setActiveTab(tab.search)}
//             className={`nav-link link-button ${activeTab === tab.search ? 'active-button' : ''}`}
//           >
//             Search Movies
//           </button>
//         </li>
//         <li className="nav-item">
//           <button 
//           onClick={() => setActiveTab(tab.movies)} 
//           className={`nav-link link-button ${activeTab === tab.movies ? 'active-button' : ''}`}>
//           My Favorite Movies 
//           </button>
//         </li>
//       </ul>

//       {activeTab === tab.search ? (

//         <SearchMovies searchQuery={searchQuery} />
//       ) : (
//         <Movies />
//       )}

//       <main className="container mt-4"></main>

//       <Footer />

//     </div>
//   );
// }

// export default App;



import React, { useReducer } from "react";
import { Header } from "./components/header/header";
import { SearchMovies } from "./pages/search-movies/search-movies";
import { Movies } from "./pages/movies/movies";
import { Footer } from "../src/components/pagination/pagination.jsx";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const tab = {
  search: "search",
  movies: "movies",
};

const initialState = {
  searchQuery: "NFL",
  activeTab: tab.search,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "SET_SEARCH_QUERY":
      return { ...state, searchQuery: action.payload };
    case "SET_ACTIVE_TAB":
      return { ...state, activeTab: action.payload };
    default:
      return state;
  }
};

function App() {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const handleSearch = (query) => {
    dispatch({ type: "SET_SEARCH_QUERY", payload: query });
  };

  const handleTabChange = (tabName) => {
    dispatch({ type: "SET_ACTIVE_TAB", payload: tabName });
  };

  return (
    <div className="page">
      <Header searchQuery={state.searchQuery} onSearch={handleSearch} />
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            onClick={() => handleTabChange(tab.search)}
            className={`nav-link link-button ${state.activeTab === tab.search ? "active-button" : ""}`}
          >
            Search Movies
          </button>
        </li>
        <li className="nav-item">
          <button
            onClick={() => handleTabChange(tab.movies)}
            className={`nav-link link-button ${state.activeTab === tab.movies ? "active-button" : ""}`}
          >
            My Favorite Movies
          </button>
        </li>
      </ul>

      {state.activeTab === tab.search ? (
        <SearchMovies searchQuery={state.searchQuery} />
      ) : (
        <Movies />
      )}

      <main className="container mt-4"></main>

      <Footer />
    </div>
  );
}

export default App;
