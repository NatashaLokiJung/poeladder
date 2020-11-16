// import { useContext } from "react";
// import { ladderContext } from "./contexts/LadderContext";
import LadderContextProvider from "./contexts/LadderContext";
import BG from "./img/heistbg.jpg";
import Nav from "./conponents/Nav";
import Footer from "./conponents/Footer";
import Logo from "./conponents/Logo";
import Main from "./conponents/Main";

function App() {
    // const { ladderData } = useContext(ladderContext);

    return (
        <LadderContextProvider>
            <div
                style={{
                    backgroundImage: `url(${BG})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                }}
            >
                <Logo />

                <Nav />
                <Main />

                <Footer />
            </div>
        </LadderContextProvider>
    );
}

export default App;
