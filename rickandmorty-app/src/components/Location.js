import React, { useState, useEffect } from 'react';
import { makeStyles, Typography } from "@material-ui/core";

import CharacterCard from './CharacterCard';
import locationImage from './../assets/location-image.png';

const useStyles = makeStyles(() => ({
    title: {
        fontFamily: 'Indie Flower',
        fontSize: '2rem',
        fontWeight: '900',
        margin: '30px 0',
        color: '#f50057',
    },
    locationWrapper: {
        background: 'rgba(0, 0, 0, 0.3)',
        background: `url(${ locationImage }) center center fixed`,
        backgroundSize: 'cover',
        position: 'relative',
        boxShadow: '2px 9px 33px 0px rgba(0,0,0,0.75)',
        width: '100%',
    },
    content: {
        background: 'rgba(0, 0, 0, 0.4)',
        padding: '140px 100px',
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

function Location() {    
    useEffect(() => {       
        fetchLocation();
    }, [])

    const [location, setLocation] = useState([]);
    const [residentsId, setResidentsId] = useState([]);
    const [residents, setResidents] = useState([]);
    const classes = useStyles();

    const fetchLocation = async () => {
        console.log('fetchLocation');
        const id = window.location.pathname.split('/')[2];

        const fetchLocation = await fetch(`https://rickandmortyapi.com/api/location/${id}`);
        const location = await fetchLocation.json();
        setLocation(location);
        console.log('LOCATION');
        console.log(location);


        const residentsIdCollection = [];
        location.residents.forEach(e => {
            residentsIdCollection.push(e.split('/')[5]);
        });
        console.log(`residentsIdCollection ${residentsIdCollection}`);
        setResidentsId(residentsIdCollection);
        console.log('residents id');
        console.log(residentsId);
    
    
        const fetchResident = await fetch(`https://rickandmortyapi.com/api/character/${residentsIdCollection}`);
        const residents = await fetchResident.json();
        setResidents(residents);

    }

    return (
         <>
            {
                <>
                 <div className={classes.locationWrapper}>
                        <div className={classes.content}>
                            <Typography className={classes.title}>Location Details Page</Typography>
                            <Typography className={classes.name}>{location.name}</Typography>
                            <Typography className={classes.airDate}>{location.created}</Typography>
                            <Typography className={classes.episode}>{location.type}</Typography>
                            <Typography className={classes.episode}>{location.dimension}</Typography>
                        </div>
                        <CharacterCard character={residents} isExtended={true}/>
                    </div>
                </>
            }
        </>
    )
}

export default Location
