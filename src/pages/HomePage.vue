<template>
  <v-container>
    <v-row class="ma-1">
      <v-col cols="12">
        <h1 class="text-center">Welcome to Adversity Athletes Youth Football</h1>
      </v-col>
    </v-row>
    <v-carousel cycle height="400" hide-delimiter-background show-arrows="hover">
      <v-carousel-item v-for="(image, i) in images" :key="i" :src="image.src">
      </v-carousel-item>
    </v-carousel>
    <v-row>
      <v-col cols="12" md="6">
        <video ref="videoPlayer" controls muted autoplay loop style="max-width: 100%; height: auto;">
          <source src=" /videos/adversity-athletes-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>

      </v-col>
      <v-col cols="12" md="6">
        <v-img src="/images/schedule_2024.jpeg"></v-img>
      </v-col>
    </v-row>
    <div class="masonry-frame pt-4 m-1" cols="12">
      <div v-for="(photo, index) in photos" :key="index">
        <div>
          <v-img :src="photo.src"></v-img>
        </div>
      </div>
    </div>

  </v-container>
</template>
<script>
export default {
  name: 'HomePage',
  mounted() {
    this.randomizeImageSize();
  },
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
      ],
      photos: [
        { src: '/images/player_photos/andrew.jpeg' },
        { src: '/images/player_photos/ben.jpeg' },
        { src: '/images/player_photos/bentley.jpeg' },
        { src: '/images/player_photos/benton.jpeg' },
        { src: '/images/player_photos/finn.jpeg' },
        { src: '/images/player_photos/harrison.jpeg' },
        { src: '/images/player_photos/jamison.jpeg' },
        { src: '/images/player_photos/nate.jpeg' },
        { src: '/images/player_photos/number_7.jpeg' },
        { src: '/images/player_photos/number_20.jpeg' },
        { src: '/images/player_photos/number_44.jpeg' },
        { src: '/images/player_photos/number_99.jpeg' },
        { src: '/images/player_photos/number_eight.jpeg' },
        { src: '/images/player_photos/oakley.jpeg' },
        { src: '/images/player_photos/porter.jpeg' },
        { src: '/images/player_photos/rex.jpeg' },
        { src: '/images/player_photos/tanner.jpeg' },
        { src: '/images/player_photos/tate.jpeg' },
        { src: '/images/player_photos/zay.jpeg' },

      ],
      imageSize: {
        width: 200, // Default width
        height: 200 // Default height
      }
    }
  },

  methods: {
    randomizeImageSize() {
      // Generate random width and height
      const randomWidth = Math.floor(Math.random() * 300) + 100; // Random width between 100 and 400
      const randomHeight = Math.floor(Math.random() * 300) + 100; // Random height between 100 and 400

      // Update imageSize data properties
      this.imageSize.width = randomWidth;
      this.imageSize.height = randomHeight;
    }
  },
  computed: {
    isMobile() {
      return window.screen.width < 600
    }
  }
}
</script>
<style>
.header {
  background-color: #7BAFD4;
}

.masonry-frame {
  columns: 4;

  div {
    break-inside: avoid;
  }
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

@media only screen and (max-width: 1200px) {
  .masonry-frame {
    columns: 3;
  }
}

@media only screen and (max-width: 976px) {
  .masonry-frame {
    columns: 2;
  }
}

@media only screen and (max-width: 655px) {
  .masonry-frame {
    columns: 1;
  }
}
</style>