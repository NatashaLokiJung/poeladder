import React, { createContext, useState, useEffect } from "react";

export const ladderContext = createContext();

const LadderContextProvider = (props) => {
    const [gameClass, setGameClass] = useState("none");

    // useEffect(() => {
    //     fetch("http://api.pathofexile.com/ladders/Heist?limit=75", {
    //         method: "GET",
    //     })
    //         .then((response) => response.json())
    //         .then((result) => {
    //             // setLadderData(result.entries);
    //             // console.log("fra context", result.entries);
    //         });
    // }, []);

    return (
        <ladderContext.Provider
            value={{
                gameClass,
                setGameClass,
            }}
        >
            {props.children}
        </ladderContext.Provider>
    );
};

export default LadderContextProvider;
