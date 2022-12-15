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
      const letters = document.querySelectorAll('.enter_letter')
      const drawing = document.querySelector('.path')

      const initButtonAnimation = function () {
        this.buttonAnimation()
      }.bind(this)

      drawing.addEventListener('animationend', () => {
        this.$gsap.from(letters, {
          y: 5,
          duration: 1.5,
          stagger: 0.025,
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
      const drawing = document.querySelector('.path')
      const enterButton = document.querySelector('.enterButton')
      const parameters = document.querySelector('.parameters')

      drawing.classList.add('erase')

      this.$gsap.to([enterButton, parameters], {
        opacity: 0,
        duration: 0.5,
        ease: 'power1.out'
      })

      drawing.addEventListener('animationend', () => {
        this.$router.push('/contact')
      })
    }
  }
}
</script>

<style scoped>
.enterButton {
  font-family: 'Outfit';
  font-weight: 900;
  font-size: 1.5rem;
  width: 7rem;
  padding: 0.45rem 4.25rem;
  border: 1px white solid;
  border-radius: 30px;
  display: flex;
  justify-content: center;
  transition: 0.5s;
}
</style>
