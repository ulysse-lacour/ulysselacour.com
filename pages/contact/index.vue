<template>
  <main>
    <SmoothScroll>
      <div class="page_container">
        <h1>CONTACT</h1>
      </div>
    </SmoothScroll>
  </main>
</template>

<script>
import SmoothScroll from '~/components/SmoothScroll'

export default {
  components: {
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
        this.$config.app.title +
        this.$config.app.titleSeparator +
        this.$config.app.titleTemplate,

      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.$config.app.description
        }
      ]
    }
  },

  mounted() {},

  beforeDestroy() {},

  methods: {}
}
</script>

<style scoped></style>
