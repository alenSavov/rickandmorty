import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";

import CharacterCard from './CharacterCard';


const useStyles = makeStyles(() => ({
    searchWrapper: {
        background: "linear-gradient(to right, #26D0CE, #1A2980)",
        height: "100%",
    },

    searchBar: {
        boxShadow: '2px 15px 29px 13px rgba(0,0,0,0.75)',
        webkitBoxShadow: '2px 15px 29px 13px rgba(0,0,0,0.75)',
        mozBoxShadow: '2px 15px 29px 13px rgba(0,0,0,0.75)',
        width: '100%',
        overflow: 'hidden',

        '& input': {
            width: '100%',
            padding: '15px 0',
            textAlign: 'center',
            textTransform: 'uppercase',

            '&:focus': {
                outline: 'none',
            },
        }
    },

}));

const Search = (props) => {
    const [input, setInput] = useState('');
    const [character, setCharacter] = useState([]);

    useEffect(() => {
        fetchData()

    }, []);

    const fetchData = async (inputName) => {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${ inputName }`
        );

        const searchedCharacter = await res.json();
        setCharacter(searchedCharacter.results);
    }

    const classes = useStyles();

    return (
        <div className={classes.searchWrapper}>
            <div>
                <form className={classes.searchBar}
                    onSubmit={e => e.preventDefault()}>
                    <input type="text"
                        className={classes.searchBox}
                        placeholder="Search by name"
                        onChange={(e) => fetchData(e.target.value)} />
                </form>
            </div>

            <CharacterCard character={character} />
        </div>
    );
}

export default Search;
