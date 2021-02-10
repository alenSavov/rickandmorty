import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from "@material-ui/core";


import CharacterCard from './CharacterCard';
import CharacterCardExtendInfo from './CharacterCardExtendInfo';

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Indie Flower',
        fontSize: '2rem',
        fontWeight: '900',
        margin: '30px 0',
    },
    characterWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexWrap: 'wrap',
        width: '100%',
    },
    character: {
        background: 'green',
    },
}));

function EpisodeDetails({ match }) {
    useEffect(() => {
        fetchEpisode();
        fetchCharacters();
    }, [])

    const classes = useStyles();
    const [episode, setItem] = useState({});
    const [charactersId, setCharactersId] = useState([]);
    const [characters, setCharacters] = useState([]);

    const fetchEpisode = async () => {
        const fetchEpisode = await fetch(`https://rickandmortyapi.com/api/episode/${ match.params.id }`);
        const episode = await fetchEpisode.json();
        setItem(episode);

        const characterIdCollection = [];
        episode.characters.forEach(e => {
            characterIdCollection.push(e.split('/')[5]);
        });

        setCharactersId(characterIdCollection);
    }

    const fetchCharacters = async () => {
        const fetchCharacters = await fetch(`https://rickandmortyapi.com/api/character/${ charactersId }`);
        const characters = await fetchCharacters.json();

        setCharacters(characters.results);
    }

    console.log(characters);
    return (
        <>
            <Typography className={classes.title}>Episode Details Page</Typography>
            <div className={classes.characterWrapper}>
                {/* {characters.map(c => (
                <div className={classes.character} key={c.id}>
                    <h1>{c.name}</h1>
                    <p>{c.status}</p>
                    <p>{c.species}</p>
                    <p>{c.gender}</p>
                    <p>{c.location.url}</p>
                </div>
            ))} */}
                <CharacterCard character={characters} isExtended={true} />

            </div>
        </>
    )
}

export default EpisodeDetails;
