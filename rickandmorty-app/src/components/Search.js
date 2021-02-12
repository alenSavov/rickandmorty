import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core";

import CharacterCard from './CharacterCard';


const useStyles = makeStyles(() => ({
    searchWrapper: {
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
    loading: {
        fontFamily: 'Indie Flower',
        fontSize: '2rem',
        fontWeight: '900',
        margin: '30px 0',
        color: '#f50057',
        textTransform: 'uppercase',
      },

}));

const Search = (props) => {
    const [input, setInput] = useState('');
    const [character, setCharacter] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchData()

    }, []);

    const fetchData = async (inputName) => {
        const res = await fetch(
            `https://rickandmortyapi.com/api/character/?name=${ inputName }`
        );

        const searchedCharacter = await res.json();
        setCharacter(searchedCharacter.results);
        setIsLoading(false);
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
            {(!isLoading)  
             ? <CharacterCard character={character} />
             : <h1 className={classes.loading}>Loading...</h1>
            }
            </div>
    );
}

export default Search;
