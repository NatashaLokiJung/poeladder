/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const Footer = () => {
    const styleFooter = css`
        background: grey;
        display: flex;
        justify-content: space-between;
        background: hsla(0, 0%, 30%, 0.8);
        padding: 20px;
        border-radius: 20px;
    `;
    return (
        <div css={styleFooter}>
            <div>About</div>
            <div>All rights reserved © Grinding Gear Games</div>
            <div>
                <a href="https://www.pathofexile.com/" target="blank">
                    Path of Exile
                </a>
            </div>
        </div>
    );
};

export default Footer;
