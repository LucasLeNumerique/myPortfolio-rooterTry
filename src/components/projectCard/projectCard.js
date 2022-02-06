import './projectCard.sass'
import projetHeiven from '../../images/proj-heiven.png'

function ProjectCard() {
    return(
        <div className="project-card">
            <h3> Heiven.co </h3>
            <h4> Management d'étudiants IIM dans le projet d'optimisation du référencement SEO du site Heiven.co </h4>
            <a> En savoir plus </a>

            <img src={projetHeiven}></img>
        </div>
    )
}

export default ProjectCard