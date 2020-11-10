import { css, jsx } from "@emotion/core";

const User = ({ rank, name, level, cclass }) => {
    return (
        <div>
            <div>
                <h3>{rank}</h3>
                <h4>{name}</h4>
                <h4>{level}</h4>
                <h4>{cclass}</h4>
            </div>
        </div>
    );
};

export default User;
