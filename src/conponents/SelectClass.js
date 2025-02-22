/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext, useState } from "react";
import { ladderContext } from "../contexts/LadderContext";

const SelectClass = () => {
    const { gameClass, setGameClass } = useContext(ladderContext);
    const [bla, setBla] = useState("none");

    console.log(bla);
    console.log(gameClass);

    // useEffect(() => {
    //     if (gameClass) {
    //         const result = data.entries.filter(
    //             (entry) => entry.character.class === gameClass
    //         );
    //         console.log(result);
    //     }
    // }, [gameClass]);

    const styleClass = css`
        display: flex;
        flex-direction: column;
        width: 400px;
    `;

    const styleSelectClass = css`
        width: 300px;
        height: 2em;
        border-radius: 2px;
        border: none;
        position: relative;
        background: #6d6a65;
        color: white;
    `;
    return (
        <div css={styleClass}>
            <label>
                <h5>Sort by class:</h5>
            </label>
            <select
                css={styleSelectClass}
                id="characterClass"
                onChange={(e) => {
                    setGameClass(e.target.value);
                    setBla(e.target.value);
                }}
            >
                <option value="All">All classes</option>
                <option value="Ascendant">Ascendant</option>
                <option value="Assassin">Assassin</option>
                <option value="Berserker">Berserker</option>
                <option value="Champion">Champion</option>
                <option value="Chieftain">Chieftain</option>
                <option value="Deadeye">Deadeye</option>
                <option value="Elementalist">Elementalist</option>
                <option value="Gladiator">Gladiator</option>
                <option value="Guardian">Guardian</option>
                <option value="Hierophant">Hierophant</option>
                <option value="Inquisitor">Inquisitor</option>
                <option value="Juggernaut">Juggernaut</option>
                <option value="Necromancer">Necromancer</option>
                <option value="Occultist">Occultist</option>
                <option value="Pathfinder">Pathfinder</option>
                <option value="Raider">Raider</option>
                <option value="Saboteur">Saboteur</option>
                <option value="Slayer">Slayer</option>
                <option value="Trickster">Trickster</option>
            </select>
        </div>
    );
};

export default SelectClass;
