<template>
  <section>
    <div v-if="$store.state.language.chosenLanguage == 'english'" class="hider">
      <h1 class="title">FULL-STACK WEB DEVELOPER</h1>
    </div>
    <div v-if="$store.state.language.chosenLanguage == 'french'" class="hider">
      <h1 class="title">DEVELOPEUR WEB FULL-STACK</h1>
    </div>

    <div class="skills">
      <div class="skill_container">
        <div id="python_card" class="skill_card" @click="showDetails">
          <div id="python_header" class="skill_header">
            <h2 style="margin-left: 1.5rem">Python</h2>
            <AnimatedChevron />
          </div>
          <h3 id="python_skills" class="skills_list">
            Django, Flask & Selenium
          </h3>
          <div class="borderTopLeft"></div>
          <div class="borderBottomLeft"></div>
          <div class="borderTopRight"></div>
          <div class="borderBottomRight"></div>
        </div>
      </div>

      <div class="skill_container">
        <div id="js_card" class="skill_card" @click="showDetails">
          <div id="js_header" class="skill_header">
            <h2 style="margin-left: 1.5rem">Javascript</h2>
            <AnimatedChevron />
          </div>
          <h3 id="js_skills" class="skills_list">Nuxt, Vue, Gsap & jQuery</h3>
          <div class="borderTopLeft"></div>
          <div class="borderBottomLeft"></div>
          <div class="borderTopRight"></div>
          <div class="borderBottomRight"></div>
        </div>
      </div>

      <div class="skill_container">
        <div id="web_card" class="skill_card" @click="showDetails">
          <div id="web_header" class="skill_header">
            <h2
              v-if="$store.state.language.chosenLanguage == 'english'"
              style="margin-left: 1.5rem"
            >
              Web hosting
            </h2>
            <h2
              v-if="$store.state.language.chosenLanguage == 'french'"
              style="margin-left: 1.5rem"
            >
              Hébergement
            </h2>
            <AnimatedChevron />
          </div>
          <h3 id="web_skills" class="skills_list">
            Nginx, Gunicorn, Node.js, Webpack & PM2
          </h3>
          <div class="borderTopLeft"></div>
          <div class="borderBottomLeft"></div>
          <div class="borderTopRight"></div>
          <div class="borderBottomRight"></div>
        </div>
      </div>

      <div class="skill_container">
        <div id="sql_card" class="skill_card" @click="showDetails">
          <div id="sql_header" class="skill_header">
            <h2 style="margin-left: 1.5rem">SQL</h2>
            <AnimatedChevron />
          </div>
          <h3 id="sql_skills" class="skills_list">
            GraphQL, PostgreSQL, SQLite, MySQL & SQLAlchemy
          </h3>
          <div class="borderTopLeft"></div>
          <div class="borderBottomLeft"></div>
          <div class="borderTopRight"></div>
          <div class="borderBottomRight"></div>
        </div>
      </div>

      <div id="other_card" class="skill_card">
        <div id="other_header" class="skill_header">
          <h2>HTML, CSS & Bash</h2>
        </div>
        <!-- <h3 class="skills_list"></h3> -->
        <div class="borderTopLeft"></div>
        <div class="borderBottomLeft"></div>
        <div class="borderTopRight"></div>
        <div class="borderBottomRight"></div>
      </div>
    </div>

    <ContactButton />
  </section>
</template>

<script>
import AnimatedChevron from './AnimatedChevron/index.vue'
import ContactButton from './ContactButton/index.vue'

