<template>
  <v-container class="text-center">
    <v-row>
      <v-col cols="12">
        <h2>Our Sponsors</h2>
        <p>Thank you to our sponsors for their support of our team. We are grateful for their generosity and commitment to
          our mission.</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" class="text-center">
        <v-card class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <v-img class="card-background-img" src="/sponsor-images/stinker_sponsor_poster.png"
                aspect-ratio="2.5"></v-img>
            </div>
            <div class="flip-card-back">
              <v-card-title>Stinker Stores</v-card-title>
              <v-card-text>
                <p>Stinker Stores is a proud sponsor of the Adversity Athletes Youth Football. We are grateful for their
                  support of our team and our mission.</p>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
      <v-col cols="12">
        <v-card class="flip-card">
          <div class="flip-card-inner">
            <div class="flip-card-front">
              <v-img class="card-background-img" src="/sponsor-images/edwin_pichardo_poster.jpeg"
                aspect-ratio="2.5"></v-img>
            </div>
            <div class="flip-card-back">
              <v-card-title>Edwin Pichardo</v-card-title>
              <v-card-text>
                <p>Edwin Pichardo is a proud sponsor of the Adversity Athletes Youth Football. We are grateful for his
                  support
                  of our team and our mission.</p>
              </v-card-text>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="6" v-for="sponsor in sponsors" :key="sponsor.name">
        <v-img class="card-background-img" :src="sponsor.image" :alt="sponsor.name" cover aspect-ratio="2.5"></v-img>

      </v-col>
      <v-col cols="12" md="6">
        <v-img class="card-background-img" src="/sponsor-images/pichardo_properties_logo.png" alt="pichardo-properties"
          aspect-ratio="2.5"></v-img>

      </v-col>
    </v-row>

  </v-container>
</template>
<script>
export default {
  name: 'OurSponsors',
  data() {
    return {
      sponsors: [
        { name: 'Stinker Stores', image: '/sponsor-images/stinker_image.png' },
        // { name: 'Edwin Pichardo', image: '/sponsor-images/pichardo_properties_logo.png' },
      ],
    };
  },

}

</script>
<style>
.flip-card {
  perspective: 1000px;
}
</style>