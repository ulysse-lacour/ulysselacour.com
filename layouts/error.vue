<template>
  <main>
    <section>
      <div class="errorStatusCode">
        <h1
          v-for="(char, index) in JSON.stringify(error.statusCode)"
          :key="index"
          class="error_number"
        >
          {{ char }}
        </h1>
      </div>
      <div class="errorMessage">
        <h1
          v-for="(char, index) in JSON.stringify(error.message, null, ' ')"
          :key="index"
          class="error_letter"
        >
          {{ char != ' ' ? char : '&nbsp;' }}
        </h1>
      </div>

      <!-- <NuxtLink class="link" to="/">HOME</NuxtLink> -->

      <button class="homeButton" @click="$router.push('/')">
        <div class="home_letter">H</div>
        <div class="home_letter">O</div>
        <div class="home_letter">M</div>
        <div class="home_letter">E</div>
      </button>
    </section>
  </main>
</template>

<script>
export default {
  layout: 'errorLayout',

  props: {
    error: {
      type: Object,
      required: true
    }
  },

  head() {
    return {
      title: this.$config.app.title + this.$config.app.titleSeparator + 'ERROR'
    }
  },

  mounted() {
    this.AnimateErrorMessage()
    this.buttonAnimation()
  },

  methods: {
    AnimateErrorMessage() {
      const letters = document.querySelectorAll('.error_letter')
      this.$gsap.to(letters, {
        y: 'random(-8, 5)',
        opacity: 1,
        duration: 1
      })
    },

    buttonAnimation() {
      const letters = document.querySelectorAll('.home_letter')

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

      const homeButton = document.querySelector('.homeButton')
      homeButton.addEventListener('mouseenter', () => displayQ.play(0))
      homeButton.addEventListener('mouseleave', () => hideQ.play(0))
    }
  }
}
</script>

<style scoped>
section {
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

.errorStatusCode {
  font-family: 'Typefesse';
  font-size: 10rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error_number:hover {
  font-family: 'Typefesse-full';
}

.errorMessage {
  font-family: 'Director';
  font-size: 3rem;
  margin-bottom: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  flex-wrap: wrap;
}

.error_letter {
  opacity: 0;
}

/* .link {
  font-size: 1.5rem;
  font-family: 'Typefesse';
  border: 1px black solid;
  outline: 1px white solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  padding: 0.45rem 0.5rem;
  margin-top: 2.5rem;
  margin-bottom: 2.5rem;
  background-color: black;
  color: white;
  transition: 0.5s;
} */

/* .link:hover {
  background-color: white;
  color: black;
  transition: 0.5s;
} */

.homeButton {
  font-family: 'Outfit';
  font-weight: 900;
  font-size: 1.5rem;
  line-height: 1.5rem;
  width: 7rem;
  padding: 0.4rem 4rem;
  border: 1px white solid;
  border-radius: 30px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  -khtml-border-radius: 30px;
  display: flex;
  justify-content: center;
}

/* SAFARI SPECIFIC RULES */
@media not all and (min-resolution: 0.001dpcm) {
  @supports (-webkit-appearance: none) {
    .link {
      outline: 0px;
      border: 1px white solid;
    }
  }
}
</style>
