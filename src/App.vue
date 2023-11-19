
<template>
  <v-app>
  <header>
    <NavBar />
  </header>
      <router-view></router-view>
  <footer>
    <Footer />
  </footer>
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

</style>
