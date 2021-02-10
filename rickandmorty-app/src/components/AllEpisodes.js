import React, { useState, useEffect } from "react";

import "../../src/index.css";

import EpisodeTemplate from './EpisodeTemplate';

function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchEpisodes();
  }, []);

  const fetchEpisodes = async () => {
    setLoading(true);
    const res = await fetch(
      'https://rickandmortyapi.com/api/episode/?page=2'
    );

    const episodes = await res.json();
    setEpisodes(episodes.results);
    setLoading(false);
  }

  return (
    <div >
      {loading ?
        <p>Loading...</p>
        : <>
          <EpisodeTemplate episodes={episodes} page={page} />
        </>
      }

    </div>
  );
}

export default AllEpisodes;