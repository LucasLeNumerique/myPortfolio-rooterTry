import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from './components/footer/footer'

function App() {
    return (
        <>
        <Header />

        <div id="Container">
            <Outlet />
        </div>

        <Footer />
        </>
    )
}

export default App;