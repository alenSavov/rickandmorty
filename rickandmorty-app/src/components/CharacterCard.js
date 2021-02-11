import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Typography } from "@material-ui/core";

import Location from './Location';

const useStyles = makeStyles(() => ({
    title: {
        color: '#f50057',
        textTransform: 'uppercase',
        fontSize: '2rem',
        fontFamily: 'Indie Flower',
        fontWeight: '900',
        margin: '60px 0 10px 0',
    },
    searchWrapper: {
        background: "linear-gradient(to right, #26D0CE, #1A2980)",
        height: "100%",
        minHeight: '93vh',
    },

    listOfCards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '33px 0',
    },

    userCard: {
        width: '200px',
        height: 'auto',
        borderRadius: '10px',
        boxShadow: '5px 5px 30px black',
        margin: '10px',
        background: '#0c2b5e',
        background: 'linear-gradient(to left, #0c2b5e, #173c77)',
        background: 'linear-gradient(to left, #0c2b5e, #173c77)',

        '&:hover': {
            transform: 'scale(1.02)',
            boxShadow: '20px 20px 50px black',

        },
        '& img': {
            width: '120px',
            height: '120px',
            margin: '8px 0 0 0',
            borderRadius: '50%',
            border: '4px solid #FFF',
            objectFit: 'cover',
        }
    },

    userCardTop: {
        height: '45%',
        width: '100%',
        overflow: 'hidden',
        textAlign: 'center',
    },

    userCardBottom: {
        color: '#7881bccf',
        minHeight: '40%',
        overflow: 'auto',
        minWidth: '100%',
        maxWidth: '100%',
        textAlign: 'center',
        padding: '0 10px 5px',
        overflowWrap: 'break-word',
        padding: '0',

    },
    name: {
        fontWeight: '900',
        fontSize: '1.2rem',
        fontFamily: 'Indie Flower',
    },
    location: {
        color: '#7881bccf',
        textDecoration: 'none',
        '&:hover': {
            color: '#f50057',
        }
    },
    origin: {
        color: '#7881bccf',
        textDecoration: 'none',
        '&:hover': {
            color: '#f50057',
        }
    },
    alive: {
        color: '#03ea03',
    }
}));

const CharacterCard = ({ character, isExtended = false }) => {
    const classes = useStyles();
    const isAlive = 'Alive';
    const extractId = (url) => {
        return url.split('/')[5];
    }
    const isOriginExist = (origin) => {
        if (origin === '') {
            return false;
        }
        return true;
    }

    return (
        <>
            <Typography className={classes.title}>Characters</Typography>
            <div className={classes.listOfCards}>
                {character?.map(d =>
                    <div key={d.id} className={classes.userCard}>
                        <div className={classes.userCardTop}>
                            <img src={`${ d.image }`} />
                        </div>
                        <div className={classes.userCardBottom}>
                            <Typography className={classes.name} color="secondary">
                                {`${ d.name }`}
                            </Typography>
                            <Typography className={((d.status === isAlive) ? classes.alive : '')}>
                                {`${ d.status }`}
                            </Typography>
                            <Typography>
                                {`${ d.species }`}
                            </Typography>
                            {isExtended ?
                                <div>
                                    {(isOriginExist(d.origin.url))?
                                        <Typography>
                                        <Link to={`/location/${extractId(d.origin.url)}`} className={classes.origin}>Origin</Link>
                                         </Typography>
                                        : 'No origin data'
                                    }
                                    <Typography>
                                        <Link to={`/location/${extractId(d.location.url)}`} className={classes.location}>Location</Link>
                                    </Typography>
                                </div>
                                : ''}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default CharacterCard;