<template>
  <v-container>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12">

      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  name: 'HomePage',
  data() {
    return {
      images: [
        { src: '/images/concept2.jpeg' },
        { src: '/images/concept1.jpeg' },
        { src: '/images/ty-speaking-to-kids.jpeg' },
        { src: '/images/josh-cory.jpeg' },
        { src: '/sponsor-images/stinker_sponsor_poster.png' },
        { src: '/sponsor-images/sponsor_jacket_coach_jacob.png' },
        { src: '/sponsor-images/edwin_pichardo_poster.jpeg' },
      ]
    }
  }
}
</script>
<style>
.header {
  background-color: #7BAFD4;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  /* Adjust the opacity here */
}
</style>