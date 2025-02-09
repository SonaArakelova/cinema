import React from 'react';
import './table.css'

export const Table = ({ data, onRowClick, setMovies }) => {
  
  const handleRemove = (movieToRemove) => {
    const updatedMovies = data.filter(movie => movie.imdbID !== movieToRemove.imdbID);
    
    localStorage.setItem('movies', JSON.stringify(updatedMovies));

    setMovies(updatedMovies);  
  };


  return (
    <table className="table mt-3 table-hover">
      <thead className="thead-dark">
        <tr>
          <th>Poster</th>
          <th>Title</th>
          <th>Year</th>
          <th>Type</th>
          <th className="text-md-end">IMDB ID</th>
        </tr>
      </thead>
      <tbody>
        {data.map((movie) => (
          <tr key={movie.imdbID} onClick={() => onRowClick(movie)}>
            <td>
              <img width="130" src={movie.Poster} alt={movie.Title} />
            </td>
            <td>{movie.Title}</td>
            <td>{movie.Year}</td>
            <td>{movie.Type}</td>
            <td className="text-md-end">{movie.imdbID}</td>
            <td>
              <button 
              className='remove-button'
                onClick={(e) => {
                  e.stopPropagation(); 
                  handleRemove(movie); 
                }}
              >
                Remove movie
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
