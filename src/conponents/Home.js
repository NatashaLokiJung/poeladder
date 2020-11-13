/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { Link } from "@reach/router";
import ReactPaginate from "react-paginate";
import { ladderContext } from "../contexts/LadderContext";
import User from "./User";

const Home = () => {
    const PER_PAGE = 75;
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);
    const offset = currentPage * PER_PAGE;

    useEffect(() => {
        fetch(
            `http://api.pathofexile.com/ladders/Heist?limit=75&offset=${offset}`,
            {
                method: "GET",
            }
        )
            .then((response) => response.json())
            .then((result) => {
                setData(result.entries);
                setTotalEntries(result.total);
            });
    }, [offset]);

    function handlePageClick({ selected: selectedPage }) {
        setCurrentPage(selectedPage);
    }

    const currentPageData =
        data &&
        data.slice(offset, offset + PER_PAGE).map(({ entries }) => entries);

    const pageCount = Math.ceil(totalEntries / PER_PAGE);

    const paginationStyle = css`
        display: flex;
        justify-content: center;
    `;

    const { ladderData } = useContext(ladderContext);
    const containerUser = css`
        padding: 0 30px;
        display: grid;
        grid-gap: 2px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `;

    return ladderData ? (
        <div>
            <div css={containerUser}>
                {data.map((entries) => (
                    <Link
                        to={entries.account.name}
                        style={{ textDecoration: "none" }}
                    >
                        <User
                            rank={"Rank " + entries.rank}
                            name={"User: " + entries.account.name}
                            cname={"Character: " + entries.character.name}
                            cclass={"Class: " + entries.character.class}
                            level={"Level: " + entries.character.level}
                        />
                    </Link>
                ))}
            </div>

            <div css={paginationStyle}>
                <ReactPaginate
                    previousLabel={"Previous"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    disabledClassName={"pagination__link--disabled"}
                    activeClassName={"pagination__link--active"}
                />
                {currentPageData}
            </div>
        </div>
    ) : null;
};

export default Home;
