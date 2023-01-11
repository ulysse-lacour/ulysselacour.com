<template>
  <main>
    <!-- Preload fonts -->
    <div
      class="font_preload"
      style="
        opacity: 0;
        user-select: none;
        pointer-events: none;
        position: absolute;
        top: 0;
        -webkit-transform: translateY(-100%);
        transform: translateY(-100%);
      "
      role="none presentation"
    >
      <span style="font-family: 'I'"></span>
      <span style="font-family: 'Outfit'"></span>
      <span style="font-family: 'Director'"></span>
      <span style="font-family: 'Typefesse'"></span>
      <span style="font-family: 'Typefesse-full'"></span>
    </div>
    <!-- Homepage -->
    <div class="page_container">
      <Params />
      <SectionHero />
    </div>
  </main>
</template>

<script>
import Params from './Params/index.vue'
import SectionHero from './SectionHero/index.vue'

export default {
  components: {
    Params,
    SectionHero
  },

  data() {
    return {
      language: 'en'
    }
  },

  fetch() {
    if (process.server) {
      this.language = this.$nuxt.context.req.headers['accept-language']
    }
  },

  head() {
    return {
      title: this.$config.app.title + this.$config.app.titleSeparator + 'home',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$config.app.description
        }
      ]
    }
  },

  mounted() {
    this.getLanguage()
  },

  beforeDestroy() {},

  methods: {
    getLanguage() {
      let languageStored = localStorage.getItem('language')
      if (languageStored == null) {
        this.language.slice(0, 2) === 'fr'
          ? (languageStored = 'french')
          : (languageStored = 'english')
      }
      this.$store.commit('language/ChangeLanguage', languageStored)
    }
  }
}
</script>

<style scoped>
.page_container {
  overflow-x: hidden;
}
</style>
