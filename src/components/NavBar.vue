
<template>
    <v-card
    class="mx-auto"
    max-width="448"
  >
    <v-layout>
      <v-app-bar
        density="compact"
      >
     
        <img
      class="mx-2"
      src="../assets/adversity-athletes-logo.jpg"
      height="45"
      width="45"
        />
        <v-app-bar-title>Adversity Athletes</v-app-bar-title>

        <!-- <template v-slot:append>
          <v-btn icon="mdi-dots-vertical"></v-btn>
        </template> -->
          <template v-slot:append>
            <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
          </template>

          <v-tabs
          color="deep-purple-accent-4"
        >
        <router-link :to="{ name: 'About Us' }">
          <v-tab :value="1" @click="">About Us</v-tab>
        </router-link>
          <v-tab :value="2">Coaches</v-tab>
          <v-tab :value="3">Extra Tab</v-tab>
        </v-tabs>
      </v-app-bar>

      <v-navigation-drawer location="end" v-model="drawer">
        <v-list-item link title="List Item 1"></v-list-item>
        <v-list-item link title="List Item 2"></v-list-item>
       <v-list-item link title="List Item 3"></v-list-item>
      </v-navigation-drawer>
    </v-layout>
  </v-card>
</template>
  <script>
  // import logo from '../assets/images/adversity-athletes-logo.jpg'
  export default {
    name:'NavBar',
    data(){
      return{
        drawer:false,
        buttons:[
          {home:'Home'},
          {home:'About Us'},
          
        ]
      }
    }
  }
  
  </script>

<style scoped>
.dropdown-menu {
  user-select: none;
  display: block;
  transform: scale(0);
  transition: all 0.15s linear;
}
.dropdown-menu.show {
  transform: scale(1);
}
.hoverable {
  cursor: pointer;
}
</style>
