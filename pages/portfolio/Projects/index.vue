<template>
  <section class="projects_container">
    <transition name="fade" mode="out-in"
      ><VideoModal
        v-show="showModal"
        :video-to-show="chosenModal"
        @close-modal="showModal = false"
    /></transition>

    <h2 v-if="$store.state.language.chosenLanguage == 'english'" id="intro">
      MY WEBSITES
    </h2>
    <h2 v-if="$store.state.language.chosenLanguage == 'french'" id="intro">
      MES PROJETS
    </h2>
    <div class="projects">
      <section id="jolify">
        <div class="project_card">
          <div class="project_header">
            <div class="header_card">
              <BeforeProject
                :is-empty="true"
                :current-project="'#jolify'"
                :go-to-project="'#homeworks'"
              />
              <h2 class="project_title">JOLIFY</h2>
              <NextProject
                :is-empty="false"
                :current-project="'#jolify'"
                :go-to-project="'#homeworks'"
              />
            </div>
          </div>
          <div class="project_details">
            <div class="keywords">
              <div class="keywords_items">
                <h3 class="keyword">Django</h3>
                |
                <h3 class="keyword">Nuxt</h3>
                |
                <h3 class="keyword">GraphQL</h3>
                |
                <h3 class="keyword">Graphene</h3>
                |
                <h3 class="keyword">Apollo</h3>
                |
                <h3 class="keyword">OAuth2</h3>
                |
                <h3 class="keyword">Tailwind</h3>
                |
                <h3 class="keyword">Nginx</h3>
                |
                <h3 class="keyword">PM2</h3>
              </div>
            </div>
            <div class="description">
              <div
                v-if="$store.state.language.chosenLanguage == 'english'"
                class="description_text"
              >
                My passion for music and creating playlists led me to create
                this project.
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jolify.ulysselacour.com/"
                  >Jolify</a
                >
                is a web application allowing users to visualise and share their
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://developer.spotify.com/"
                  >Spotify</a
                >
                playlists jolified. Currently still in beta version it will soon
                be possible to create collaborative playlists and share them in
                community space.
              </div>
              <div
                v-if="$store.state.language.chosenLanguage == 'french'"
                class="description_text"
              >
                Ce projet est né de mon amour pour la musique et la création de
                playlists.
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jolify.ulysselacour.com/"
                  >Jolify</a
                >
                est une application web permettant aux utilisateurs de
                visualiser et partager leurs playlists
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://developer.spotify.com/"
                  >Spotify</a
                >
                sous une forme jolifiée. Encore en version beta il y sera
                bientôt possible de créer des playlists collaboratives et de les
                partager au sein d’un espace communautaire.
              </div>
            </div>
            <figure class="image">
              <picture>
                <img
                  data-src="/images/Jolify1.png"
                  data-idx="1"
                  class="lazyload"
                  alt="Ulysse Lacour website"
                  draggable="false"
                  @click="NextImage('Jolify', $event)"
                />
              </picture>
            </figure>
            <div class="links">
              <div class="links_items">
                <a
                  id="first_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jolify.ulysselacour.com"
                  >Site</a
                >
                <a
                  id="second_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ulysse-lacour/Jolify-back"
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="homeworks">
        <div class="project_card">
          <div class="project_header">
            <div class="header_card">
              <BeforeProject
                :is-empty="false"
                :current-project="'#homeworks'"
                :go-to-project="'#jolify'"
              />
              <h2 class="project_title">HOMEWORKS</h2>
              <NextProject
                :is-empty="false"
                :current-project="'#homeworks'"
                :go-to-project="'#cult'"
              />
            </div>
          </div>
          <div class="project_details">
            <div class="keywords">
              <div class="keywords_items">
                <h3 class="keyword">Flask</h3>
                |
                <h3 class="keyword">PostgreSQL</h3>
                |
                <h3 class="keyword">Psycopg</h3>
                |
                <h3 class="keyword">SQLAlchemy</h3>
                |
                <h3 class="keyword">jQuery</h3>
                |
                <h3 class="keyword">AJAX</h3>
                |
                <h3 class="keyword">Pillow</h3>
                |
                <h3 class="keyword">Nginx</h3>
              </div>
            </div>
            <div class="description">
              <div
                v-if="$store.state.language.chosenLanguage == 'english'"
                class="description_text"
              >
                This website was made under the art direction of
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nnnbbp.myportfolio.com/"
                  >Ninon&nbsp;Beaupere</a
                >
                and was part of an artistic installation presented to public in
                an exhibition at
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.penninghen.fr/"
                  >Penninghen</a
                >
                in June 2022. It was accessible onsite to the visitors alongside
                a printed journal. Conceived as a private club it allows the
                insiders knowing the password to see the member’s works but also
                to upload and showcase their own visuals.
              </div>
              <div
                v-if="$store.state.language.chosenLanguage == 'french'"
                class="description_text"
              >
                Ce site web a été réalisé sous la direction artistique de
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://nnnbbp.myportfolio.com/"
                  >Ninon&nbsp;Beaupere</a
                >
                et faisait parti d’une installation artistique exposée à
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.penninghen.fr/"
                  >Penninghen</a
                >
                en Juin 2022. Le site était accessible aux visiteurs de
                l’exposition, aux côtés d’un journal imprimé. Conçu comme un
                club privé il permet aux utilisateurs initiés et en connaissance
                du mot de passe de voir les créations des membres ainsi que de
                mettre en ligne de nouvelles oeuvres afin d’y être exposé.
              </div>
            </div>
            <figure class="image">
              <picture>
                <img
                  data-src="/images/Homeworks1.png"
                  data-idx="1"
                  class="lazyload"
                  alt="Ulysse Lacour website"
                  draggable="false"
                  @click="NextImage('Homeworks', $event)"
                />
              </picture>
            </figure>
            <div class="links">
              <div class="links_items">
                <a
                  id="first_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://homeworks.ulysselacour.com/color/all"
                  >Site</a
                >
                <button
                  id="middle_link"
                  class="link"
                  @click="ShowVideo('HOMEWORKS', $event)"
                >
                  Video
                </button>
                <a
                  id="third_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="cult">
        <div class="project_card">
          <div class="project_header">
            <div class="header_card">
              <BeforeProject
                :is-empty="false"
                :current-project="'#cult'"
                :go-to-project="'#homeworks'"
              />
              <h2 class="project_title">CULTPLACE.APP</h2>
              <NextProject
                :is-empty="false"
                :current-project="'#cult'"
                :go-to-project="'#naomi'"
              />
            </div>
          </div>
          <div class="project_details">
            <div class="keywords">
              <div class="keywords_items">
                <h3 class="keyword">Flask</h3>
                |
                <h3 class="keyword">Jinja</h3>
                |
                <h3 class="keyword">PostgreSQL</h3>
                |
                <h3 class="keyword">Psycopg</h3>
                |
                <h3 class="keyword">SQLAlchemy</h3>
                |
                <h3 class="keyword">jQuery</h3>
                |
                <h3 class="keyword">AJAX</h3>
              </div>
            </div>
            <div class="description">
              <div
                v-if="$store.state.language.chosenLanguage == 'english'"
                class="description_text"
              >
                This web application was developed with my friend and mentor
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="#"
                  >Pierre&nbsp;Riandey</a
                >, we made a management accounting tool prototype for the
                restaurant/music venue of
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.lapetitehalle.com/"
                  >La&nbsp;Petite&nbsp;Halle</a
                >. It allows user to visualise all the data collected thanks to
                the API of
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.laddition.com/fr"
                  >L’Addition</a
                >
                and
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sowprog.com/"
                  >Sowprog</a
                >
                so the data can be analysed per shifts, hours, product or
                concert.
              </div>
              <div
                v-if="$store.state.language.chosenLanguage == 'french'"
                class="description_text"
              >
                Cette application web a été développée avec l’aide de mon ami et
                mentor
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/priandey"
                  >Pierre&nbsp;Riandey</a
                >, nous avons réalisé un prototype d’outil de gestion de
                comptabilité du restaurant/salle de concert de
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.lapetitehalle.com/"
                  >La&nbsp;Petite&nbsp;Halle</a
                >. Il permet de visualiser toutes les datas de l’établissement
                obtenues grâce aux API de
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.laddition.com/fr"
                  >L’Addition</a
                >
                et de
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.sowprog.com/"
                  >Sowprog</a
                >. Il est ainsi possible de faire de l’analyse de données par
                service, plage horaire, produit ou concert.
              </div>
            </div>
            <figure class="image">
              <picture>
                <img
                  data-src="/images/Cultplace1.png"
                  data-idx="1"
                  class="lazyload"
                  alt="Ulysse Lacour website"
                  draggable="false"
                  @click="NextImage('Cultplace', $event)"
                />
              </picture>
            </figure>
            <div class="links">
              <div class="links_items">
                <a
                  id="first_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.notion.so/cultplace-app-0b57d24ad2424260b45ec586fa2f1ea8"
                  >Notion</a
                >
                <button
                  id="middle_link"
                  class="link"
                  @click="ShowVideo('CULTPLACE.APP', $event)"
                >
                  Video
                </button>
                <a
                  id="third_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/ulysse-lacour/Cultplace-app "
                  >Github</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="naomi">
        <div class="project_card">
          <div class="project_header">
            <div class="header_card">
              <BeforeProject
                :is-empty="false"
                :current-project="'#naomi'"
                :go-to-project="'#cult'"
              />
              <h2 class="project_title">NAOMI</h2>
              <NextProject
                :is-empty="true"
                :current-project="'#naomi'"
                :go-to-project="'#naomi'"
              />
            </div>
          </div>
          <div class="project_details">
            <div class="keywords">
              <div class="keywords_items">
                <h3 class="keyword">Html</h3>
                |
                <h3 class="keyword">Css</h3>
                |
                <h3 class="keyword">Javascript</h3>
                |
                <h3 class="keyword">Jquery</h3>
              </div>
            </div>
            <div class="description">
              <div
                v-if="$store.state.language.chosenLanguage == 'english'"
                class="description_text"
              >
                This website was designed by and belongs to my&#32;&#32;
                <span class="double_word" style="width: 82px"
                  ><span class="partner">partner</span>
                  <span class="wifey">wifey</span></span
                >&#32;&#32;:&#32;
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://naomiprostkasbi.com/"
                >
                  Naomi&nbsp;Prost-Kasbi</a
                >. The best art director, illustrator and independent designer I
                know, as objectively as it can be of course. I have worked on
                the front-end of this project, one of my favorites and first
                one.
              </div>
              <div
                v-if="$store.state.language.chosenLanguage == 'french'"
                class="description_text"
              >
                Ce site regroupe les travaux de ma&#32;&#32;
                <span class="double_word" style="width: 115px"
                  ><span class="partner">partenaire</span>
                  <span class="wifey">dulcinée</span> </span
                >&#32;&#32;:&#32;
                <a
                  class="partner_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://naomiprostkasbi.com/"
                >
                  Naomi&nbsp;Prost-Kasbi</a
                >. La meilleure directrice artistique, illustratrice et
                graphiste indépendante, en toute objectivité bien sûr. J’ai
                participé au front-end de ce projet qui est un de mes tout
                premiers.
              </div>
            </div>
            <figure class="image">
              <picture>
                <img
                  data-src="/images/Nao1.png"
                  data-idx="1"
                  class="lazyload"
                  alt="Ulysse Lacour website"
                  draggable="false"
                  @click="NextImage('Nao', $event)"
                />
              </picture>
            </figure>
            <div class="links">
              <div class="links_items">
                <a
                  id="unique_link"
                  class="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://naomiprostkasbi.com/"
                  >Site</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="partners">
      <Partners />
      <ContactButton />
    </div>
  </section>
