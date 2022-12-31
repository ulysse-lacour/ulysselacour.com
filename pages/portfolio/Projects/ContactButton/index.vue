<template>
  <main>
    <a
      v-if="$store.state.language.chosenLanguage == 'english'"
      id="contact"
      class="js-scroll slide-right"
      href="mailto:contact@ulysselacour.com"
    >
      <div class="contact_letter">J</div>
      <div class="contact_letter">O</div>
      <div class="contact_letter">I</div>
      <div class="contact_letter">N</div>
      <div class="contact_letter">&nbsp;</div>
      <div class="contact_letter">T</div>
      <div class="contact_letter">H</div>
      <div class="contact_letter">E</div>
      <div class="contact_letter">M</div>
    </a>
    <a
      v-if="$store.state.language.chosenLanguage == 'french'"
      id="contact"
      class="js-scroll slide-right"
      href="mailto:contact@ulysselacour.com"
    >
      <div class="contact_letter">R</div>
      <div class="contact_letter">E</div>
      <div class="contact_letter">J</div>
      <div class="contact_letter">O</div>
      <div class="contact_letter">I</div>
      <div class="contact_letter">N</div>
      <div class="contact_letter">D</div>
      <div class="contact_letter">R</div>
      <div class="contact_letter">E</div>
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
  width: 12rem;
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
}
</style>
