
<template>
  <v-app class="app">
    <v-main>
      <NavBar />
        <router-view></router-view>
      <Footer />
    </v-main>
  </v-app>
</template>
  <script>
  export default {
  setup() {
    return {};
  },
};
  </script>

<style  scoped>
/* .app{
  background-size: cover;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
 background-color: black;
  background-repeat: no-repeat;
  background-image: url('public/images/adversity-athletes-logo.jpg');
} */
</style>
