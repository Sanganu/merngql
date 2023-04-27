import React from "react";
import { ApolloConsumer } from "react-apollo";
// import {Redirect} from "react-router-dom";
import Auth from "../utils/auth"

export default () => (
    <ApolloConsumer>
        {client => {
            client.resetStore();
            Auth.logout();
            window.location.assign("/")
            // <Redirect to="/login" />
        }}
    </ApolloConsumer>
)