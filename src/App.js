import { Outlet, NavLink, Link } from "react-router-dom";
import './App.sass'

function App() {
    return (
        <>
            <nav>
                <ul id="nav-links">
                    <li> 
                        <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                        to="/"
                        exact="true">
                        Accueil
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                        to="/projets">
                        Projets
                        </NavLink> 
                    </li>
                    <li> 
                        <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                        to="/curriculum-vitae" >
                        CV
                        </NavLink> 
                    </li>
                </ul>

                <div id="logo-frame">
                    <Link className="logo" to="/">
                        Luc•App
                    </Link>
                </div>
                
                <ul id="socials">
                    <li>
                        <a id="linkedin" href="https://www.linkedin.com/in/lucas-schrever/"><i class="fas fa-arrow-right"></i > Linkedin</a>
                    </li>
                    <li>
                        <a id="instagram" href="https://www.instagram.com/lucasschrever/"><i class="fas fa-arrow-right"></i> Instagram</a>
                    </li>
                </ul>
            </nav>

            <div id="Container">
                <Outlet />
            </div>
        </>
    )
}

export default App;