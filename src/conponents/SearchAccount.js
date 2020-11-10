/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";

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
    `;
    const searchBtn = css`
        cursor: pointer;
        position: absolute;
        margin-left: -3.5em;
        margin-top: 0.4em;
        border: none;
        background-color: transparent;
    `;
    return (
        <div css={styleSearch}>
            <label for="searchbar">
                <h5>Search:</h5>
            </label>
            <input
                css={searchInput}
                type="text"
                id="searchbar"
                placeholder="Search character ..."
            ></input>
            <button css={searchBtn} type="submit" id="searchButton">
                Send
            </button>
        </div>
    );
};

export default SearchAccount;
