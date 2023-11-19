<template>
  <container>
    <h1>Sponsorship Levels:</h1>
    <v-row>
      <v-col v-for="(item, index) in tiers" :key="index" cols="6">
        <v-card heigh="400" :color="item.color">
          <div class="ma-5">
            <v-card-title class="text-h5">
                 {{ item.tier }}: {{ item.price }}
                </v-card-title>
                <!-- <h3>{{ item.price }}</h3> -->
          <ul>
            <li v-for="(description,index) in item.description" :key="index">
              {{ description.item }}
            </li>
          </ul>
        </div>
        </v-card>
      </v-col>
      <v-col>
        <a href="https://account.venmo.com/u/AA_YFootball" target="_blank">

          <v-btn >CLick Here to donate</v-btn>
        </a>
      </v-col>
    </v-row>
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