</template>

<script>
import VideoModal from './VideoModal/index.vue'
import ContactButton from './ContactButton/index.vue'
import BeforeProject from './BeforeProject/index.vue'
import NextProject from './NextProject/index.vue'
import Partners from './Partners/index.vue'

export default {
  components: {
    VideoModal,
    ContactButton,
    BeforeProject,
    NextProject,
    Partners
  },

  data() {
    return {
      chosenModal: '',
      showModal: false
    }
  },

  mounted() {
    this.buttonAnimation()
  },

  created() {
    this.$root.$refs.JoinButton = this
  },

  methods: {
    ShowVideo(video, event) {
      this.showModal = true
      this.chosenModal = video
    },
    buttonAnimation() {
      const partners = document.querySelector('.partners')
      const contactButton = partners.querySelector('#contact')
      const letters = partners.querySelectorAll('.contact_letter')

      const displayQ = this.$gsap.timeline({ paused: true })
      displayQ.to(letters, {
        fontFamily: 'Typefesse',
        ease: 'none'
      })

      const hideQ = this.$gsap.timeline({ paused: true })
      hideQ.to(letters, {
        fontFamily: 'Outfit',
        ease: 'none'
      })

      contactButton.addEventListener('mouseenter', () => displayQ.play(0))
      contactButton.addEventListener('mouseleave', () => hideQ.play(0))
    },
    NextImage(project, event) {
      const projectClicked = event.target
      const projectName = project
      let index = projectClicked.dataset.idx

      if (index >= 3) index = 1
      else index++

      projectClicked.src = `/images/${projectName}${index}.png`
      projectClicked.dataset.idx = index
    }
  }
}
</script>

