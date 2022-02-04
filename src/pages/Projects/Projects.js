import ProjectCard from '../../components/projectCard/projectCard'
import './Projects.sass'

function Project() {
    return (
        <>
            <h1>Mes projets</h1>
            
            <div id="projects-grid">
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