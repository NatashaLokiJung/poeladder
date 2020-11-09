import React, { createContext, useState, useEffect } from "react";

export const ladderContext = createContext();

const LadderContextProvider = (props) => {
    const [ladderData, setLadderData] = useState();
    const [ladderIdentity, setLadderIdentity] = useState();

    useEffect(() => {
        fetch("http://api.pathofexile.com/ladders/Heist?accountName=Natilo", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((result) => {
                setLadderData(result);
                console.log("fra context", result);
            });
    }, []);

    return (
        <ladderContext.Provider
            value={{
                ladderData,
                ladderIdentity,
                setLadderIdentity,
            }}
        >
            {props.children}
        </ladderContext.Provider>
    );
};

export default LadderContextProvider;
