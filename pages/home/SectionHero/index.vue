<template>
  <section>
    <div id="center_element">
      <Name />
      <Drawing />
    </div>
    <EnterButton />
  </section>
</template>

<script>
import Name from './Name.vue'
import Drawing from './Drawing.vue'
import EnterButton from './EnterButton.vue'

export default {
  components: {
    Name,
    Drawing,
    EnterButton
  },

  mounted() {},

  methods: {}
}
</script>

<style scoped>
section {
  background-color: transparent;
  height: 100svh;
  width: 100vw;
  max-width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

#center_element {
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  max-height: 80vh;
  width: 80vw;
}

@media screen and (max-width: 640px) {
  #center_element {
    width: 95vw;
  }
}

@media (min-width: 640px) and (max-width: 1024px) {
  #center_element {
    width: 90vw;
  }
}
</style>
