<template>
  <div>
    <button
      v-if="$store.state.language.chosenLanguage == 'english'"
      class="enterButton"
      @click="Transition"
    >
      <div class="enter_letter">E</div>
      <div class="enter_letter">N</div>
      <div class="enter_letter">T</div>
      <div class="enter_letter">E</div>
      <div class="enter_letter">R</div>
    </button>
    <button
      v-if="$store.state.language.chosenLanguage == 'french'"
      class="enterButton"
      @click="Transition"
    >
      <div class="enter_letter">E</div>
      <div class="enter_letter">N</div>
      <div class="enter_letter">T</div>
      <div class="enter_letter">R</div>
      <div class="enter_letter">E</div>
      <div class="enter_letter">Z</div>
    </button>
  </div>
</template>

<script>
export default {
  mounted() {
    this.buttonHighlight()
  },

  created() {
    this.$root.$refs.EnterButton = this
  },

  methods: {
    buttonHighlight() {
      const nameLetters = document.querySelector('.name_letter')

      const initButtonAnimation = function () {
        this.buttonAnimation()
      }.bind(this)

      nameLetters.addEventListener('animationend', () => {
        const letters = document.querySelectorAll('.enter_letter')
        this.$gsap.from(letters, {
          y: 5,
          duration: 1.5,
          stagger: 0.05,
          ease: 'elastic.out',
          initButtonAnimation
        })
      })
    },

    buttonAnimation() {
      const letters = document.querySelectorAll('.enter_letter')

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

      const enterButton = document.querySelector('.enterButton')
      enterButton.addEventListener('mouseenter', () => displayQ.play(0))
      enterButton.addEventListener('mouseleave', () => hideQ.play(0))
    },

    Transition() {
      const drawing = document.querySelector('.svg_container')
      const body = document.querySelector('.body_path')
      const eye = document.querySelector('#svg_eye')
      const eyeClosed = document.querySelector('#svg_eye_closed')
      const name = document.querySelector('.name')
      const nameLetters = document.querySelectorAll('.name_letter')
      const enterButton = document.querySelector('.enterButton')
      const parameters = document.querySelector('.params_items')

      const nexPage = function () {
        this.$router.push('/portfolio')
      }.bind(this)

      body.classList.remove('body_path')
      body.classList.add('erase_path')
      this.$gsap.to([eye], {
        opacity: 0,
        duration: 0.1
      })
      this.$gsap.to([enterButton, parameters], {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out'
      })
      this.$gsap.to(name, {
        lineHeight: '3rem',
        duration: 0.5,
        ease: 'power1.out'
      })
      this.$gsap.to(nameLetters, {
        scale: 1.2,
        x: 'random(-2, 2)',
        y: 'random(-5, 5)',
        ease: 'power1.out'
      })
      this.$gsap.to([eyeClosed], {
        opacity: 0,
        delay: 0.5,
        duration: 0.1
      })
      this.$gsap.to([name, drawing], {
        opacity: 0,
        delay: 1,
        duration: 0.5,
        ease: 'power1.out',
        nexPage
      })
    }
  }
}
</script>

<style scoped>
.enterButton {
  display: flex;
  justify-content: center;
  width: 7rem;
  padding: 0.4rem 4rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-family: 'Outfit';
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.5rem;
  border: 1px var(--color) solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  background-color: var(--bg);
}
</style>
