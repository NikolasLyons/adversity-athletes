<template>
  <container>
    <div class="mt-5">
      <v-card class="pt-5">
        <v-card-title>Our Mission:</v-card-title>
        <v-card-content class="p-4">
          <div class="ma-5">
            <p>At Adversity Athletes youth football, our mission is to foster a culture of growth, teamwork, and sportsmanship within our youth tackle football program. We are dedicated to providing a safe and supportive environment where young athletes can develop not only as skilled football players but also as individuals with character, integrity, and resilience. Our goal is to instill a passion for the game while emphasizing the importance of discipline, hard work, and respect both on and off the field. Through expert coaching, positive mentorship, and a commitment to each player's holistic development, we aim to cultivate a sense of community within our team, empowering our young athletes to face challenges with confidence and determination. We believe that football is not just a sport; it's a platform for building lifelong skills and creating lasting memories.</p>
          </div>
        </v-card-content>
      </v-card>
      <h1>Sponsorship Levels:</h1>
      <v-row>
        <v-col cols="12" md="6" v-for="(item, index) in tiers" :key="index">
          <v-card height="250" :color="item.color">
            <div class="ma-5">
              <v-card-title class="text-h5">
                   {{ item.tier }}: {{ item.price }}
                  </v-card-title>
            <ul>
              <li v-for="(description,index) in item.description" :key="index">
                {{ description.item }}
              </li>
            </ul>
          </div>
          </v-card>
        </v-col>
        <v-col class="text-center mb-5">
          <a href="https://account.venmo.com/u/AA_YFootball" target="_blank">
  
            <v-btn >CLick Here to donate</v-btn>
          </a>
          <v-banner class="text-center">We are a Non-profit organization and all donations can be written off or tax purposes. We appreciate all the support!</v-banner>
        </v-col>
      </v-row>
    </div>
  </container>
</template>
<script>
export default{
  name:'Sponsors',
  data(){
    return{
    tiers:[
      {
        tier: 'White',
        price: '$250',
        color:'#0000',
        description:[
          {item:'Sponsor logo on website'}
        ]
      },
      {
        tier: 'Black',
        price: '$500',
        color:'#000000',
        description:[
          {item:'Small logo on Practice jerseys'},
          {item:'Sponsorship shout out 5x on social media'},
          {item:'Sponsor logo on website'}
          ]
      },
      {
        tier: 'Carolina',
        price: '$1000',
        color:'#7c9cd3',
        description:[
          {item:'Medium logo on Practice jerseys'},
          {item:'Logo on Players/ Coaches travel gear'},
          {item:'Athlete of the month sponsorship post on social media(monthly)'},
          {item:'Team photo'},
          {item:'Sponsor logo on website'}
          ]
      },
      {
        tier: 'Premium',
        price: '$2000',
        color:'#E5E4E2',
        description:[
          {item:'Large logo on Practice jerseys'},
          {item:'Large Logo on Players/ Coaches travel gear'},
          {item:'Banner with logo on it'},
          {item:'Athlete of the week sponsorship post (weekly) on 3 social media platforms'},
          {item:'Team photo'},
          {item:'Sponsor logo on website'}
          ]
      },
    ]

    }
  },
  methods: {
    goToAnotherWebsite() {
      this.$router.push('https://account.venmo.com/u/AA_YFootball'); // Replace with the URL of the other website
    }
  }
}
</script>
<style>
</style>