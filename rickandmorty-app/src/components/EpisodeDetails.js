import React, { useState, useEffect } from 'react';

function EpisodeDetails({ match }) {

    useEffect(() => {
        fetchEpisode();
    }, [])

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

        let result = characterIdCollection.map(i => Number(i));

        console.log(result);

        const fetchCharacters = async () => {
            const res = await fetch(`https://rickandmortyapi.com/api/character/[${ result }]`);

            const characters = res.json();
            console.log(res);
        }

        fetchCharacters();
    }

    return (
        <div>
            {characters.map(c => (
                <div key={c.id}>
                    <h1>{c.name}</h1>
                    <p>{c.status}</p>
                    <p>{c.species}</p>
                    <p>{c.gender}</p>
                </div>
            ))}
        </div>
    )
}

export default EpisodeDetails;
