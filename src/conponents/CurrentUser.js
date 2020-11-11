/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";

import Footer from "./Footer";
import User from "./User";

const CurrentUser = (props) => {
    const ui = css`
        display: flex;
        flex-direction: column;
    `;

    const { ladderData } = useContext(ladderContext);
    const [current, setCurrent] = useState(null);
    ladderData && console.log(ladderData[0].account.name);
    useEffect(() => {
        ladderData &&
            setCurrent(
                ladderData.find(
                    (ladder) => props.accountName === ladder.account.name
                )
            );
        console.log("fra currentuser", props.accountName);
    }, [props.accountName, ladderData]);
    console.log(current);

    return current ? (
        <div css={ui}>
            <h1>{current.account.name}</h1>
            <User
                rank={"Rank " + current.rank}
                name={"User: " + current.account.name}
                cname={"Character: " + current.character.name}
                cclass={"Class: " + current.character.class}
                level={"Level: " + current.character.level}
                challenges={
                    "Challenges completed: " +
                    current.account.challenges.total +
                    " out of 40"
                }
            />
            <Footer />
        </div>
    ) : null;
};

export default CurrentUser;
