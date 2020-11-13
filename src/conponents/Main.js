/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

import { Router } from "@reach/router";
import LadderContextProvider from "../contexts/LadderContext";
import CurrentUser from "../conponents/CurrentUser";
import Home from "../conponents/Home";

const Main = () => {
    return (
        <LadderContextProvider>
            <Router>
                <Home path="/" />
                <CurrentUser path="/:accountName" />
            </Router>
        </LadderContextProvider>
    );
};

export default Main;
