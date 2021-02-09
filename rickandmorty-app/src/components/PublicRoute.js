import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../utils/oauth';

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
    return (
        <Route {...rest} render={props => (
            isLogin() && restricted ?
                <Redirect to="/allepisodes" />
                : <Component {...props} />
        )} />
    );
};

export default PublicRoute;