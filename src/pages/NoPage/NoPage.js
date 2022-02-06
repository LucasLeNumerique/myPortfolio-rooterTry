import { Link } from "react-router-dom";
import './NoPage.sass'

function NoPage() {
    return (
        <>
            <h1> Oups ! Il semblerait que vous ayez inséré un lien URL inexistant ! </h1>
            <h2> Pour les habitués, c'est une erreur 404 </h2>

            <p> Laissez-moi vous raccompagner vers le <Link className="from-404-to-home" to='/' exact="true">Menu</Link> !

            </p>
        </>
    )
}

export default NoPage;