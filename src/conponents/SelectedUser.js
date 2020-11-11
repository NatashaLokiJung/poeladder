/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

const SelectedUser = ({
    rank,
    name,
    cname,
    level,
    experience,
    cclass,
    challenges,
    online,
}) => {
    const style = css`
        width: 270px;
        height: 265px;
        color: white;
        padding: 20px;
        margin: 15px;
    `;
    return (
        <div>
            <div css={style}>
                <h2>{rank}</h2>
                <h4>{name}</h4>
                <h4>{cname}</h4>
                <h4>{level}</h4>
                <h4>{experience}</h4>
                <h4>{cclass}</h4>
                <h4>{challenges}</h4>
                <h4>{online}</h4>
            </div>
        </div>
    );
};

export default SelectedUser;
