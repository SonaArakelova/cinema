import React from 'react';
import './table.css'
import imdb from "../../assets/images/imdb.png"

export const Table = ({ data, onRowClick }) => {
  
  

  const handleOpenIMDBbMovie = (event, imdbID) => {
    event.stopPropagation();
    window.open(`https://www.imdb.com/title/${imdbID}`, " ");
  };

  return (
    <table className="table mt-3 ">
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
            <td className="text-md-end">
            <div className="d-flex justify-content-end">
                <button
                  type="button"
                  className="btn btn-link"
                  onClick={(event) => handleOpenIMDBbMovie(event, movie.imdbID)}
                >
                 You can Watch on IMDB

                  <img src={imdb} alt="" width={40} />
                </button>
              </div>
            </td>
            <td>
              <button 
              className='remove-button'
                onClick={(e) => {
                  e.stopPropagation(); 
                  // handleRemove(movie); 
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
