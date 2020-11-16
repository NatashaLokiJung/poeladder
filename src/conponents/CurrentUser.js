/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";
import { useLocation } from "@reach/router";

import SelectedUser from "./SelectedUser";

const CurrentUser = (props) => {
    const { ladderData } = useContext(ladderContext);
    const [user, setUser] = useState(null);

    const location = useLocation();
    console.log("fra currentuser", location.pathname);

    const accountName = props.accountName;

    useEffect(() => {
        ladderData &&
            ladderData.find(
                (ladder) => props.accountName === ladder.account.name
            );
    }, [props.accountName, ladderData]);

    useEffect(() => {
        fetch(
            `http://api.pathofexile.com/ladders/Heist?accountName=${accountName}`,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((result) => {
                setUser(result.entries[0]);
            });
    }, [accountName]);

    const linkBtn = css`
        padding: 20px;
    `;

    const userGradient = css`
        display: flex;
        justify-content: center;
        padding: 40px;
        background: linear-gradient(
            0deg,
            rgba(163, 141, 109, 0) 0%,
            rgba(0, 0, 0, 0.7708217075892857) 100%
        );
    `;

    return (
        user && (
            <div>
                <div css={linkBtn}>
                    <Link to="../">Back</Link>
                </div>
                <div css={userGradient}>
                    <SelectedUser
                        rank={"Rank " + user.rank}
                        name={"User: " + user.character.name}
                        cname={"Character: " + user.character.name}
                        cclass={"Class: " + user.character.class}
                        level={"Level: " + user.character.level}
                        experience={"Experience: " + user.character.experience}
                    />
                </div>
            </div>
        )
    );
};

export default CurrentUser;
