import { css } from "@emotion/core";
import { Link } from "@reach/router";
import { useContext } from "react";
import CurrentLadder from "./conponents/CurrentLadder";
import User from "./conponents/User";
import { ladderContext } from "./contexts/LadderContext";

function App() {
    const allRooms = css`
        width: 324px;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(2, 150px);
    `;

    const boxRooms = css`
        background-color: white;
        width: 150px;
        height: 150px;
        border-radius: 30px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    `;
    const { ladderData } = useContext(ladderContext);

    return ladderData ? (
        <div>
            <header>header forsøg igen igen</header>

            <div css={allRooms}>
                {ladderData.map((entries) => (
                    <Link
                        to={"/?accountName=" + entries.account.name}
                        style={{ textDecoration: "none" }}
                    >
                        <div css={boxRooms}>
                            <User
                                rank={"Rank: " + entries.rank}
                                name={"User: " + entries.account.name}
                                level={"Level: " + entries.character.level}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    ) : null;
}

export default App;
