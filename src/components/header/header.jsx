import React, { useRef, useEffect } from "react";
import "./header.css";

export const Header = ({ onSearch, searchQuery }) => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <header className="bg text-white p-3 d-flex justify-content-between">
      <div className="logo">
      <div className="backofh1">
        <h1>OMDb</h1>
        </div>
        <i class="bi bi-film"></i>        
      </div>
      <input
        ref={inputRef}
        value={searchQuery}
        type="text"
        className=" input"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
       <div className="buttons">
        <button>OMDb <span className="button-text"> Pro</span> </button>
        <button>Sign in</button>
        <button>Watch List</button>
      </div>
    </header>
  );
};