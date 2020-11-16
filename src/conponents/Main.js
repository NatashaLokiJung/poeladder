import { Router } from "@reach/router";
import CurrentUser from "../conponents/CurrentUser";
import Home from "../conponents/Home";

const Main = () => {
    return (
        <Router>
            <Home path="/" />
            <CurrentUser path="/:accountName" />
        </Router>
    );
};

export default Main;
