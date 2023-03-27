<template>
  <main style="position: relative; height: 4rem; width: 4rem">
    <div class="scroll-down"></div>
  </main>
</template>

<script>
export default {}
</script>

<style>
.scroll-down {
  width: 100%;
  height: 4rem;
  margin-top: 6rem;
}

.scroll-down:before {
  animation: bounce 1.75s ease infinite;
  color: var(--color);
  content: '╲╱';
  font-size: 1.5rem;
  font-weight: bolder;
  height: 4rem;
  left: 50%;
  letter-spacing: -1px;
  line-height: 2rem;
  margin-left: -3rem;
  opacity: 0.8;
  position: absolute;
  text-align: center;
  width: 6rem;
}

@keyframes bounce {
  50% {
    transform: translateY(-10%);
  }
}

@media (max-width: 806px), (max-height: 800px) {
  .scroll-down {
    display: none;
  }
}
</style>
