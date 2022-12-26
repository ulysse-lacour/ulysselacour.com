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
    <Params />
    <div class="page_container">
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

  mounted() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style scoped>
section {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
