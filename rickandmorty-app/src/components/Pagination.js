import React from 'react'

import { makeStyles, Typography } from "@material-ui/core";


const useStyles = makeStyles(() => ({
    pagination: {
        backgroundColor: 'linear-gradient(to right, #26D0CE, #1A2980)',
    },
    btn: {
        background: '#f50057',
        border: 'none',
        padding: '10px 15px',
        borderRadius: '5px',
        margin: '15px 10px',
        transition: 'transform .2s',
        fontWeight: 900,

        '&:hover': {
            transform: 'scale(1.5)',
        },
        '&:focus': {
            outline: 'none',
        }
    },
}));

function Pagination({ fetchData, info }) {
    const classes = useStyles();

    return (
        <div className={classes.pagination}>
            {
                info.prev ? (
                    <button className={classes.btn} type="button" onClick={() => fetchData(info.prev)}>
                        { info.prev}
                    </button>
                ) : (
                        <React.Fragment />
                    )
            }

            <button className={classes.btn} type="button">
                {info.current}
            </button>

            {
                info.next ? (
                    <button className={classes.btn} type="button" onClick={() => fetchData(info.next)}>
                        { info.next}
                    </button>
                ) : (
                        <React.Fragment />
                    )
            }
        </div>
    )
}

export default Pagination
