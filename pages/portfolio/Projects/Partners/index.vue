<template>
  <section>
    <h3
      v-if="$store.state.language.chosenLanguage == 'english'"
      class="partners_catchphrase"
    >
      Some great peoples and companies I've worked with :
    </h3>
    <h3
      v-if="$store.state.language.chosenLanguage == 'french'"
      class="partners_catchphrase"
    >
      Mes clients préférés :
    </h3>
    <h4 class="partners_list">
      <a
        class="partner_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.akimbo.eu/"
        >Akimbo</a
      >,&nbsp;&nbsp;
      <a
        class="partner_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://cultplace.fr/"
        >Cultplace</a
      >,&nbsp;&nbsp;
      <a
        class="partner_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://nnnbbp.myportfolio.com/"
        >Ninon&nbsp;Beaupere</a
      >,&nbsp;&nbsp;
      <a
        class="partner_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://preludes.fr/"
        >Préludes</a
      >,&nbsp;&nbsp;
      <a
        class="partner_link"
        target="_blank"
        rel="noopener noreferrer"
        href="https://naomiprostkasbi.com/"
        >Naomi&nbsp;Prost-Kasbi</a
      >.
    </h4>
  </section>
</template>

<script>
export default {}
</script>

<style scoped>
.partners_list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  font-family: 'Outfit';
  font-size: 2rem;
  font-weight: 100;
}

.partners_catchphrase {
  font-family: 'Outfit';
  font-size: 2rem;
  font-weight: 100;
  text-align: center;
  margin-bottom: 1rem;
}

.partner_link {
  font-weight: 200;
  text-decoration: none;
  position: relative;
}

.partner_link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  bottom: 0;
  background: var(--color);
  transform-origin: 100% 0;
  transform: scaleX(0);
  transition: transform 0.2s;
}

.partner_link:hover::before,
.partner_link:active::before {
  transform-origin: 0 0;
  transform: scaleX(1);
  transition: transform 0.4s;
}
</style>
