/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";

import Footer from "./Footer";
import SelectedUser from "./SelectedUser";

const CurrentUser = (props) => {
    const ui = css`
        display: flex;
        flex-direction: column;
    `;

    const { ladderData } = useContext(ladderContext);
    const [current, setCurrent] = useState(null);

    useEffect(() => {
        ladderData &&
            setCurrent(
                ladderData.find(
                    (ladder) => props.accountName === ladder.account.name
                )
            );
    }, [props.accountName, ladderData]);

    return current ? (
        <div css={ui}>
            <Link to="../">back</Link>
            <h1>{current.account.name}</h1>
            <SelectedUser
                rank={"Rank " + current.rank}
                name={"User: " + current.account.name}
                cname={"Character: " + current.character.name}
                cclass={"Class: " + current.character.class}
                level={"Level: " + current.character.level}
                experience={"Experience: " + current.character.experience}
                challenges={
                    "Challenges completed: " +
                    current.account.challenges.total +
                    " out of 40"
                }
                online={"Online? " + current.online}
            />
            <Footer />
        </div>
    ) : null;
};

export default CurrentUser;
