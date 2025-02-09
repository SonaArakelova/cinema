import { useLocalStorageState } from "../../hook/use-local-storage-state.js";
import { Table } from "../../components/table/table";
import React from 'react';
import './movies.css';

export const Movies = () => {
  const [moviesState] = useLocalStorageState([], "movies");

  return (
    <div className="favorite container mt-4 ">
      <h1>My Movie List</h1>
      <Table data={moviesState} onRowClick={() => {}} />
    </div>
  );
};