import { Outlet, Link } from "react-router-dom";
import './App.sass'

const RouterLink = {
    textDecoration: 'none',
    color: 'white',    
}

function App() {
    return (
        <>
            <nav>
                <ul>
                    <li> <Link to="/" style={RouterLink}>Accueil</Link> </li>
                    <li> <Link to="/projets" style={RouterLink}>Projets</Link> </li>
                    <li> <Link to="/curriculum-vitae" style={RouterLink}>CV</Link> </li>
                </ul>

                <div id="logo">Logo à venir</div>
                
                <div id="socials">RS à venir</div>
            </nav>

            <div id="Container">
                <Outlet />
            </div>
        </>
    )
}

export default App;