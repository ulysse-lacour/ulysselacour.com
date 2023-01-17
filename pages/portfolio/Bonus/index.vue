<template>
  <section id="bonus">
    <div v-if="$store.state.language.chosenLanguage == 'english'" id="intro">
      Thanks for scrolling that far.
    </div>
    <div v-if="$store.state.language.chosenLanguage == 'french'" id="intro">
      Merci d'être arrivé jusqu'ici.
    </div>
    <div class="thanks">
      <div
        v-if="$store.state.language.chosenLanguage == 'english'"
        class="thanks_text"
      >
        As a bonus here are my favorites playlists to work with :
      </div>
      <div
        v-if="$store.state.language.chosenLanguage == 'french'"
        class="thanks_text"
      >
        En bonus voici mes morceaux préférés pour travailler :
      </div>

      <div
        v-if="$store.state.language.chosenLanguage == 'english'"
        class="playlists"
      >
        <a
          class="playlist"
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/playlist/643XSQTnOVEpy79SaCHL2n?si=a2dbba04e3b74110"
          >DEEP THINKING</a
        >

        <a
          class="playlist"
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/playlist/0Sy2FekTmarSS9SAlFl73N?si=018793d988ef49d4"
          >MOTIVATE ME</a
        >
      </div>

      <div
        v-if="$store.state.language.chosenLanguage == 'french'"
        class="playlists"
      >
        <a
          class="playlist"
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/playlist/643XSQTnOVEpy79SaCHL2n?si=a2dbba04e3b74110"
          >APAISANT</a
        >

        <a
          class="playlist"
          target="_blank"
          rel="noopener noreferrer"
          href="https://open.spotify.com/playlist/0Sy2FekTmarSS9SAlFl73N?si=018793d988ef49d4"
          >MOTIVANT</a
        >
      </div>
    </div>
    <div class="credit">
      <div class="credit_text">
        Illustrations :
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://naomiprostkasbi.com/"
        >
          Naomi&nbsp;Prost-Kasbi</a
        >
      </div>
      <div
        v-if="$store.state.language.chosenLanguage == 'english'"
        class="credit_text"
      >
        Fonts :
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.fontshare.com/fonts/outfit"
          >Outfit</a
        >
        /
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://velvetyne.fr/fonts/typefesse/"
          >Typefesse</a
        >
        /
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://velvetyne.fr/fonts/degheest/"
          >Director</a
        >
      </div>
      <div
        v-if="$store.state.language.chosenLanguage == 'french'"
        class="credit_text"
      >
        Typographies :
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.fontshare.com/fonts/outfit"
          >Outfit</a
        >
        /
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://velvetyne.fr/fonts/typefesse/"
          >Typefesse</a
        >
        /
        <a
          class="partner_link"
          target="_blank"
          rel="noopener noreferrer"
          href="https://velvetyne.fr/fonts/degheest/"
          >Director</a
        >
      </div>
    </div>
  </section>
</template>

<script>
export default {
  components: {},

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

.thanks,
.credit {
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  align-items: center;
  width: 90vw;
}

.credit {
  margin-top: 3rem;
  margin-bottom: 6rem;
}

.credit_text {
  width: 100%;
  margin-top: 1rem;
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 2rem;
  text-align: center;
}

.thanks_text {
  width: 100%;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 2rem;
  line-height: 2.5rem;
  text-align: center;
}

.partner_link {
  display: inline-block;
  font-weight: 100;
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

.playlists {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-bottom: 2rem;
}

.playlist {
  display: flex;
  justify-content: center;
  width: 14rem;
  margin: 1rem 1rem;
  padding: 0.4rem 1rem;
  font-family: 'Outfit';
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border: 1px var(--color) solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  background-color: var(--bg);
  color: var(--color);
  -moz-transition: 0.25s;
  -ms-transition: 0.25s;
  -o-transition: 0.25s;
  -webkit-transition: 0.25s;
  transition: 0.25s;
}

.playlist:hover,
.playlist:active {
  -moz-transform: scale(1.025);
  -ms-transform: scale(1.025);
  -o-transform: scale(1.025);
  -webkit-transform: scale(1.025);
  transform: scale(1.025);
  font-size: 1.55rem;
  -moz-transition: 0.35s;
  -ms-transition: 0.35s;
  -o-transition: 0.35s;
  -webkit-transition: 0.35s;
  transition: 0.35s;
}

@media only screen and (max-width: 640px) {
}

@media (min-width: 640px) and (max-width: 1024px) {
}

/* Safari specific */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .playlist:hover,
    .playlist:active {
      font-size: 1.5rem;
    }
  }
}
</style>
