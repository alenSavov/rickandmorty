import React from 'react'
import { makeStyles, Typography } from "@material-ui/core";

import episodeImage from './../assets/episode-image.png';

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Indie Flower',
        fontSize: '2rem',
        fontWeight: '900',
        margin: '30px 0',
        color: '#f50057',
    },
    episodeWrapper: {
        background: 'rgba(0, 0, 0, 0.3)',
        background: `url(${ episodeImage }) center center fixed`,
        backgroundSize: 'cover',
        position: 'relative',
        boxShadow: '2px 9px 33px 0px rgba(0,0,0,0.75)',
        width: '100%',
    },
    content: {
        background: 'rgba(0, 0, 0, 0.4)',
        padding: '50px 100px',
        boxShadow: '0px 25px 45px 0px rgba(0,0,0,0.75)',

    },
    name: {
        fontSize: '1.8rem',
        fontWeight: '900',
        color: '#f50057',
        fontFamily: 'Indie Flower',
        textTransform: 'uppercase',
    },
    image: {
        width: '140px',
    },
    airDate: {
        color: '#f50057',
    },
    episode: {
        color: '#f50057',
    }
}));

function EpisodeDetailsTemplate({ episode }) {
    const classes = useStyles();

    return (
        <>
            {
                <>
                    <div className={classes.episodeWrapper}>
                        <div className={classes.content}>
                            <Typography className={classes.title}>Episode Details Page</Typography>
                            <Typography className={classes.name}>{episode.name}</Typography>
                            <Typography className={classes.airDate}>{episode.air_date}</Typography>
                            <Typography className={classes.episode}>{episode.episode}</Typography>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default EpisodeDetailsTemplate
