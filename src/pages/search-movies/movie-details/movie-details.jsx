// import React, { useState, useEffect } from "react";
// import { omdbApi } from "../../../api/movie.api.js";
// import { useLocalStorageState } from "../../../hook/use-local-storage-state.js";
// import "./movie-details.css"

// export const MovieDetails = ({ id }) => {
//   const [movie, setMovie] = useState({});
//   const [isMovieFavorite, setIsMovieFavorite] = useState(false);
//   const [moviesState, setMovies] = useLocalStorageState([], "movies");

//   useEffect(() => {
//     setIsMovieFavorite(!!moviesState.filter((m) => m.imdbID === id).length);
//   }, [id]);

//   useEffect(() => {
//     const getMovie = async () => {
//       try {
//         const response = await omdbApi.fetchByID(id);
//         setMovie(response.data);
//       } catch (error) {
//         console.error("Error fetching movie details:", error);
//       }
//     };

//     if (id) {
//       getMovie();
//     } else {
//       setMovie({});
//     }

//     return () => {
//       console.log("cleanup");
//     };
//   }, [id]);

//   const handelUpdateFavoriteStatus = () => {
//     const movies = [...moviesState];
//     const target = movies.find((m) => m.imdbID === id);

//     if (target) {
//       const index = movies.findIndex((m) => m.imdbID === id);
//       movies.splice(index, 1);
//       setMovies(movies);
//       setIsMovieFavorite(false);
//     } else {
//       movies.push(movie);
//       setMovies(movies);
//       setIsMovieFavorite(true);
//     }
//   };

//   return (
//     <div className="movie-container">
//       <div className=" d-flex justify-content-flex-start">
//         <div className="me-5">
//           <img
//             src={movie.Poster}
//             alt={movie.Title}
//             width={200}
//             className="h-auto rounded d-block"
//           />
//         </div>
//         <div className="content">
//           <p className="text-gray-600 d-flex align-items-center justify-content-between">
//             <span>
//               <strong>Directed by:</strong> {movie.Director}
//             </span>
//             <button
//               className="btn btn-link"
//               onClick={handelUpdateFavoriteStatus}
//             >
//               {isMovieFavorite ? (
//                 <i
//                   className="bi bi-patch-plus-fill"
//                   style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
//                 ></i>
//               ) : (
//                 <i
//                   className="bi bi-patch-plus"
//                   style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
//                 ></i>
//               )}
//             </button>
//           </p>
//           <p className="text-gray-600">
//             <strong>Writer:</strong> {movie.Writer}
//           </p>
//           <p className="text-gray-600">
//             <strong>Actors:</strong> {movie.Actors}
//           </p>
//           <p className="text-gray-600">
//             <strong>Genre:</strong> {movie.Genre}
//           </p>
//           <p className="text-gray-600">
//             <strong>Language:</strong> {movie.Language}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };




import React, { useReducer, useEffect } from "react";
import { omdbApi } from "../../../api/movie.api.js";
import { useLocalStorageState } from "../../../hook/use-local-storage-state.js";
import "./movie-details.css";

const initialState = {
  movie: {},
  isMovieFavorite: false,
  moviesState: [],
};

const movieDetailsReducer = (state, action) => {
  switch (action.type) {
    case "SET_MOVIE":
      return { ...state, movie: action.payload };
    case "SET_FAVORITE_STATUS":
      return { ...state, isMovieFavorite: action.payload };
    case "SET_MOVIES_STATE":
      return { ...state, moviesState: action.payload };
    default:
      return state;
  }
};

export const MovieDetails = ({ id }) => {
  const [state, dispatch] = useReducer(movieDetailsReducer, initialState);
  const [moviesState, setMovies] = useLocalStorageState([], "movies");

  useEffect(() => {
    dispatch({ type: "SET_MOVIES_STATE", payload: moviesState });
    dispatch({
      type: "SET_FAVORITE_STATUS",
      payload: !!moviesState.filter((m) => m.imdbID === id).length,
    });
  }, [id, moviesState]);

  useEffect(() => {
    const getMovie = async () => {
      try {
        const response = await omdbApi.fetchByID(id);
        dispatch({ type: "SET_MOVIE", payload: response.data });
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    };

    if (id) {
      getMovie();
    } else {
      dispatch({ type: "SET_MOVIE", payload: {} });
    }

    return () => {
      console.log("cleanup");
    };
  }, [id]);

  const handleUpdateFavoriteStatus = () => {
    const movies = [...state.moviesState];
    const target = movies.find((m) => m.imdbID === id);

    if (target) {
      const index = movies.findIndex((m) => m.imdbID === id);
      movies.splice(index, 1);
      setMovies(movies);
      dispatch({ type: "SET_FAVORITE_STATUS", payload: false });
    } else {
      movies.push(state.movie);
      setMovies(movies);
      dispatch({ type: "SET_FAVORITE_STATUS", payload: true });
    }
  };

  return (
    <div className="movie-container">
      <div className="d-flex justify-content-flex-start">
        <div className="me-5">
          <img
            src={state.movie.Poster}
            alt={state.movie.Title}
            width={200}
            className="h-auto rounded d-block"
          />
        </div>
        <div className="content">
          <p className="text-gray-600 d-flex align-items-center justify-content-between">
            <span>
              <strong>Directed by:</strong> {state.movie.Director}
            </span>
            <button
              className="btn btn-link"
              onClick={handleUpdateFavoriteStatus}
            >
              {state.isMovieFavorite ? (
                <i
                  className="bi bi-patch-plus-fill"
                  style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                ></i>
              ) : (
                <i
                  className="bi bi-patch-plus"
                  style={{ fontSize: "2rem", color: "rgb(245, 197, 24)" }}
                ></i>
              )}
            </button>
          </p>
          <p className="text-gray-600">
            <strong>Writer:</strong> {state.movie.Writer}
          </p>
          <p className="text-gray-600">
            <strong>Actors:</strong> {state.movie.Actors}
          </p>
          <p className="text-gray-600">
            <strong>Genre:</strong> {state.movie.Genre}
          </p>
          <p className="text-gray-600">
            <strong>Language:</strong> {state.movie.Language}
          </p>
        </div>
      </div>
    </div>
  );
};
