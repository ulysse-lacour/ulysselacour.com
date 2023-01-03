<template>
  <main>
    <a
      v-if="$store.state.language.chosenLanguage == 'english'"
      id="contact"
      href="mailto:contact@ulysselacour.com"
    >
      <div class="contact_letter">C</div>
      <div class="contact_letter">O</div>
      <div class="contact_letter">N</div>
      <div class="contact_letter">T</div>
      <div class="contact_letter">A</div>
      <div class="contact_letter">C</div>
      <div class="contact_letter">T</div>
    </a>
    <a
      v-if="$store.state.language.chosenLanguage == 'french'"
      id="contact"
      href="mailto:contact@ulysselacour.com"
      style="width: 12rem"
    >
      <div class="contact_letter">C</div>
      <div class="contact_letter">O</div>
      <div class="contact_letter">N</div>
      <div class="contact_letter">T</div>
      <div class="contact_letter">A</div>
      <div class="contact_letter">C</div>
      <div class="contact_letter">T</div>
      <div class="contact_letter">E</div>
      <div class="contact_letter">R</div>
    </a>
  </main>
</template>

<script>
export default {}
</script>

<style scoped>
#contact {
  display: flex;
  justify-content: center;
  width: 10rem;
  padding: 0.4rem 4rem;
  margin-top: 2rem;
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
