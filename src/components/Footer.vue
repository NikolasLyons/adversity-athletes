<template>
  <v-footer class="footer mt-5"  app>
    <v-row justify="center">
      <v-col
        v-for="(icon, index) in socialIcons"
        :key="index"
        class="text-center"
        cols="12"
        sm="6"
        md="4"
      >
        <v-btn icon :href="icon.link" target="_blank">
          <v-icon size="24">{{ icon.icon }}</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <!-- <v-row justify="center">
      <v-col class="text-center" cols="12">
        <v-divider></v-divider>
        <v-btn icon href="#" target="_blank">
          <v-icon>mdi-email</v-icon>
        </v-btn>
        <v-btn icon href="#" target="_blank">
          <v-icon>mdi-linkedin</v-icon>
        </v-btn>
        Add more icons as needed
      </v-col>
    </v-row> -->

    <v-row justify="center">
      <v-col class="text-center" cols="12">
        <span>&copy; 2023 Adversity Athletes Football. All rights reserved.</span>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      socialIcons: [
        { icon: 'mdi-instagram', link: 'https://www.instagram.com/adversity.athletes.football/' },
        { icon: 'mdi-facebook', link: 'https://www.facebook.com/' },
        { icon: ' mdi-venmo', link: 'https://account.venmo.com/u/AA_YFootball' },
      ],
    };
  },
};
</script>

<style scoped>
.footer{
  background-color: #7c9cd3;
}
/* Add your custom styles here if needed */
</style>