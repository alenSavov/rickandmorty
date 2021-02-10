import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";

import "../../src/index.css";
import EpisodeTemplate from './EpisodeTemplate';


const useStyles = makeStyles(() => ({
  pagination: {
    backgroundColor: 'linear-gradient(to right, #26D0CE, #1A2980)',
  },
  btn: {
    background: '#f50057',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '5px',
    margin: '15px 10px',
    transition: 'transform .2s',

    '&:hover': {
      transform: 'scale(1.5)',
    },
    '&:focus': {
      outline: 'none',
    }
  },
}));


function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(1)
  const classes = useStyles();

  const fetchEpisodes = async (pageNumber) => {
    setIsLoading(true);

    let baseUrl = 'https://rickandmortyapi.com/api/episode';

    if (pageNumber) {
      baseUrl += `/?page=${ pageNumber }`
    }

    const result = await axios(baseUrl);

    const pageInfo = result.data.info

    setInfo({
      next: pageNumber < pageInfo.pages ? pageNumber + 1 : null,
      current: pageNumber,
      prev: pageNumber > 1 ? pageNumber - 1 : null
    })
    setEpisodes(result.data.results)
    setIsLoading(false)
  };

  useEffect(() => {
    fetchEpisodes(1)
  }, [])


  return (
    <>
      <EpisodeTemplate episodes={episodes} />
      <div className={classes.pagination}>
        {
          info.prev ? (
            <button className={classes.btn} type="button" onClick={() => fetchEpisodes(info.prev)}>
              { info.prev}
            </button>
          ) : (
              <React.Fragment />
            )
        }

        <button className={classes.btn} type="button">
          {info.current}
        </button>

        {
          info.next ? (
            <button className={classes.btn} type="button" onClick={() => fetchEpisodes(info.next)}>
              { info.next}
            </button>
          ) : (
              <React.Fragment />
            )
        }
      </div>
    </>
  )
}

export default AllEpisodes;