<style scoped>
.projects_container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.projects {
  display: flex;
  overflow-x: auto;
  overflow: hidden;
  align-items: center;
  white-space: nowrap;
  width: 95vw;
  -ms-overflow-style: none; /* IE 11 */
  scrollbar-width: none; /* Firefox 64 */
}

.projects::-webkit-scrollbar {
  display: none;
}

section {
  background-color: transparent;
  /* position: relative; */
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  width: 95vw;
}

img {
  cursor: pointer;
}

#intro {
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 3rem;
  text-align: center;
  margin-top: 6rem;
  margin-bottom: 2rem;
}

.project_card {
  position: relative;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  border: 1px var(--color) solid;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -khtml-border-radius: 15px;
  background-color: var(--bg);
  color: var(--color);
}

.project_header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 100%;
}

.header_card {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 75px;
  border-top-left-radius: 12.5px;
  border-top-right-radius: 12.5px;
  -webkit-border-top-left-radius: 12.5px;
  -moz-border-top-left-radius: 12.5px;
  -khtml-border-top-left-radius: 12.5px;
  -webkit-border-top-right-radius: 12.5px;
  -moz-border-top-right-radius: 12.5px;
  -khtml-border-top-right-radius: 12.5px;
}

.project_title {
  font-family: 'Outfit';
  font-weight: 300;
  font-size: 2rem;
  color: var(--color);
}

