import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import axios from "axios";

import "../../src/index.css";
import EpisodeTemplate from './EpisodeTemplate';
import Pagination from './Pagination';

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: 'Indie Flower',
    fontSize: '2rem',
    fontWeight: '900',
    margin: '30px 0',
  },
}));

function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState(1)
  const classes = useStyles();

  const fetchEpisodes = async (pageNumber) => {
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
      <Typography className={classes.title}>All Episodes</Typography>
      <EpisodeTemplate episodes={episodes} />
      <Pagination fetchData={fetchEpisodes} info={info} />
    </>
  )
}

export default AllEpisodes;