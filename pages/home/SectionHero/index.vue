<template>
  <section>
    <Name />
    <Drawing />
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

<style scoped></style>
