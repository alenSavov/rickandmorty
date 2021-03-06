import React, { useState } from 'react';
import { useHistory } from "react-router";
import { FormControl, TextField, makeStyles, Typography } from '@material-ui/core';

import { logout, isLoggedIn, login } from '../utils/oauth';

const useStyles = makeStyles(() => ({
    loginWrapper: {
        background: "linear-gradient(bottom,#0250c5,#d43f8d)",
        height: "100%",
        minHeight: '91.1vh',
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginBox: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: 'rgba(0,0,0,0.5)',
        borderRadius: '60px',
        boxShadow: '0px 15px 86px -2px rgba(0,0,0,0.75)',
    },
    userBox: {
        background: "linear-gradient(bottom,#0250c5,#d43f8d)",
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        position: 'absolute',
        top: '-60px',
        left: 'calc(50 % - 50px)',
        overflow: 'hidden',
        padding: '5px',
        '& img': {
            width: '100px',
            borderRadius: '50%',
        }
    },
    title: {
        width: '100%',
        margin: '0',
        margin: '47px 0 0 0',
        textTransform: 'uppercase',
        color: '#f50057',
        fontFamily: 'Indie Flower',
        fontSize: '3rem',
    },
    form: {
        width: '60%',
        padding: '30px 0',
    },
    input: {
        width: '100%',
        color: '#f50057',

        '& label': {
            color: '#f50057',
            fontFamily: 'Indie Flower',
        }
    },
    button: {
        width: '100%',
        background: '#f50057',
        borderRadius: '30px',
        padding: '10px 0',
        border: 'none',
        margin: '20px 0',
        fontSize: '1.2rem',
        fontFamily: 'Indie Flower',
        fontWeight: '900',

        '&:hover': {
            boxShadow: '0px 5px 31px 0px rgba(0,0,0,0.75)',
            cursor: 'pointer',
            transition: '0.2s',
        },
        '&:focus': {
            outline: 'none',
        },
    },
}));

function Login() {
    const classes = useStyles();
    let history = useHistory();
    const [input, setInput] = useState({ name: "" });

    const submitHandler = e => {
        e.preventDefault();

        const username = e.target[0].value;
        if (!username) {
            alert("Please, enter a username.");
            return;
        }
        
        if (!username.match(/^[A-Za-z]+$/)) {
            alert("Please, use only alphabet characters.");
            return;
        }

        login();
        history.push({
            pathname: "/allepisodes"
        });
    }

    return (
        <div className={classes.loginWrapper}>
            <div className={classes.loginBox}>
                <div className={classes.userBox}>
                    <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" />
                </div>
                <h1 className={classes.title}>Login</h1>
                <form className={classes.form} onSubmit={submitHandler}>
                    <TextField 
                    className={classes.input} 
                    color="secondary"
                    label="username" 
                    InputProps={{
                        className: classes.input
                      }}/>
                    <input className={classes.button}
                        type="submit"
                        name="username"
                        placeholder="Login" />
                </form>
            </div>
        </div>
    )
}

export default Login;
