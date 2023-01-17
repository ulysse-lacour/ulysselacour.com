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
    <div class="page_container">
      <Params />
      <Skills />
      <Projects />
      <WhoAmI />
      <Illustration />
      <Bonus />
    </div>
  </main>
</template>

<script>
import Params from './Params/index.vue'
import Skills from './Skills/index.vue'
import Projects from './Projects/index.vue'
import WhoAmI from './WhoAmI/index.vue'
import Illustration from './Illustration/index.vue'
import Bonus from './Bonus/index.vue'

export default {
  components: {
    Params,
    Skills,
    Projects,
    WhoAmI,
    Illustration,
    Bonus
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
      title:
        this.$config.app.title + this.$config.app.titleSeparator + 'portfolio',

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
    this.AppearOnScroll()
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
      this.$nextTick(() => {
        this.$root.$refs.ContactButton.buttonAnimation()
        this.$root.$refs.JoinButton.buttonAnimation()
        this.$root.$refs.ContactButton.titleAnimation()
      })
    },
    showDetails(event) {
      const chevron = event.currentTarget.querySelector('a')
      const skills =
        event.currentTarget.parentNode.querySelector('.skills_list')
      if (chevron.classList[0] === 'chevron--down') {
        chevron.classList.add('chevron--up')
        chevron.classList.remove('chevron--down')
        this.$gsap.to(skills, {
          scaleY: 1,
          opacity: 1,
          ease: 'power1.out',
          duration: 0.5
        })
      } else {
        chevron.classList.add('chevron--down')
        chevron.classList.remove('chevron--up')
        this.$gsap.to(skills, {
          scaleY: 0,
          opacity: 0,
          ease: 'power1.in',
          duration: 0.25
        })
      }
    },
    AppearOnScroll() {
      const scrollElements = document.querySelectorAll('.js-scroll')

      let throttleTimer

      const throttle = (callback, time) => {
        if (throttleTimer) return

        throttleTimer = true
        setTimeout(() => {
          callback()
          throttleTimer = false
        }, time)
      }

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top

        return (
          elementTop <=
          (window.innerHeight || document.documentElement.clientHeight) /
            dividend
        )
      }

      const elementOutofView = el => {
        const elementTop = el.getBoundingClientRect().top

        return (
          elementTop >
          (window.innerHeight || document.documentElement.clientHeight)
        )
      }

      const displayScrollElement = element => {
        element.classList.add('scrolled')
      }

      const hideScrollElement = element => {
        element.classList.remove('scrolled')
      }

      const handleScrollAnimation = () => {
        scrollElements.forEach(el => {
          if (elementInView(el, 1.25)) {
            displayScrollElement(el)
          } else if (elementOutofView(el)) {
            hideScrollElement(el)
          }
        })
      }

      window.addEventListener('scroll', () => {
        throttle(() => {
          handleScrollAnimation()
        }, 250)
      })
    }
  }
}
</script>

<style scoped>
.page_container {
  /* overflow-x: hidden; */
}

section {
  background-color: transparent;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
</style>
