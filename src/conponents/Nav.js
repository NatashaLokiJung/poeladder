/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import SearchAccount from "./SearchAccount";
import SelectClass from "./SelectClass";
import navImg from "../img/header.png";

const Nav = () => {
    const styleNav = css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    `;

    const navContent = css`
        width: 100vw;
        padding: 20px 0 30px 0;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        background: linear-gradient(
            0deg,
            rgba(163, 141, 109, 0) 0%,
            rgba(0, 0, 0, 0.7708217075892857) 100%
        );
    `;
    return (
        <div css={styleNav}>
            <img src={navImg} alt="navigation header"></img>
            <div css={navContent}>
                <SelectClass />
                <SearchAccount />
            </div>
        </div>
    );
};

export default Nav;
