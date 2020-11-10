import { css } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";

const CurrentLadder = (props) => {
    const ui = css`
        background: lightblue;
    `;
    const { ladderData, setLadderIdentity } = useContext(ladderContext);

    const [current, setCurrent] = useState({});
    useEffect(() => {
        ladderData &&
            setCurrent(ladderData.find((ladder) => props.id === ladder.name));
    }, [props.id, ladderData]);

    useEffect(() => {
        setLadderIdentity(current.realm);
        console.log(current.realm);
    }, [current, setLadderIdentity]);

    return (
        <div css={ui}>
            <h1>hej</h1>
        </div>
    );
};

export default CurrentLadder;
