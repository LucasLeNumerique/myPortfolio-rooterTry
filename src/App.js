import { Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Footer from './components/footer/footer'

function App() {
    return (
        <>
        <Header />      {/* Récupération du composant du menu */}

        <div id="Container">
            <Outlet />      {/* Injection de page (ou composant) en fonction de la requête de l'URL : cf index.js */}
        </div>

        <Footer />      {/* Récupération du composant de la section de fin */}
        </>
    )
}

export default App;