import { Link } from 'react-router-dom';
import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";
import "../../src/index.css";

const useStyles = makeStyles(() => ({
  allEpisodesWrapper: {
    background: "linear-gradient(to right, #26D0CE, #1A2980)",
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    listStyleType: 'none',
    padding: '0',
  },
  episode: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: '250px',
    height: '120px',
    borderRadius: '10px',
    boxShadow: '5px 5px 30px black',
    margin: '10px',
    background: '#0c2b5e',
    background: 'linear-gradient(to left, #0c2b5e, #173c77)',
    background: 'linear-gradient(to left, #0c2b5e, #173c77)',
    textDecoration: 'none',
    padding: '15px',

    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '20px 20px 50px black',

    },
  },
  name: {
    color: '#f50057',
    textTransform: 'uppercase',
    fontWeight: '900',
    textDecoration: 'none!important',
    width: '100%',
  },
  date: {
    color: '#7881bccf',
  }
}));


function AllEpisodes() {
  const [episodes, setEpisodes] = useState([]);
  const classes = useStyles();

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
    <div >
      <ul className={classes.allEpisodesWrapper}>
        {episodes.map(e => (
          <Link to={`/allepisodes/${ e.id }`} className={classes.li} key={e.id}>
            <li characters={e.characters} className={classes.episode}>
              <Typography className={classes.name}>{e.name}</Typography>
              <Typography className={classes.date}>{`${ e.air_date }`}</Typography>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default AllEpisodes;