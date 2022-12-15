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
      <NuxtLink class="link" to="/">HOME</NuxtLink>
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
  },

  methods: {
    AnimateErrorMessage() {
      const letters = document.querySelectorAll('.error_letter')
      this.$gsap.to(letters, {
        y: 'random(-8, 5)',
        opacity: 1,
        duration: 1
      })
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
  font-size: xx-large;
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
  font-size: 2.5rem;
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

.link {
  font-size: 2rem;
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
}

.link:hover {
  background-color: white;
  color: black;
  transition: 0.5s;
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
