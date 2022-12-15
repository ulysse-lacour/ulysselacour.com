<template>
  <main>
    <Params />
    <SmoothScroll>
      <div class="page_container">
        <SectionHero />
      </div>
    </SmoothScroll>
  </main>
</template>

<script>
import Params from './Params/index.vue'
import SectionHero from './SectionHero/index.vue'
import SmoothScroll from '~/components/SmoothScroll'

export default {
  components: {
    Params,
    SectionHero,
    SmoothScroll
  },

  data() {
    return {
      scroll: null
    }
  },

  head() {
    return {
      title:
        this.$config.app.title +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate,

      meta: [
        {
          hid: 'description',
          firstName: 'description',
          content: this.$config.app.description
        }
      ]
    }
  },

  mounted() {
    this.locomotiveScrollInit()
    this.waitForKeyframesEnded()
  },

  beforeDestroy() {},

  methods: {
    locomotiveScrollInit() {
      this.scroll = new this.$LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        getDirection: true
      })
      this.scroll.stop()
    },

    waitForKeyframesEnded() {
      const drawing = document.querySelector('.path')
      // const params = document.querySelector('.params')
      drawing.addEventListener('animationend', () => {
        this.scroll.update()
        this.scroll.start()
      })
    }
  }
}
</script>

<style scoped>
[data-scroll-section] {
  height: 100vh;
}
[data-scroll-section] {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: xx-large;
}
</style>
