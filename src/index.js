import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import "./index.css";
import App from "./App";
import LadderContextProvider from "./contexts/LadderContext";
import CurrentUser from "./conponents/CurrentUser";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
    <React.StrictMode>
        <LadderContextProvider>
            <Router>
                <App path="/" />
                <CurrentUser path="/:accountName" />
            </Router>
        </LadderContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