.project_details {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  font-family: 'Outfit';
  font-weight: 300;
  font-size: 1.5rem;
  white-space: initial;
}

.keywords,
.links,
.description,
.image {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.keywords,
.links {
  grid-column: span 2 / auto;
  width: 100%;
  text-align: center;
}

.keywords {
  border-top: 1px var(--color) solid;
}

.description {
  width: 100%;
  /* border-left: 1px var(--color) solid; */
  border-top: 1px var(--color) solid;
  border-bottom: 1px var(--color) solid;
  font-weight: 100;
}

.double_word {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.partner {
  font-style: italic;
}

.wifey {
  letter-spacing: 2px;
}

.double_word .wifey {
  display: none;
}

.double_word:hover .partner,
.double_word:active .partner {
  display: none;
}

.double_word:hover .wifey,
.double_word:active .wifey {
  display: inline;
}

.keywords_items,
.description_text,
img {
  margin-top: 1rem;
  margin-bottom: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  line-height: 2rem;
}

.image {
  width: 100%;
  border-left: 1px var(--color) solid;
  border-top: 1px var(--color) solid;
  border-bottom: 1px var(--color) solid;
}

img {
  width: calc(40vw - 2rem);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

img:hover {
  -moz-transform: scale(1.02);
  -ms-transform: scale(1.02);
  -o-transform: scale(1.02);
  -webkit-transform: scale(1.02);
  transform: scale(1.02);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

.keywords_items {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-weight: 100;
  font-size: 1rem;
  line-height: 0.5rem;
  cursor: default;
}

.keyword {
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1.5rem;
  padding: 0.2rem 0.5rem;
  margin: 0.2rem 0.5rem;
}

.partner_link {
  display: inline-block;
  font-weight: 200;
  text-decoration: none;
  position: relative;
}

.partner_link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  background: var(--color);
  -webkit-transform-origin: 100% 0;
  transform-origin: 100% 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0);
  -webkit-transition: -webkit-transform 0.2s;
  -moz-transition: transform 0.2s;
  -ms-transition: transform 0.2s;
  -o-transition: transform 0.2s;
  transition: transform 0.2s;
}

.partner_link:hover::before,
.partner_link:active::before {
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  -webkit-transition: -webkit-transform 0.4s;
  -moz-transition: transform 0.4s;
  -ms-transition: transform 0.4s;
  -o-transition: transform 0.4s;
  transition: transform 0.4s;
}

.links_items {
  width: 100%;
  display: flex;
}

.link {
  width: 50%;
  padding: 1rem;
  line-height: 1.5rem;
  -webkit-transition: 0.25s;
  -moz-transition: 0.25s;
  -ms-transition: 0.25s;
  -o-transition: 0.25s;
  transition: 0.25s;
}

.link:hover,
.link:active {
  background-color: var(--color);
  color: var(--bg);
  -webkit-transition: 0.25s;
  -moz-transition: 0.25s;
  -ms-transition: 0.25s;
  -o-transition: 0.25s;
  transition: 0.25s;
}

#unique_link {
  width: 100%;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
}

#first_link {
  border-bottom-left-radius: 15px;
}