export default {
  components: {
    AnimatedChevron,
    ContactButton
  },

  mounted() {
    this.buttonAndTitleAnimation()
  },

  created() {
    this.$root.$refs.ContactButton = this
  },

  methods: {
    showDetails(event) {
      const chevron = event.currentTarget.querySelector('a')
      const skills =
        event.currentTarget.parentNode.querySelector('.skills_list')
      if (chevron.classList[0] === 'chevron--down') {
        chevron.classList.add('chevron--up')
        chevron.classList.remove('chevron--down')
        this.$gsap.to(skills, {
          height: 60,
          scaleY: 1,
          opacity: 1,
          ease: 'power1.out',
          duration: 0.5
        })
      } else {
        chevron.classList.add('chevron--down')
        chevron.classList.remove('chevron--up')
        this.$gsap.to(skills, {
          height: 0,
          scaleY: 0,
          opacity: 0,
          ease: 'power1.in',
          duration: 0.25
        })
      }
    },
    buttonAndTitleAnimation() {
      // Button animation
      const contactButton = document.querySelector('#contact')
      const letters = document.querySelectorAll('.contact_letter')

      const displayQ = this.$gsap.timeline({ paused: true })
      displayQ.to(letters, {
        fontFamily: 'Typefesse',
        ease: 'none'
      })

      const hideQ = this.$gsap.timeline({ paused: true })
      hideQ.to(letters, {
        fontFamily: 'Outfit',
        ease: 'none'
      })

      contactButton.addEventListener('mouseenter', () => displayQ.play(0))
      contactButton.addEventListener('mouseleave', () => hideQ.play(0))

      // Title animation
      const title = document.querySelector('.title')
      this.$gsap.from(title, {
        y: 60,
        opacity: 0,
        duration: 1
      })
    }
  }
}
</script>

<style scoped>
section {
  min-height: 101vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.hider {
  overflow: hidden;
  line-height: 2.5rem;
  margin-top: 4rem;
  margin-bottom: 6rem;
}
.title {
  font-family: 'Outfit';
  font-weight: 600;
  font-size: 3rem;
  text-align: center;
}

.email {
  height: 40px;
  width: 40px;
}

.skills {
  font-family: 'Outfit';
  width: 90vw;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
  column-gap: 4rem;
  row-gap: 2rem;
  justify-content: center;
}

.skill_container {
  height: 125px;
}
.skill_card {
  width: 330px !important;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  transition: 0.25s;
}

.skill_card:hover,
.skill_card:active {
  -webkit-transform: scale(1.05);
  transform: scale(1.05);
  transition: 0.25s;
}

/* border top & bottom */
.skill_card {
  border-top: 2px solid;
  border-bottom: 2px solid;
  border-image: linear-gradient(
      to right,
      var(--color) 5%,
      transparent 5% 95%,
      var(--color) 95%
    )
    100% 1;
}
/* border left & right */
.borderBottomLeft {
  border-left: 2px solid var(--color);
  position: absolute;
  top: 80%;
  left: 0;
  bottom: -2px;
  margin-left: -2px;
}
.borderTopLeft {
  border-left: 2px solid var(--color);
  position: absolute;
  top: -2px;
  left: 0;
  bottom: 80%;
  margin-left: -2px;
}
.borderBottomRight {
  border-right: 2px solid var(--color);
  position: absolute;
  top: 80%;
  right: 0;
  bottom: -2px;
}
.borderTopRight {
  border-right: 2px solid var(--color);
  position: absolute;
  top: -2px;
  right: 0;
  bottom: 80%;
}

#python_card,
#js_card,
#web_card {
  width: 300px;
  cursor: pointer;
}

#sql_card {
  width: 350px;
  cursor: pointer;
}

#other_card {
  cursor: default;
  margin-bottom: 2rem;
}

#python_header {
  width: 210px;
}
#js_header {
  width: 260px;
}
#web_header {
  width: 290px;
}
#sql_header {
  width: 170px;
}

#python_skills {
  max-height: 30px;
}
#js_skills {
  max-height: 30px;
}
#web_skills {
  max-height: 60px;
}
#sql_skills {
  max-height: 60px;
}

.skill_header {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 60px;
  font-weight: 400;
  font-size: 2rem;
}

.skills_list {
  height: 0;
  opacity: 0;
  font-weight: 100;
  font-size: 1.5rem;
  line-height: 1.75rem;
  margin-bottom: 0.5rem;
  transform: scaleY(0);
  transform-origin: top;
}

@media only screen and (max-width: 640px) {
}

@media (min-width: 640px) and (max-width: 1024px) {
}
</style>
