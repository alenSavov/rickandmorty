import React, { useState, useEffect } from "react";
import { makeStyles, Typography } from "@material-ui/core";

import CharacterCard from "./CharacterCard";
import EpisodeDetailsTemplate from "./EpisodeDetailsTemplate";
import CharacterCardExtendInfo from "./CharacterCardExtendInfo";

const useStyles = makeStyles(() => ({
  characterWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    width: "100%",
  },
  character: {
    background: "green",
  },
}));

function Episode({ match }) {
  const classes = useStyles();
  const [episode, setEpisode] = useState({});
  const [charactersId, setCharactersId] = useState([]);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchEpisode();
  }, []);

  useEffect(() => {
    if (charactersId.length > 0) {
      fetchCharacters();
    }
  }, [charactersId]);

  const fetchEpisode = async () => {
    const fetchEpisode = await fetch(
      `https://rickandmortyapi.com/api/episode/${match.params.id}`
    );
    const episode = await fetchEpisode.json();
    setEpisode(episode);

    const characterIdCollection = [];
    episode.characters.forEach((e) => {
      characterIdCollection.push(e.split("/")[5]);
    });

    setCharactersId(characterIdCollection);
  };

  const fetchCharacters = async () => {
    const fetchCharacters = await fetch(
      `https://rickandmortyapi.com/api/character/${charactersId}`
    );
    const characters = await fetchCharacters.json();

    setCharacters(characters);
  };
  
  return (
    <>
      <div className={classes.characterWrapper}>
        <EpisodeDetailsTemplate episode={episode} />
        <CharacterCard character={characters} isExtended={true} />
      </div>
    </>
  );
}

export default Episode;