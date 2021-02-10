import React from 'react';
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
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
            border: '4px solid white',
            objectFit: 'cover',
        }
    },

    userCardTop: {
        height: '52%',
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

        name: {
            fontWeight: '900',
            fontFamily: 'Indie Flower',
        }
    },
}));

const CharacterCard = ({ character }) => {
    const classes = useStyles();

    return (
        <div className={classes.listOfCards}>
            {character && character
                .map(d =>
                    <div key={d.id} className={classes.userCard}>
                        <div className={classes.userCardTop}>
                            <img src={`${ d.image }`} />
                        </div>
                        <div className={classes.userCardBottom}>
                            <Typography className={classes.name} color="secondary">
                                {`${ d.name }`}
                            </Typography>
                            <Typography>
                                {`${ d.species }`}
                            </Typography>
                            <Typography>
                                {`${ d.gender }`}
                            </Typography>
                            <Typography>
                                {`${ d.status }`}
                            </Typography>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default CharacterCard;