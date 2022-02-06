import ProjectCard from '../../components/projectCard/projectCard'
import './Projects.sass'

function Project() {
    return (
        <>
            <h1>Mes projets</h1>
            
            <div id="projects-grid">    {/* Liste qui récupère le composant template répété de la carte de projet */}
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
            </div>
        </>
    )
}

export default Project;