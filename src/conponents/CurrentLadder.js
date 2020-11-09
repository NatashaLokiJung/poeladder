import { css } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";

const CurrentLadder = (props) => {
    const { ladderData, setLadderIdentity } = useContext(ladderContext);

    const [current, setCurrent] = useState({});
    useEffect(() => {
        ladderData &&
            setCurrent(
                ladderData.ladders.find(
                    (ladder) => props.id === ladder.shortname
                )
            );
    }, [props.id, ladderData]);

    useEffect(() => {
        setLadderIdentity(current.shortname);
    }, [current, setLadderIdentity]);
    return (
        <div>
            <h1>hej!</h1>
        </div>
    );
};

export default CurrentLadder;
