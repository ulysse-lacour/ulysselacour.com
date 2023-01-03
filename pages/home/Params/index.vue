<template>
  <main>
    <div class="params_items">
      <button class="dark_or_light" @click="ToggleDarkMode">
        <svg
          class="sun_and_moon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            id="sun"
            :style="[
              $colorMode.value === 'light' ? { opacity: 1 } : { opacity: 0 }
            ]"
          >
            <path d="M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z" />
            <path d="M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z" />
            <path d="M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z" />
            <path
              d="M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z"
            />
            <path
              d="M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z"
            />
            <path d="M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z" />
            <path
              d="M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z"
            />
            <path
              d="M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z"
            />
            <path
              d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2z"
            />
          </g>
          <g
            id="moon"
            :style="[
              $colorMode.value === 'dark' ? { opacity: 1 } : { opacity: 0 }
            ]"
          >
            <path
              d="M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3zM7.46 4.92a7.93 7.93 0 0 0-1.37 1.22 8.44 8.44 0 0 0 .2 11.32A8.29 8.29 0 0 0 12.22 20h.08a8.34 8.34 0 0 0 6.78-3.49A10.37 10.37 0 0 1 7.46 4.92z"
            />
          </g>
        </svg>
      </button>
      <div class="choose_lang">
        <button
          id="lang_fr"
          :class="{
            lang_selected: $store.state.language.chosenLanguage == 'french'
          }"
        >
          &nbsp;molière&nbsp;
        </button>
        <div id="lang_pipe"></div>
        <button
          id="lang_uk"
          :class="{
            lang_selected: $store.state.language.chosenLanguage == 'english'
          }"
        >
          &nbsp;shakespeare&nbsp;
        </button>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  mounted() {
    this.LanguageSelector()
  },
  methods: {
    LanguageSelector() {
      const french = document.querySelector('#lang_fr')
      const english = document.querySelector('#lang_uk')

      french.addEventListener('click', () => {
        french.classList.add('lang_selected')
        english.classList.remove('lang_selected')
        localStorage.setItem('language', 'french')
        this.$store.commit('language/ChangeLanguage', 'french')
        setTimeout(this.HideParams, 500)
        this.$nextTick(() => {
          this.$root.$refs.EnterButton.buttonAnimation()
        })
      })
      english.addEventListener('click', () => {
        french.classList.remove('lang_selected')
        english.classList.add('lang_selected')
        localStorage.setItem('language', 'english')
        this.$store.commit('language/ChangeLanguage', 'english')
        setTimeout(this.HideParams, 500)
        this.$nextTick(() => {
          this.$root.$refs.EnterButton.buttonAnimation()
        })
      })
    },

    ToggleDarkMode() {
      this.$colorMode.value === 'light'
        ? (this.$colorMode.preference = 'dark')
        : (this.$colorMode.preference = 'light')
      setTimeout(this.HideParams, 250)
    }
  }
}
</script>

<style scoped>
.params_items {
  z-index: 2;
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
  font-family: 'Outfit';
  font-weight: 200;
  color: var(--color);
}

.dark_or_light {
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  background-color: var(--bg);
  border: 1px var(--color) solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

.sun_and_moon {
  width: 1.25rem;
  height: 1.25rem;
  stroke: var(--color);
  fill: var(--color);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

.dark_or_light:hover {
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

.dark_or_light:hover > .sun_and_moon {
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

#sun,
#moon {
  -moz-transition: opacity 0.25s;
  -ms-transition: opacity 0.25s;
  -o-transition: opacity 0.25s;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.choose_lang {
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  border: 1px var(--color) solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  background-color: var(--bg);
}

#lang_fr,
#lang_uk {
  width: 9rem;
  font-size: 1.5rem;
  font-weight: 200;
  line-height: 1.5rem;
  padding-bottom: 0.25rem;
  cursor: pointer;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#lang_pipe {
  width: 1px;
  height: 1.75rem;
  background-color: var(--color);
}

#lang_uk {
  border-top-right-radius: 30px;
  -webkit-border-top-right-radius: 30px;
  -moz-border-top-right-radius: 30px;
  -khtml-border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  -webkit-border-bottom-right-radius: 30px;
  -moz-border-bottom-right-radius: 30px;
  -khtml-border-bottom-right-: 30px;
  margin-right: -0.44rem;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

#lang_fr {
  border-top-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;
  -moz-border-top-left-radius: 30px;
  -khtml-border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  -webkit-border-top-left-radius: 30px;
  -moz-border-top-left-radius: 30px;
  -khtml-border-top-left-radius: 30px;
  margin-left: -0.44rem;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

.lang_selected {
  background-color: var(--color);
  color: var(--bg);
  pointer-events: none;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

/* SAFARI SPECIFIC RULES */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
  }
}
</style>
