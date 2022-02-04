import './CV.sass'
import profile from '../../images/profil.jpg'

function CV() {
    return (
        <>
            <h1> Mon C<span class="cv-title-span">
                urriculum</span> V<span class="cv-title-span">itae</span>
            </h1>
           
            <div id="profile-photo">
                <img src={profile}></img>
                <div id="infos">
                    <span id="infos-a">
                        Lucas
                        <br/> Schrever
                    </span>
                    <br/>
                    <span id="infos-b">
                        tel : 07 75 28 61 34
                        <br/>
                        lucaschrever@gmail.com
                    </span>
                </div>
            </div>

            <section id="about">
                <h2> À propos </h2>
                <hr/>

                <p> La prochaine étape de mon projet professionnel est le Mastère Management de la Transformation Digitale.
                    Mes grands principes sont l’efficacité en groupe de projet, la curiosité de nouvelles technologies et l’effort d’empathie pour garantir une excellente communication entre équipiers.
                </p>
            </section>
            <section id="xp">
                <h2> Expériences professionnelles </h2>
                <hr/>

                <h3> Chef de projet Heiven (<a href="https://www.iim.fr/tag/bap/">Bourse aux Projets IIM</a>, Octobre 2021/Janvier 2022) </h3>
                <p> Optimisation SEO du site Heiven.co.
                <br/> Refonte de sa navigation des pages et des collections de produits
                </p>

                <h3> Alternance Assistant Web Marketing (<a href="https://www.kyriba.fr">Kyriba France</a>, 2020/2021) </h3>
                <p> Optimisation du référencement SEO du site Kyriba français, espagnol et italien.
                <br/> Mise en ligne d'eBooks et webinaires pour ces pays avec la plateforme Wordpress et l'application marketing Salesforces Pardot. 
                </p>
                

                <h3> Stage Assistant Web Marketing (<a href="https://www.kyriba.fr">Kyriba France</a>, 2020/2021) </h3>
                <p> Audit de contenu des pages du site Kyriba français, espagnol et italien. </p>
            </section>
            <section id="training">
                <h2> Scolarité </h2>
                <hr/>

                <h3> Promo IIM 2024 Axe Développement Web (2018-2024) </h3>
                <p> Institut de l’Internet et du Multimédia 
                <br/> Pôle universitaire Léonard de Vinci, Courbevoie
                </p>

                <h3> Baccalauréat série S (2015-2018)
                <br/> Option Informatique et Sciences du Numérique
                </h3>
                <p> Lycée Alexandre Dumas, Saint-Cloud </p>
            </section>
            <section id="skills">
                <h2> Compétences </h2>
                <hr/>

                <div id="skills-list">
                    <div id="skills-1">
                        <h3> Développement front-end </h3>
                        <p> HTML
                        <br/> CSS
                        <br/> Javascript
                        </p>
                    </div>
                    <div id="skills-2">
                        <h3> Suite Adobe </h3>
                        <p> Premiere Pro
                        <br/> Illustrator
                        <br/> Photoshop
                        </p>
                    </div>
                    <div id="skills-3">
                    <h3> Langues </h3>
                        <p> Anglais : TOEFL B2
                        <br/> Espagnol : intermédiaire
                        </p>
                    </div>
                </div>
            </section>
            <section id="degree">
                <h2> Diplômes </h2>
                <hr/>
                <h3> Baccalauréat scientifique </h3>
            </section>
        </>
    )
}

export default CV;