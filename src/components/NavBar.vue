
<template>
  <v-container>
  

      <v-app-bar
        density="compact"
      >
    <router-link class="navbar-brand d-flex" :to="{ name: 'Home' }">
      
        <img
      class="mx-2"
      src="../assets/adversity-athletes-logo.jpg"
      height="45"
      width="45"
        />
      </router-link>

    <v-toolbar-title>Adversity Athletes Youth Football</v-toolbar-title>

    <v-spacer></v-spacer>
    <v-menu>
            <template v-slot:activator="{ props }">
              <v-btn icon="mdi-dots-vertical" v-bind="props"></v-btn>
            </template>

            <v-list v-model="dropdown">
              <v-list-item
                v-for="(item, i) in dropdownItems"
                :key="i"
              >
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

    <v-menu v-model="dropdown" end>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon v-bind="attrs" v-on="on" @click.stop="toggleDropdown"></v-app-bar-nav-icon>
      </template>

      <v-list>
        <v-list-item v-for="(item, index) in dropdownItems" :key="index" @click="handleDropdownItemClick(item)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
  </v-container>
    
</template>
  <script>

  // import logo from '../assets/images/adversity-athletes-logo.jpg'
  export default {
    name:'NavBar',
    data() {
    return {
      drawer: false,
      dropdown: false,
      dropdownItems: [
        { title: 'Coaches', path: '/coaches' },
        { title: 'Registration', path: '/registration' },
        { title: 'Be a Sponsor', path: '/sponsorship' },
      ],
    };
  },
  methods: {
    toggleDrawer() {
      this.drawer = !this.drawer;
    },
    toggleDropdown() {
      this.dropdown = !this.dropdown;
    },
    handleDropdownItemClick(item) {
      // Handle the dropdown item click
      console.log(`Clicked on ${item.title}`);
      this.$router.push({path: item.path})
      // You can add your logic here
      this.dropdown = false; // Close the dropdown after clicking
    },
  },
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
