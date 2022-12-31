<template>
  <main>
    <!-- <button id="contact">
      <svg class="email" viewBox="0 0 20 20">
        <path
          stroke="white"
          stroke-width=".1"
          fill="white"
          d="M17.051,3.302H2.949c-0.866,0-1.567,0.702-1.567,1.567v10.184c0,0.865,0.701,1.568,1.567,1.568h14.102c0.865,0,1.566-0.703,1.566-1.568V4.869C18.617,4.003,17.916,3.302,17.051,3.302z M17.834,15.053c0,0.434-0.35,0.783-0.783,0.783H2.949c-0.433,0-0.784-0.35-0.784-0.783V4.869c0-0.433,0.351-0.784,0.784-0.784h14.102c0.434,0,0.783,0.351,0.783,0.784V15.053zM15.877,5.362L10,9.179L4.123,5.362C3.941,5.245,3.699,5.296,3.581,5.477C3.463,5.659,3.515,5.901,3.696,6.019L9.61,9.86C9.732,9.939,9.879,9.935,10,9.874c0.121,0.062,0.268,0.065,0.39-0.014l5.915-3.841c0.18-0.118,0.232-0.36,0.115-0.542C16.301,5.296,16.059,5.245,15.877,5.362z"
        ></path>
      </svg>
    </button> -->

    <a
      v-if="$store.state.language.chosenLanguage == 'english'"
      id="contact"
      href="mailto:contact@ulysselacour.com"
      data-scroll
      data-scroll-speed="-1"
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
      data-scroll
      data-scroll-speed="-1"
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
}
</style>
