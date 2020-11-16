/** @jsxImportSource @emotion/core */
import { css } from "@emotion/core";
import { useContext, useState, useEffect } from "react";
import { useLocation } from "@reach/router";
import { Link } from "@reach/router";
import ReactPaginate from "react-paginate";
import { ladderContext } from "../contexts/LadderContext";
import User from "./User";

const Home = () => {
    const { gameClass } = useContext(ladderContext);
    const PER_PAGE = 75;
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [totalEntries, setTotalEntries] = useState(0);
    const offset = currentPage * PER_PAGE;

    const [fnyf, setFnyf] = useState(null);
    const location = useLocation();
    console.log("fra home", location.pathname);

    useEffect(() => {
        fetch(
            `https://api.pathofexile.com/ladders/Heist?limit=75&offset=${offset}`,
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

    useEffect(() => {
        if (gameClass !== "none") {
            let bla = data.filter(
                (entry) => entry.character.class === gameClass
            );
            setFnyf(bla);
            //setData(bla);
        }
    }, [data, setFnyf, gameClass]);

    fnyf && console.log("fra fnyf", fnyf);
    //if (result && result.length > 1) setData(result);

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

    // const { ladderData } = useContext(ladderContext);
    const containerUser = css`
        padding: 0 30px;
        display: grid;
        grid-gap: 2px;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    `;

    return data ? (
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
