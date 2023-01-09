<template>
  <button
    class="project_chevron next_project_chevron"
    :style="[isEmpty == true ? { cursor: 'default' } : { cursor: 'pointer' }]"
  >
    <svg
      v-if="isEmpty == false"
      width="100"
      height="100"
      viewbox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      @click="ScrollToProject(currentProject, goToProject, $event)"
    >
      <g class="chevron__container">
        <line class="chevron__line1" x1="10" y1="50" x2="50" y2="50" />
        <line class="chevron__line2" x1="90" y1="50" x2="50" y2="50" />
      </g>
    </svg>
  </button>
</template>

<script>
import { scrollIntoView } from 'seamless-scroll-polyfill'

export default {
  props: {
    isEmpty: {
      type: Boolean,
      required: true
    },
    goToProject: {
      type: String,
      required: true
    },
    currentProject: {
      type: String,
      required: true
    }
  },
  methods: {
    ScrollToProject(fromProject, ToProject, event) {
      const projects = document.querySelector('.projects')
      const clickedProject = projects.querySelector(fromProject)
      const nextProject = projects.querySelector(ToProject)
      const slideProjects = this.$gsap.timeline({ paused: true })
      slideProjects
        .to(clickedProject, {
          opacity: 0,
          duration: 0.25
        })
        .from(
          nextProject,
          {
            opacity: 0.25,
            duration: 0.5,
            ease: 'power2.in'
          },
          '<'
        )
        .to(
          clickedProject,
          {
            opacity: 1
          },
          '>'
        )
      slideProjects.play(0)

      scrollIntoView(nextProject, {
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      })
    }
  }
}
</script>

<style scoped>
.project_chevron {
  display: block;
  width: 100px;
  height: 100px;
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: center;
  opacity: 0.35;
  -webkit-transition: opacity 0.25s;
  transition: opacity 0.25s;
}

.project_chevron:hover {
  opacity: 1;
  -webkit-transition: opacity 0.5s;
  transition: opacity 0.5s;
}

.next_project_chevron {
  position: absolute;
  left: 80vw;
  top: 50%;
  transform: translate(0, -50%) scale(0.75) rotate(-90deg);
  -webkit-transform: translate(0, -50%) scale(0.75) rotate(-90deg);
}

.chevron__line1,
.chevron__line2 {
  stroke-width: 5;
  stroke: var(--color);
  stroke-linecap: round;
  -webkit-transform-origin: 50px 50px;
  transform-origin: 50px 50px;
}

svg {
  width: 100px;
}

.chevron__container {
  -webkit-transform: translateY(13px);
  transform: translateY(13px);
}

.chevron__line1 {
  -webkit-transform: rotate(40deg);
  transform: rotate(40deg);
}

.chevron__line2 {
  -webkit-transform: rotate(-40deg);
  transform: rotate(-40deg);
}

/* Responsive */
@media only screen and (max-width: 440px) {
  .next_project_chevron {
    position: relative;
    top: 0;
    left: -25px;
    transform: scale(0.4) rotate(-90deg);
    -webkit-transform: scale(0.4) rotate(-90deg);
    opacity: 1;
  }
}

@media (min-width: 440px) and (max-width: 640px) {
  .next_project_chevron {
    position: relative;
    top: 0;
    left: 0;
    transform: scale(0.4) rotate(-90deg);
    -webkit-transform: scale(0.4) rotate(-90deg);
    opacity: 1;
  }
}

@media (min-width: 640px) and (max-width: 900px) {
  .next_project_chevron {
    position: relative;
    top: 0;
    left: 0;
    transform: scale(0.4) rotate(-90deg);
    -webkit-transform: scale(0.4) rotate(-90deg);
    opacity: 1;
  }
}
</style>