#second_link {
  border-left: 1px var(--color) solid;
  border-bottom-right-radius: 15px;
}

#middle_link {
  border-left: 1px var(--color) solid;
  border-right: 1px var(--color) solid;
}

#third_link {
  border-bottom-right-radius: 15px;
}

.partners {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
}

/* Responsive */
@media only screen and (max-width: 440px) {
  .projects {
    align-items: flex-start;
  }

  .project_details,
  .project_card {
    width: 300px;
  }

  .project_header {
    width: 300px;
  }

  .header_card {
    width: 292.5px;
  }

  .project_title {
    font-size: 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }

  .keywords,
  .links,
  .description,
  .image {
    width: 300px;
  }

  .image {
    border-top: 0;
  }

  img {
    width: calc(300px - 2rem);
  }

  .project_details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .keywords,
  .links,
  .description,
  .image {
    grid-column: span 2 / auto;
    margin: 0;
  }

  .keywords_items {
    font-size: 0.75rem;
    margin: 0.5rem 0.25rem;
  }

  .keyword {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0rem 0.1rem;
    margin: 0rem 0.1rem;
  }

  .description_text {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 440px) and (max-width: 640px) {
  .projects {
    align-items: flex-start;
  }

  .project_details,
  .project_card {
    width: 400px;
  }

  .project_header {
    width: 400px;
  }

  .header_card {
    width: 392.5px;
  }

  .project_title {
    font-size: 1.5rem;
    margin-left: 0;
    margin-right: 0;
  }

  .keywords,
  .links,
  .description,
  .image {
    width: 400px;
  }

  .image {
    border-top: 0;
  }

  img {
    width: calc(400px - 2rem);
  }

  .project_details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .keywords,
  .links,
  .description,
  .image {
    grid-column: span 2 / auto;
    margin: 0;
  }

  .keywords_items {
    font-size: 0.75rem;
  }

  .keyword {
    font-size: 1rem;
    line-height: 1rem;
    padding: 0.1rem 0.25rem;
    margin: 0.1rem 0.25rem;
  }

  .description_text {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
}

@media (min-width: 640px) and (max-width: 900px) {
  .projects {
    align-items: flex-start;
  }

  .project_details,
  .project_card {
    width: 600px;
  }

  .project_header {
    width: 600px;
  }

  .header_card {
    width: 592.5px;
  }

  .project_title {
    font-size: 1.75rem;
    margin-left: 0;
    margin-right: 0;
  }

  .keywords,
  .links,
  .description,
  .image {
    width: 600px;
  }

  .image {
    border-top: 0;
  }

  img {
    width: calc(600px - 2rem);
  }

  .description_text {
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  .project_details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .keywords,
  .links,
  .description,
  .image {
    grid-column: span 2 / auto;
    margin: 0;
  }
}

@media (min-width: 900px) and (max-width: 1021px) {
  .project_details,
  .project_card {
    width: 800px;
  }

  .project_header {
    width: 800px;
  }

  .header_card {
    width: 792.5px;
  }

  .keywords,
  .links {
    width: 800px;
  }

  .description,
  .image {
    width: 400px;
  }

  .image {
    width: 400px;
  }

  img {
    width: calc(400px - 2rem);
  }

  .next_project_chevron {
    left: 775px;
  }

  .before_project_chevron {
    right: 775px;
  }
}

@media (min-width: 1021px) and (max-width: 1280px) {
  .project_details,
  .project_card {
    width: 900px;
  }

  .project_header {
    width: 900px;
  }

  .header_card {
    width: 892.5px;
  }

  .keywords,
  .links {
    width: 900px;
  }

  .description,
  .image {
    width: 450px;
  }

  .image {
    width: 450px;
  }

  img {
    width: calc(450px - 2rem);
  }

  .next_project_chevron {
    left: 875px;
  }

  .before_project_chevron {
    right: 875px;
  }
}
</style>
