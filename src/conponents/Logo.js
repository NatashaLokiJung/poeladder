/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import logo from "../img/heistheaderlogo.png";

const Logo = () => {
    const containerLogo = css`
        display: flex;
        justify-content: center;
        padding: 30px;
    `;
    return (
        <div css={containerLogo}>
            <img src={logo} alt="Logo" />
        </div>
    );
};

export default Logo;
