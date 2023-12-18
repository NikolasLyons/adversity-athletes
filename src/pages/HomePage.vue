<template>
  <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows="hover"
  >
    <v-carousel-item
      v-for="(image, i) in images"
      :key="i"
      :src="image.src"
    >
    </v-carousel-item>
  </v-carousel>
  <v-row>
    <v-col cols="12">
      <v-card align="center" height="auto" class="ma-5 flex-column align-item-center text-center">
        <h1 class="header"> News</h1>
        <p>Full Website coming soon Tryout info below ⤵️</p>
        <h3>When: <span>Saturday, January 13th</span></h3>
        <h3>Time: <span>11:00am</span></h3>
        <h3>Where: <span>Reta Husky Park</span></h3>
        <h3>Grade: <span>5th/6th</span></h3>
        <p>There is a $10 fee</p>
      </v-card>
    </v-col>
    </v-row>
  <!-- <v-row>
      <v-col class="header text-center" cols="12">
        <h1>Welcome!</h1>
        <p>Full Website coming soon</p>
      </v-col>
  </v-row>
  <v-row>
    <v-col cols="12" md="6">
      <v-card align="center" height="auto" class="ma-5 flex-column align-item-center text-center">
        <h1 class="header"> News</h1>
        <p>Full Website coming soon Tryout info below ⤵️</p>
        <h3>When: <span>Saturday, January 13th</span></h3>
        <h3>Time: <span>11:00am</span></h3>
        <h3>Where: <span>Reta Husky Park</span></h3>
        <h3>Grade: <span>5th/6th</span></h3>
        <p>There is a $10 fee</p>
      </v-card>
    </v-col>
    <v-col  cols="12" md="6">
      <img style="max-width: 100%; max-height: 100%;" src="/images/concept2.jpeg" alt="picture of uniforms"/>
    </v-col>
  </v-row> -->
</template>
<script>
export default{
name:'HomePage',
data(){
  return{
    images:[
      {src:'/images/concept2.jpeg'},
      {src:'/images/concept1.jpeg'},
      {src:'/images/ty-speaking-to-kids.jpeg'},
      {src:'/images/josh-cory.jpeg'},
      ]
  }
}
}
</script>
<style>
.header{
  background-color: #7BAFD4;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5); /* Adjust the opacity here */
}

</style>