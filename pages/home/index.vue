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

<style scoped></style>
