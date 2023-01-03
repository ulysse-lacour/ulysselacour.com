<template>
  <a id="chevron" class="chevron--down">
    <svg
      width="100"
      height="100"
      viewbox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
    >
      <g class="chevron__container">
        <line class="chevron__line1" x1="10" y1="50" x2="50" y2="50" />
        <line class="chevron__line2" x1="90" y1="50" x2="50" y2="50" />
      </g>
    </svg>
  </a>
</template>

<script>
export default {
  methods: {}
}
</script>

<style scoped>
#chevron {
  position: relative;
  top: 5px;
  left: 0px;
  width: 100px;
  height: 100px;
  margin-left: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  -webkit-transform: scale(0.4);
  transform: scale(0.4);
}

.chevron__line1,
.chevron__line2 {
  stroke-width: 5;
  stroke: var(--color);
  stroke-linecap: round;
  -webkit-transition: -webkit-transform 0.4s, stroke 0.4s;
  transition: transform 0.4s, stroke 0.4s;
  -webkit-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
}

.chevron--down,
.chevron--up {
  display: block;
}

.chevron--down > svg {
  width: 100px;
  -webkit-transition: width 0.4s;
  transition: width 0.4s;
}
.chevron--up > svg {
  width: 75px;
  -webkit-transition: width 0.4s;
  transition: width 0.4s;
}

.chevron--down > svg > .chevron__container {
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transform: translateY(13px);
  transform: translateY(13px);
}

.chevron--up > svg > .chevron__container {
  -webkit-transition: -webkit-transform 0.4s;
  transition: transform 0.4s;
  -webkit-transform: translateY(-13px);
  transform: translateY(-13px);
}

.chevron--down > svg > .chevron__container > .chevron__line1 {
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

.chevron--down > svg > .chevron__container > .chevron__line2 {
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}

.chevron--up > svg > .chevron__container > .chevron__line1 {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}

.chevron--up > svg > .chevron__container > .chevron__line2 {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
</style>
