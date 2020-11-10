/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import bgFrame from "../img/dealbackground.png";

const User = ({ rank, name, cname, level, cclass, challenges }) => {
    const style = css`
        width: 270px;
        height: 265px;
        color: white;
        padding: 20px;
        margin: 15px;
    `;

    return (
        <div
            style={{
                backgroundImage: `url(${bgFrame})`,
                backgroundRepeat: "no-repeat",
                // backgroundSize: "contain",
            }}
        >
            <div css={style}>
                <h2>{rank}</h2>
                <h4>{name}</h4>
                <h4>{cname}</h4>
                <h4>{level}</h4>
                <h4>{cclass}</h4>
                <h4>{challenges}</h4>
            </div>
        </div>
    );
};

export default User;
