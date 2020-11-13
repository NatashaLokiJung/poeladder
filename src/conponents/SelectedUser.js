/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const SelectedUser = ({ rank, name, cname, level, experience, cclass }) => {
    const container = css`
        width: 550px;
        padding: 1rem;
        position: relative;
        background: linear-gradient(to right, #1a1f25, #35434f, #1a1f25);
        box-shadow: 2px 7px 40px -20px rgba(54, 54, 54, 1);
        padding: 3px;
    `;

    const uBorder = css`
        background: #222;
        box-shadow: inset 2px 7px 40px 5px rgba(0, 0, 0, 0.75);
        color: white;
        padding: 2rem;
    `;

    const uTitle = css`
        background: hsla(215, 12%, 31%, 0.73);
        padding: 20px 10px;
    `;

    const uInfo = css`
        background: hsla(213, 12%, 49%, 0.48);
        padding: 20px 10px;
    `;
    const uInfoOdd = css`
        background: hsla(213, 12%, 49%, 0.48);
    `;

    return (
        <div css={container}>
            <div css={uBorder}>
                <h2>{rank}</h2>
                <div css={uTitle}>
                    <h3>{name}</h3>
                </div>
                <div css={uInfo}>
                    <h4 css={uInfoOdd}>{cname}</h4>
                    <h4>{cclass}</h4>
                    <h4 css={uInfoOdd}>{level}</h4>
                    <h4>{experience}</h4>
                </div>
            </div>
        </div>
    );
};

export default SelectedUser;
