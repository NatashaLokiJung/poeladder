/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import SearchAccount from "./SearchAccount";
import SelectClass from "./SelectClass";

const Nav = () => {
    const styleNav = css`
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        background: hsla(0, 0%, 30%, 0.8);
        padding: 20px;
        border-radius: 20px;
    `;
    return (
        <div css={styleNav}>
            <SelectClass />
            <SearchAccount />
        </div>
    );
};

export default Nav;
