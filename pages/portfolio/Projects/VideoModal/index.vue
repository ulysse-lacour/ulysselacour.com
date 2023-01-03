<template>
  <div id="video_modal" class="overlay" @click.self="CloseModal">
    <div class="modal">
      <button class="exit_modal" @click="CloseModal">
        <svg
          class="exit_svg"
          viewBox="-1.5 -1.5 18.00 18.00"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          :stroke-width="[$colorMode.value === 'light' ? '0.1' : '1']"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="#000000"
          ></path>
        </svg>
      </button>
      <h1 id="title">{{ videoToShow }}</h1>
      <video controls muted>
        <source
          v-if="videoToShow == 'HOMEWORKS'"
          src="/videos/HOMEWORKS.webm"
          type="video/webm"
        />
        <p>
          Votre navigateur ne prend pas en charge les vidéos HTML5. Voici
          <a href="/videos/Homeworks.webm">un lien pour télécharger la vidéo</a
          >.
        </p>
      </video>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    videoToShow: {
      type: String,
      required: true
    }
  },

  mounted() {},

  methods: {
    CloseModal() {
      const videoPlayer = document.querySelector('video')
      videoPlayer.pause()
      videoPlayer.currentTime = 0
      this.$emit('close-modal')
    }
  }
}
</script>

<style scoped>
.overlay {
  z-index: 10;
  position: fixed;
  width: 100vw;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  background-color: #000000bb;
  -webkit-transition: opacity 5s;
  -moz-transition: opacity 5s;
  -ms-transition: opacity 5s;
  -o-transition: opacity 5s;
  transition: opacity 5s;
}

.overlay:after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100vw;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('/images/grain.png');
  opacity: 0.1;
}

.modal {
  z-index: 100;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--bg);
  color: var(--color);
  height: 80vh;
  width: 90vw;
  margin-top: 10vh;
  margin-bottom: 10vh;
  padding: 60px 0;
  border: 1px var(--color) solid;
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -khtml-border-radius: 15px;
  background-color: var(--bg);
  color: var(--color);
}

.modal:after {
  content: '';
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-image: url('/images/grain.png');
  opacity: var(--bg-opacity);
  border-radius: 15px;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  -khtml-border-radius: 15px;
}

#title {
  font-size: 2rem;
  font-weight: 200;
  text-decoration: none;
  position: relative;
  margin-bottom: 1rem;
}

video {
  max-height: 65vh;
  max-width: 85vw;
}

.exit_modal {
  position: absolute;
  right: 1rem;
  top: 1rem;
  -moz-transition: 0.5s;
  -ms-transition: 0.5s;
  -o-transition: 0.5s;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  cursor: pointer;
}

.exit_modal:hover {
  -moz-transform: scale(1.1);
  -ms-transform: scale(1.1);
  -o-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
  -moz-transition: -moz-transform 0.25s;
  -ms-transition: -ms-transform 0.25s;
  -o-transition: -o-transform 0.25s;
  -webkit-transition: -webkit-transform 0.25s;
  transition: transform 0.25s;
}

.exit_svg {
  width: 2rem;
  height: 2rem;
  stroke: var(--color);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media only screen and (max-height: 640px) {
  #title {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
}
</style>
