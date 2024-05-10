import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ component: Component, ...rest }) => {
    const ecookie = Cookies.get('user_name');

    return (
        <Route
            {...rest}
            render={props =>
                ecookie ? (
                    <Component {...props} />
                ) : (
                    <Redirect to="/signin" />
                )
            }
        />
    );
};

export default ProtectedRoute;
