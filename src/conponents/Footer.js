/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import myFooter from "../img/footer.png";

const Footer = () => {
    const styleFooter = css`
        display: flex;
        flex-direction: column;
        padding: 20px;
        max-width: 960px;
        margin: 0 auto;
    `;

    const footerTxt = css`
        display: flex;
        flex-direction: column;
        text-align: center;
        margin: 40px 0;
        color: #a38d6d;
    `;

    const footerTxtBox = css`
        padding: 10px 0;
    `;
    return (
        <div css={styleFooter}>
            <img src={myFooter} alt="footer"></img>
            <div css={footerTxt}>
                <div css={footerTxtBox}>
                    <h3>All rights reserved © Grinding Gear Games</h3>
                </div>
                <h4>
                    This page is a personal project made by frontend developer
                    student Natasha "Natilo" Jung in november 2020.
                </h4>
                <h4>
                    The purpose of this website is training React JS, API
                    fetching and web design.
                </h4>
                <div css={footerTxtBox}>
                    <a href="https://www.pathofexile.com/" target="blank">
                        Path of Exile main site
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
