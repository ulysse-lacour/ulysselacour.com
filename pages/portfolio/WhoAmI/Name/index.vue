<template>
  <div class="name js-scroll slide-left">
    <div class="name_letter">u</div>
    <div class="name_letter">l</div>
    <div class="name_letter">y</div>
    <div class="name_letter">s</div>
    <div class="name_letter">s</div>
    <div class="name_letter">e</div>
    <div id="space" class="name_letter">&nbsp;</div>
    <div class="name_letter">l</div>
    <div class="name_letter">a</div>
    <div class="name_letter">c</div>
    <div class="name_letter">o</div>
    <div class="name_letter">u</div>
    <div class="name_letter">r</div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.NameAnimation()
  },

  methods: {
    NameAnimation() {
      const nameLetters = document.querySelectorAll('.name_letter')
      const name = document.querySelector('.name')

      const animateLetters = this.$gsap.timeline({
        paused: true,
        reversed: true
      })

      animateLetters
        .to(nameLetters, {
          scale: 1.2,
          ease: 'power1.out',
          duration: 0.25
        })
        .to(
          nameLetters,
          {
            x: 'random(-2, 2)',
            y: 'random(-5, 5)',
            ease: 'none',
            duration: 0.35
          },
          '<'
        )
      name.addEventListener('mouseenter', () => animateLetters.play(0))
      name.addEventListener('mouseleave', () => animateLetters.reverse())
    }
  }
}
</script>

<style scoped>
.name {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  font-family: 'Director';
  font-size: 3rem;
  line-height: 2rem;
  margin-bottom: 2rem;
  cursor: default;
}

@media only screen and (max-width: 440px) {
  #space {
    flex-basis: 100%;
  }
}
</style>
