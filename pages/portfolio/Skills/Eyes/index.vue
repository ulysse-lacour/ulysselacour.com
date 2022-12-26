<template>
  <div>
    <figure class="eye_image1" data-scroll data-scroll-speed="1">
      <picture>
        <!-- <source data-srcset="/images/yeuzB.png" media="(min-width:700px)" /> -->
        <img
          data-img-eye="1"
          data-src="/images/yeuzA.png"
          class="lazyload"
          alt="eye"
          draggable="false"
        />
      </picture>
    </figure>
    <figure class="eye_image2" data-scroll data-scroll-speed="2">
      <picture>
        <!-- <source data-srcset="/images/yeuzB.png" media="(min-width:700px)" /> -->
        <img
          data-img-eye="2"
          data-src="/images/yeuzB.png"
          class="lazyload"
          alt="eye"
          draggable="false"
        />
      </picture>
    </figure>
    <figure class="eye_image3" data-scroll data-scroll-speed="3">
      <picture>
        <!-- <source data-srcset="/images/yeuzB.png" media="(min-width:700px)" /> -->
        <img
          data-img-eye="3"
          data-src="/images/yeuzA.png"
          class="lazyload"
          alt="eye"
          draggable="false"
        />
      </picture>
    </figure>
    <figure class="eye_image4" data-scroll data-scroll-speed="1">
      <picture>
        <!-- <source data-srcset="/images/yeuzB.png" media="(min-width:700px)" /> -->
        <img
          data-img-eye="4"
          data-src="/images/yeuzB.png"
          class="lazyload"
          alt="eye"
          draggable="false"
        />
      </picture>
    </figure>
    <figure class="eye_image5" data-scroll data-scroll-speed="3">
      <picture>
        <!-- <source data-srcset="/images/yeuzB.png" media="(min-width:700px)" /> -->
        <img
          data-img-eye="5"
          data-src="/images/yeuzA.png"
          class="lazyload"
          alt="eye"
          draggable="false"
        />
      </picture>
    </figure>
  </div>
</template>

<script>
export default {
  mounted() {},

  methods: {}
}
</script>

<style scoped>
[data-img-eye] {
  opacity: 0;
}
.eye_image1 {
  position: absolute;
  bottom: 15vh;
  left: 10vw;
  width: 15vw;
  min-width: 130px;
}

[data-img-eye='1'] {
  -webkit-transform: rotate(10deg);
  transform: rotate(10deg);
}

.eye_image2 {
  position: absolute;
  top: 15vh;
  right: 5vw;
  width: 10vw;
  min-width: 80px;
}
.eye_image3 {
  position: absolute;
  top: 25vh;
  left: 15vw;
  width: 5vw;
  min-width: 40px;
}

[data-img-eye='3'] {
  -webkit-transform: rotate(-12deg);
  transform: rotate(-12deg);
}

.eye_image4 {
  position: absolute;
  top: 20vh;
  left: 50vw;
  width: 7.5vw;
  min-width: 60px;
}

[data-img-eye='4'] {
  -webkit-transform: rotate(-15deg);
  transform: rotate(-15deg);
}

.eye_image5 {
  position: absolute;
  bottom: 25vh;
  right: 15vw;
  width: 9vw;
  min-width: 75px;
}

[data-img-eye='5'] {
  -webkit-transform: rotate(-5deg);
  transform: rotate(-5deg);
}
</style>
