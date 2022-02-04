import './Project.sass'

function Project() {
    return (
        <>
            <h1>Mes projets</h1>
            
            <div id="project-grid">
                <div class="project-card">
                    <h3> Projet 1 </h3>
                    <h4> Ce projet a une belle description. Mais vraiment ! </h4>
                    <a>En savoir plus</a>
                </div>
                <div class="project-card">
                    <h3> Projet 2 </h3>
                </div>
                <div class="project-card">
                    <h3> Projet 3 </h3>
                </div>
                <div class="project-card">
                    <h3> Projet 4 </h3>
                </div>
                <div class="project-card">
                    <h3> Projet 5 </h3>
                </div>
                <div class="project-card">
                    <h3> Projet 6 </h3>
                </div>
            </div>
        </>
    )
}

export default Project;