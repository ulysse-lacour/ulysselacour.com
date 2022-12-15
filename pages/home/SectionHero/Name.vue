<template>
  <div class="name">
    <h1 id="first_name">
      <div class="name_letter">u</div>
      <div class="name_letter">l</div>
      <div class="name_letter">y</div>
      <div class="name_letter">s</div>
      <div class="name_letter">s</div>
      <div class="name_letter">e</div>
    </h1>
    <h1 id="last_name">
      <div class="name_letter">l</div>
      <div class="name_letter">a</div>
      <div class="name_letter">c</div>
      <div class="name_letter">o</div>
      <div class="name_letter">u</div>
      <div class="name_letter">r</div>
    </h1>
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

      animateLetters.to(nameLetters, {
        y: 'random(-5, 5)',
        stagger: 0.025,
        ease: 'none'
      })

      name.addEventListener('mouseenter', () => animateLetters.play(0))
      name.addEventListener('mouseleave', () => animateLetters.reverse())
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 1rem;
  /* background-color: #030303; */
}
.name {
  font-family: 'Director';
  font-size: 2rem;
  line-height: 1rem;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: font-size 1s;
  cursor: pointer;
}
.name:hover {
  font-size: 2.25rem;
}

#first_name,
#last_name {
  display: flex;
  justify-content: center;
}
</style>
