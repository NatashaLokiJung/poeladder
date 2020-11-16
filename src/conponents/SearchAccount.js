/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { navigate } from "@reach/router";

const SearchAccount = () => {
    const styleSearch = css`
        width: 400px;
    `;
    const searchInput = css`
        width: 350px;
        height: 2em;
        border-radius: 2px;
        border: none;
        padding: 0.5em;
        padding-right: 3em;
        position: relative;
        background: #6d6a65;
        color: white;
    `;
    const searchBtn = css`
        cursor: pointer;
        position: absolute;
        margin-left: -3.5em;
        margin-top: 0.4em;
        border: none;
        color: white;
        background-color: transparent;
    `;

    return (
        <div css={styleSearch}>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const id = event.target.elements[0].value;
                    event.target.reset();
                    navigate(`/${id}`);
                }}
            >
                <label>
                    <h5>Search username:</h5>
                </label>
                <input
                    css={searchInput}
                    type="text"
                    placeholder="Search username ..."
                ></input>
                <button css={searchBtn} type="submit">
                    Send
                </button>
            </form>
        </div>
    );
};

export default SearchAccount;
