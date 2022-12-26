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
    <SmoothScroll>
      <div class="page_container">
        <Params />
        <Skills />

        <section
          data-scroll-section
          data-scroll
          data-scroll-call="SecondSection"
        >
          <h1
            v-if="$store.state.language.chosenLanguage == 'english'"
            data-scroll
            data-scroll-speed="1"
          >
            PROJECTS
          </h1>
          <h1
            v-if="$store.state.language.chosenLanguage == 'french'"
            data-scroll
            data-scroll-speed="1"
          >
            PROJET
          </h1>
        </section>

        <section data-scroll-section>
          <h1
            v-if="$store.state.language.chosenLanguage == 'english'"
            data-scroll
            data-scroll-speed="1"
          >
            WHOAMI
          </h1>
          <h1
            v-if="$store.state.language.chosenLanguage == 'french'"
            data-scroll
            data-scroll-speed="1"
          >
            BIO
          </h1>
        </section>

        <section data-scroll-section>
          <h1
            v-if="$store.state.language.chosenLanguage == 'english'"
            data-scroll
            data-scroll-speed="1"
          >
            BONUS
          </h1>
          <h1
            v-if="$store.state.language.chosenLanguage == 'french'"
            data-scroll
            data-scroll-speed="1"
          >
            BONUS
          </h1>
        </section>
      </div>
    </SmoothScroll>
  </main>
</template>

<script>
import Params from './Params/index.vue'
import Skills from './Skills/index.vue'
import SmoothScroll from '~/components/SmoothScroll'

export default {
  components: {
    Params,
    Skills,
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
    this.locomotiveScrollInit()
    this.opacityOnScroll()
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
      this.scroll.update()
      this.scroll.start()
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

    opacityOnScroll() {
      // const eyes = document.querySelectorAll('[data-img-eye]')
      // this.scroll.on('scroll', ({ limit, scroll }) => {
      //   const progress = scroll.y / limit.y
      //   console.log(0.25 + progress * 5)
      //   eyes.forEach(function (elem) {
      //     elem.style.opacity = 0.25 + progress * 5
      //   })
      // })
    }
  }
}
</script>

<style scoped>
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
