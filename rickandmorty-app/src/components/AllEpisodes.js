import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import "../../src/index.css";


function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    const res = await fetch(
      'https://rickandmortyapi.com/api/episode/?page=2'
    );

    const episodes = await res.json();
    setEpisodes(episodes.results);
  }

  return (
    <div className='App'>
      <ul className='list-group mb-4'>
        {episodes.map(e => (
          <li key={e.id} characters={e.characters} className='list-group-item'>
            <Link to={`/allepisodes/${ e.id }`}>{e.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEpisodes;