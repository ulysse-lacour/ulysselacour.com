<template>
  <section>
    <h2 v-if="$store.state.language.chosenLanguage == 'english'" id="intro">
      WHO AM I ?
    </h2>
    <h2 v-if="$store.state.language.chosenLanguage == 'french'" id="intro">
      QUI SUIS-JE ?
    </h2>
    <Name />
    <div
      class="bio"
      :style="[
        $store.state.language.chosenLanguage == 'english'
          ? { display: 'block' }
          : { display: 'none' }
      ]"
    >
      <div id="bio_intro" class="bio_text js-scroll slide-left">
        I have worked in the music industry for nearly 8 years before becoming a
        developer.
      </div>
      <div id="bio_asso" class="bio_text js-scroll slide-left">
        First in an association «<span style="font-style: italic"
          >&nbsp;Vous n’avez rien contre la jeunesse ?&nbsp;</span
        >» I’ve founded. We use to organise concerts and exhibitions to promote
        youth creations.
      </div>
      <div id="bio_music" class="bio_text js-scroll slide-left">
        Then in the company
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://cultplace.fr/"
          >Cultplace</a
        >
        for 5 years as a producer and an art director. I was in charge of two
        venues :
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lapetitehalle.com/"
          >La&nbsp;Petite&nbsp;Halle</a
        >
        (jazz, world music) and
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://larotondestalingrad.com/"
          >La&nbsp;Rotonde</a
        >
        (electronic music).
      </div>
      <div id="bio_intro" class="bio_text js-scroll slide-left">
        During 2020-2021
        <span class="double_word" style="width: 170px"
          ><span class="yes">because of</span>
          <span class="no">thanks to</span>
        </span>
        a tiny little virus I’ve been unable to organise concerts for a year and
        a half which allowed me to focus on my other passion : computers.
      </div>
      <div id="bio_formation" class="bio_text js-scroll slide-left">
        I started to learn web development in march 2020. First through online
        ressources like
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://openclassrooms.com/fr/"
          >OpenClassrooms</a
        >
        python courses and Harvard’s
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0"
          >CS50</a
        >
        (Introduction to Computer Science) and then I attended intensive courses
        at the
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.epitech.eu/"
          >Epitech</a
        >
        engineer school (<a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coding-academy.fr/code-go-specialisation/"
          >Dev/Code&nbsp;&amp;&nbsp;Go</a
        >). Followed by an internship in
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rendr.fr/"
          >Rendr</a
        >
        entreprise as full stack web developer.
      </div>
      <div id="bio_recap" class="bio_text js-scroll slide-left">
        Beginning as a self-taught developer and Epitech’s pedagogy has given me
        a very transversal knowledge of web development and allowed me to have
        strong fundamentals in back-end and front-end, as well as a quick and
        efficient learning ability.
      </div>
      <div id="bio_conclu" class="bio_text js-scroll slide-left">
        I’m now fully dedicated to programming and looking for web development
        freelance missions either teleworking or in Paris area.
      </div>
    </div>

    <div
      class="bio"
      :style="[
        $store.state.language.chosenLanguage == 'french'
          ? { display: 'block' }
          : { display: 'none' }
      ]"
    >
      <div id="bio_intro" class="bio_text js-scroll slide-left">
        J’ai travaillé dans le monde de la musique pendant près de 8 ans avant
        de devenir dévelopeur.
      </div>
      <div id="bio_asso" class="bio_text js-scroll slide-left">
        Au départ au sein d’une association «<span style="font-style: italic"
          >&nbsp;Vous n’avez rien contre la jeunesse ?&nbsp;</span
        >» avec laquelle nous organisions des concerts et expositions afin de
        mettre en avant la jeune création.
      </div>
      <div id="bio_music" class="bio_text js-scroll slide-left">
        Puis au sein de l’entreprise
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://cultplace.fr/"
          >Cultplace</a
        >
        où j’ai passé 5 ans en tant que producteur et programmateur pour
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.lapetitehalle.com/"
          >La&nbsp;Petite&nbsp;Halle</a
        >
        de la Villette (jazz, musique du monde) et
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://larotondestalingrad.com/"
          >La&nbsp;Rotonde</a
        >
        de Stalingrad (musiques électroniques).
      </div>
      <div id="bio_intro" class="bio_text js-scroll slide-left">
        En 2020 et 2021
        <span class="double_word" style="width: 142px"
          ><span class="yes">à cause d’</span> <span class="no">grâce à</span>
        </span>
        un petit virus de rien du tout j’ai été au chômage forcé durant un an et
        demi. Ce qui m’a permis de me consacrer pleinement à mon autre passion :
        l’informatique.
      </div>
      <div id="bio_formation" class="bio_text js-scroll slide-left">
        J’ai débuté ma formation en Mars 2020. Tout d’abord via les cours en
        ligne de
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://openclassrooms.com/fr/"
          >OpenClassrooms</a
        >
        (Python) et de
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://pll.harvard.edu/course/cs50-introduction-computer-science?delta=0"
          >Harvard</a
        >
        (CS50: Introduction to Computer Science) puis avec la formation
        intensive de l’école d’ingénieur
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://cultplace.fr/"
          >Epitech</a
        >
        (<a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.coding-academy.fr/code-go-specialisation/"
          >Dev/Code&nbsp;&amp;&nbsp;Go</a
        >) suivi d’un stage à
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.rendr.fr/"
          >Rendr</a
        >
        en tant que dévelopeur web full stack.
      </div>
      <div id="bio_recap" class="bio_text js-scroll slide-left">
        Mes débuts en autodidacte et la pédagogie d’Epitech m'ont fourni une
        connaissance très transversale du développement web me permettant
        d’avoir des bases solides en back-end et front-end ainsi qu’une capacité
        d’apprentissage rapide.
      </div>
      <div id="bio_conclu" class="bio_text js-scroll slide-left">
        Dorénavant dévelopeur web à plein temps je suis à la recherche de
        missions freelance en télétravail ou dans la région parisienne.
      </div>
    </div>
    <div class="links js-scroll slide-right">
      <div class="links_items">
        <a
          id="first_link"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/ulysse-lacour/"
          >Github</a
        >
        <a
          id="middle_link"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          :href="[
            $store.state.language.chosenLanguage == 'french'
              ? 'pdf/CV_FR.pdf'
              : 'pdf/CV_EN.pdf'
          ]"
          >CV</a
        >
        <a
          id="second_link"
          class="link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.linkedin.com/in/ulysse-lacour-4aa0a4a5/"
          >Linkedin</a
        >
      </div>
    </div>
  </section>
