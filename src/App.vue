
<template>
  <v-app class="app">
    <NavBar />
    <v-main>
      <router-view></router-view>
    </v-main>
    <Footer />
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
/* .app {
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: black;
  background-repeat: no-repeat;
} */
</style>
