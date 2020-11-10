/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext } from "react";
import BG from "./img/heistbg.jpg";
import logo from "./img/heistheaderlogo.png";
import User from "./conponents/User";
import { ladderContext } from "./contexts/LadderContext";

function App() {
    const containerLogo = css`
        display: flex;
        justify-content: center;
        padding: 30px;
    `;

    const containerUser = css`
        display: grid;
        grid-gap: 10px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `;

    const { ladderData } = useContext(ladderContext);

    return ladderData ? (
        <div
            style={{
                backgroundImage: `url(${BG})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
            }}
        >
            <div css={containerLogo}>
                <img src={logo} alt="Logo" />
            </div>

            <div css={containerUser}>
                {ladderData.map((entries) => (
                    <Link
                        to={"/?accountName=" + entries.account.name}
                        style={{ textDecoration: "none" }}
                    >
                        <User
                            rank={"Rank " + entries.rank}
                            name={"User: " + entries.account.name}
                            cname={"Character: " + entries.character.name}
                            cclass={"Class: " + entries.character.class}
                            level={"Level: " + entries.character.level}
                            challenges={
                                "Challenges completed: " +
                                entries.account.challenges.total +
                                " out of 40"
                            }
                        />
                    </Link>
                ))}
            </div>
        </div>
    ) : null;
}

export default App;
