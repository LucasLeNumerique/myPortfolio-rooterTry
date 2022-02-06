import './header.sass'
import { NavLink, Link } from "react-router-dom"

function Header() {
    return (
        <nav>
            <ul id="nav-links">     {/* Menu qui utilise le système de Routing de ReactJS */}
                <li> 
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')}    // Condition booléenne pour styliser le l'élément titre
                    to='/'  // Redirection URL avec le Router React
                    exact="true">   {/* Paramètre qui implique la page d'erreur 404 */} 
                    Accueil
                    </NavLink> 
                </li>
                <li> 
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                    to='/projets'
                    exact="true">
                    Projets
                    </NavLink> 
                </li>
                <li> 
                    <NavLink 
                    className={({ isActive }) => (isActive ? 'active' : 'inactive')} 
                    to='/curriculum-vitae'
                    exact="true">
                    CV
                    </NavLink> 
                </li>
            </ul>

            <div id="logo-frame">
                <Link className="logo" to='/'>
                    Luc•as
                </Link>
            </div>
                
            <ul id="socials">
                <li>
                    <a id="linkedin" href="https://www.linkedin.com/in/lucas-schrever/"><i className="fas fa-arrow-right"></i > Linkedin</a>
                </li>
                <li>
                    <a id="instagram" href="https://www.instagram.com/lucasschrever/"><i className="fas fa-arrow-right"></i> Instagram</a>
                </li>
            </ul>
            </nav>         
    )
}

export default Header