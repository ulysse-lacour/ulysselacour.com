<template>
  <div class="parameters">
    <svg class="params_wheel" viewBox="0 0 20 20" @click="ShowParams">
      <path
        id="params_pivot"
        stroke="white"
        stroke-width=".2"
        fill="white"
        d="M10.032,8.367c-1.112,0-2.016,0.905-2.016,2.018c0,1.111,0.904,2.014,2.016,2.014c1.111,0,2.014-0.902,2.014-2.014C12.046,9.271,11.143,8.367,10.032,8.367z M10.032,11.336c-0.525,0-0.953-0.427-0.953-0.951c0-0.526,0.427-0.955,0.953-0.955c0.524,0,0.951,0.429,0.951,0.955C10.982,10.909,10.556,11.336,10.032,11.336z"
      ></path>
      <path
        id="params_wheel_path"
        stroke="white"
        stroke-width=".2"
        fill="white"
        d="M17.279,8.257h-0.785c-0.107-0.322-0.237-0.635-0.391-0.938l0.555-0.556c0.208-0.208,0.208-0.544,0-0.751l-2.254-2.257c-0.199-0.2-0.552-0.2-0.752,0l-0.556,0.557c-0.304-0.153-0.617-0.284-0.939-0.392V3.135c0-0.294-0.236-0.532-0.531-0.532H8.435c-0.293,0-0.531,0.237-0.531,0.532v0.784C7.582,4.027,7.269,4.158,6.966,4.311L6.409,3.754c-0.1-0.1-0.234-0.155-0.376-0.155c-0.141,0-0.275,0.055-0.375,0.155L3.403,6.011c-0.208,0.207-0.208,0.543,0,0.751l0.556,0.556C3.804,7.622,3.673,7.935,3.567,8.257H2.782c-0.294,0-0.531,0.238-0.531,0.531v3.19c0,0.295,0.237,0.531,0.531,0.531h0.787c0.105,0.318,0.236,0.631,0.391,0.938l-0.556,0.559c-0.208,0.207-0.208,0.545,0,0.752l2.254,2.254c0.208,0.207,0.544,0.207,0.751,0l0.558-0.559c0.303,0.154,0.616,0.285,0.938,0.391v0.787c0,0.293,0.238,0.531,0.531,0.531h3.191c0.295,0,0.531-0.238,0.531-0.531v-0.787c0.322-0.105,0.636-0.236,0.938-0.391l0.56,0.559c0.208,0.205,0.546,0.207,0.752,0l2.252-2.254c0.208-0.207,0.208-0.545,0.002-0.752l-0.559-0.559c0.153-0.303,0.285-0.615,0.389-0.938h0.789c0.295,0,0.532-0.236,0.532-0.531v-3.19C17.812,8.495,17.574,8.257,17.279,8.257z M16.747,11.447h-0.653c-0.241,0-0.453,0.164-0.514,0.398c-0.129,0.496-0.329,0.977-0.594,1.426c-0.121,0.209-0.089,0.473,0.083,0.645l0.463,0.465l-1.502,1.504l-0.465-0.463c-0.174-0.174-0.438-0.207-0.646-0.082c-0.447,0.262-0.927,0.463-1.427,0.594c-0.234,0.061-0.397,0.271-0.397,0.514V17.1H8.967v-0.652c0-0.242-0.164-0.453-0.397-0.514c-0.5-0.131-0.98-0.332-1.428-0.594c-0.207-0.123-0.472-0.09-0.646,0.082l-0.463,0.463L4.53,14.381l0.461-0.463c0.169-0.172,0.204-0.434,0.083-0.643c-0.266-0.461-0.467-0.939-0.596-1.43c-0.06-0.234-0.272-0.398-0.514-0.398H3.313V9.319h0.652c0.241,0,0.454-0.162,0.514-0.397c0.131-0.498,0.33-0.979,0.595-1.43c0.122-0.208,0.088-0.473-0.083-0.645L4.53,6.386l1.503-1.504l0.46,0.462c0.173,0.172,0.437,0.204,0.646,0.083c0.45-0.265,0.931-0.464,1.433-0.597c0.233-0.062,0.396-0.274,0.396-0.514V3.667h2.128v0.649c0,0.24,0.161,0.452,0.396,0.514c0.502,0.133,0.982,0.333,1.433,0.597c0.211,0.12,0.475,0.089,0.646-0.083l0.459-0.462l1.504,1.504l-0.463,0.463c-0.17,0.171-0.202,0.438-0.081,0.646c0.263,0.448,0.463,0.928,0.594,1.427c0.061,0.235,0.272,0.397,0.514,0.397h0.651V11.447z"
      ></path>
    </svg>
    <div class="params_items">
      <div class="choose_lang">
        <button
          id="lang_fr"
          :class="{
            lang_selected: $store.state.language.chosenLanguage == 'french'
          }"
        >
          &nbsp;molière&nbsp;
        </button>
        <div id="lang_pipe"></div>
        <button
          id="lang_uk"
          :class="{
            lang_selected: $store.state.language.chosenLanguage == 'english'
          }"
        >
          &nbsp;shakespeare&nbsp;
        </button>
      </div>
      <button id="exit_params" @click="HideParams">x</button>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    this.animateOnLoad()
    this.hoverAnimation()
    this.LanguageSelector()
  },
  methods: {
    hoverAnimation() {
      const params = document.querySelector('.params_wheel')
      const toggleParams = this.$gsap.timeline({
        reversed: true,
        paused: true,
        defaults: { duration: 0.25, ease: 'ease.out' }
      })

      toggleParams.to(params, {
        scale: 1.1
      })

      params.addEventListener('mouseenter', () => toggleParams.play())
      params.addEventListener('mouseleave', () => toggleParams.reverse())
    },

    animateOnLoad() {
      const params = document.querySelector('.params_wheel')
      this.$gsap.from(params, {
        rotation: 360,
        duration: 2,
        ease: 'steps(30)'
      })
    },

    ShowParams() {
      const paramsWheel = document.querySelector('.params_wheel')
      const params = document.querySelector('.params_items')
      const showParams = this.$gsap.timeline({ paused: true })
      showParams
        .to([paramsWheel, params], {
          x: 70,
          ease: 'power2.in'
        })
        .to(
          params,
          {
            x: -142,
            opacity: 1,
            ease: 'power2.in'
          },
          '>'
        )

      showParams.play(0)
    },

    HideParams() {
      const paramsWheel = document.querySelector('.params_wheel')
      const params = document.querySelector('.params_items')
      const showParams = this.$gsap.timeline({ paused: true })
      showParams
        .to(params, {
          x: 60,
          opacity: 0,
          ease: 'power2.in'
        })
        .to(
          paramsWheel,
          {
            x: -0.05,
            ease: 'power2.in'
          },
          '>'
        )

      showParams.play(0)
    },

    LanguageSelector() {
      const french = document.querySelector('#lang_fr')
      const english = document.querySelector('#lang_uk')

      french.addEventListener('click', () => {
        french.classList.add('lang_selected')
        english.classList.remove('lang_selected')
        this.$store.commit('language/ChangeLanguage', 'french')
      })
      english.addEventListener('click', () => {
        french.classList.remove('lang_selected')
        english.classList.add('lang_selected')
        this.$store.commit('language/ChangeLanguage', 'english')
      })
    }
  }
}
</script>

<style scoped>
.params_wheel {
  z-index: 2;
  width: 2.5rem;
  height: 2.5rem;
  position: fixed;
  top: 1rem;
  right: 1.5rem;
}

.params_items {
  z-index: 1;
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  font-family: 'Outfit';
  font-weight: 200;
  font-size: 1.25rem;
  opacity: 0;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: visible;
}

#exit_params {
  font-size: 3rem;
  margin-left: 1.25rem;
  margin-top: -0.75rem;
  transition: 0.5s;
}

#exit_params:hover {
  transform: scale(1.1);
}

.choose_lang {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0rem 0.5rem;
  border: 1px black solid;
  border-radius: 30px;
  outline: 1px white solid;
}

#lang_fr,
#lang_uk {
  width: 8rem;
  max-width: 8rem;
  transition: 0.5s;
}

#lang_pipe {
  width: 1px;
  height: 1.9rem;
  background-color: white;
}

#lang_uk {
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  margin-right: -0.44rem;
  transition: 0.5s;
}

#lang_fr {
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
  margin-left: -0.44rem;
  transition: 0.5s;
}

.lang_selected {
  background-color: white;
  color: black;
  pointer-events: none;
  transition: 0.5s;
}
</style>
