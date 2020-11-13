/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext, useState, useEffect } from "react";
import { ladderContext } from "../contexts/LadderContext";

import BG from "../img/heistbg.jpg";

import Footer from "./Footer";
import Logo from "./Logo";
import SelectedUser from "./SelectedUser";

const CurrentUser = (props) => {
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
        <div
            style={{
                backgroundImage: `url(${BG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}
        >
            <Logo />
            <div>
                <div css={linkBtn}>
                    <Link to="../">Back</Link>
                </div>
                <div css={userGradient}>
                    <SelectedUser
                        rank={"Rank " + current.rank}
                        name={"User: " + current.account.name}
                        cname={"Character: " + current.character.name}
                        cclass={"Class: " + current.character.class}
                        level={"Level: " + current.character.level}
                        experience={
                            "Experience: " + current.character.experience
                        }
                        challenges={
                            "Challenges completed: " +
                            current.account.challenges.total +
                            " out of 40"
                        }
                    />
                </div>
                <Footer />
            </div>
        </div>
    ) : null;
};

export default CurrentUser;
