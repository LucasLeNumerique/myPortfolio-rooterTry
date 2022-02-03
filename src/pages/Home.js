import iim from '../images/iim.png'

function Home() {
    return (
        <>
            <h1> Bienvenue sur mon portfolio ! </h1>

                <h2> Mon nom est Lucas Schrever </h2>

                    <p> Le territoire du numérique est bien étendu pour moi ! C'est pour cela que je ne cesse d'explorer ses possibilités.
                        Le développement web, le marketing digital, le design graphique et le montage vidéo sont des zones d'intérêt principales.
                    <br/>
                        Mon objectif d'avenir est de guider une équipe sur un projet digital ;
                        Je souhaite la rapprocher avec son client pour mener à bien le travail collectif.
                    </p>

                <h2> Actualités </h2>

                    <div class="img-frame">
                        <img src={iim} alt="Logo école du digital IIM" />
                        <small>Logo IIM version orange</small>
                    </div>

                    <p> En 3e année à l'Institut de l'Internet et du Multimédia, je fais partie de la promo 2024 spécialisée en développement web.
                        Pour me former dans la gestion de projet, je souhaite m'orienter vers un mastère Management de la Transformation Digitale (MTD) possible à l'IIM.
                    </p>
        </>
    )
}

export default Home;