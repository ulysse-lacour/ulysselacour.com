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

      <section>
        <h1 v-if="$store.state.language.chosenLanguage == 'english'">BONUS</h1>
        <h1 v-if="$store.state.language.chosenLanguage == 'french'">BONUS</h1>
      </section>
    </div>
  </main>
</template>

<script>
import Params from './Params/index.vue'
import Skills from './Skills/index.vue'
import Projects from './Projects/index.vue'
import WhoAmI from './WhoAmI/index.vue'

export default {
  components: {
    Params,
    Skills,
    Projects,
    WhoAmI
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
    this.AppearOnScroll()
  },

  beforeDestroy() {},

  methods: {
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
section {
  min-height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
/* .title {
  text-align: center;
}

.skills {
  font-family: 'Outfit';
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-evenly;
}

.skill_card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 350px;
  text-align: center;
  transition: 0.25s;
}

#python_header {
  width: 200px;
  cursor: pointer;
}
#js_header {
  width: 220px;
  cursor: pointer;
}
#web_header {
  width: 250px;
  cursor: pointer;
}
#sql_header {
  width: 150px;
  cursor: pointer;
}

.skill_header {
  font-weight: 400;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  position: relative;
}

.skills_list {
  height: 75px;
  opacity: 0;
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1.5rem;
  -webkit-transform: scaleY(0);
  transform: scaleY(0);
  -webkit-transform-origin: top;
  transform-origin: top;
}

@media only screen and (max-width: 640px) {
}

@media (min-width: 640px) and (max-width: 1024px) {
} */
</style>