</template>

<script>
import Name from './Name/index.vue'

export default {
  components: {
    Name
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped>
#intro {
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 3rem;
  text-align: center;
  margin-top: 9rem;
  margin-bottom: 3rem;
}

.bio {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  width: 90vw;
}

.bio_text {
  width: 100%;
  margin: 2rem 0rem;
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 2rem;
  line-height: 2.5rem;
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
  transform: scaleX(0);
  transition: transform 0.2s;
}

.partner_link:hover::before,
.partner_link:active::before {
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
  transform: scaleX(1);
  transition: transform 0.4s;
}

.double_word {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: default;
}

.yes {
  font-style: italic;
}

.no {
  letter-spacing: 1.75px;
}

.double_word .no {
  display: none;
}

.double_word:hover .yes,
.double_word:active .yes {
  display: none;
}

.double_word:hover .no,
.double_word:active .no {
  display: inline;
}

.links {
  width: 75vw;
  margin-top: 3rem;
  margin-bottom: 0;
  border: 1px var(--color) solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  background-color: var(--bg);
  color: var(--color);
}

.links_items {
  width: 100%;
  display: flex;
  font-family: 'Outfit';
  font-size: 2rem;
  font-weight: 100;
}

.link {
  width: 33.33%;
  padding: 1rem;
  line-height: 1.5rem;
  -webkit-transition: 0.25s;
  transition: 0.25s;
  text-align: center;
}

.link:hover,
.link:active {
  background-color: var(--color);
  color: var(--bg);
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#first_link {
  border-radius: 27.5px;
  -webkit-border-radius: 27.5px;
  -moz-border-radius: 27.5px;
  -khtml-border-radius: 27.5px;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
}

#middle_link {
  border-left: 1px var(--color) solid;
}

#second_link {
  border-left: 1px var(--color) solid;
  border-radius: 27.5px;
  -webkit-border-radius: 27.5px;
  -moz-border-radius: 27.5px;
  -khtml-border-radius: 27.5px;
  border-bottom-left-radius: 0;
  border-top-left-radius: 0;
}

@media only screen and (max-width: 440px) {
  .link {
    font-size: 1.25rem;
  }

  .links {
    width: 90vw;
  }
}

@media (min-width: 440px) and (max-width: 640px) {
  .link {
    font-size: 1.5rem;
  }
}
</style>
