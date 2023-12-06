<template>
  <v-row>
    <v-col cols="12" md="6">

      <v-card
      class="mx-auto"
      width="600"
      height="600"
      >
        <h1 class="text-center">Coaches Bio's Coming soon!</h1>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default{
  name:'Coaches',
  data(){
    return{
      isFlipped: false,
      coaches:[
        {name:'Ty Flannagen', description:'As a youth I was blessed with coaches that wanted not only the best for me and other players on the field but off the field most importantly. Coaches that taught me a lot of life lessons that kept me going throughout all these years! Coaches that pushed me to be the best me! Coaches that built not only a team bond for players but also for the parents … where our team was truly more than just a football team we were a family. Coaches that wanted kids like me that wasn’t able to pay to play because of struggles we were faced with in life… came out of their own pocket to keep us with them ! We were truly blessed and this was a culture built from 9 years old all the way up to high school! One of the coaches who became a father figure to me ( Ben Arave ) Always taught me ( IT’S BETTER TO GIVE THAN RECEIVE ) this is something if you truly know me I live my life by helping out other wanting nothing in return at all.' , imagePath:'/images/ty-headshot1.jpeg', isFlipped: false,},
        {name:'Cory LastName', description:'this is the description',imagePath:'/images/cory-headshot.jpeg', isFlipped:false,},
        {name:'Josh LastName', description:'this is the description',imagePath:'/images/josh-headshot.jpeg', isFlipped: false,},
        {name:'Nik Lyons', description:'this is the description',isFlipped: false}
      ]
    }
  },
  methods: {
    flipCard(index) {
      this.coaches[index].isFlipped = !this.coaches[index].isFlipped;
    },
  },
}
</script>
<style>
.image-container {
  position: absolute;
  width: 100%;
  height: 100%;
}

.background-image {
  width: 100%; /* Set to 100% to ensure it covers the container */
  max-height: 400px; /* Adjust the max-height as needed */
  object-fit: cover;
 
}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 50%;
  background: rgba(0, 0, 0, 0.5); /* Adjust the opacity as needed */
}

.text-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  padding: 20px; /* Add padding for spacing */
  color: white; /* Text color */
}

.text-container h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.text-container p {
  font-size: 16px;
  line-height: 1.6;
}



.flip-card {
  perspective: 1000px;
}

.flip-card-inner {
  width: 100%;
  height: 100%;
  transition: transform 0.5s;
  transform-style: preserve-3d;
}

.flip-card-inner.flipped {
  transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: hidden;
}

.flip-card-front {
  /* Front face styles */
}

.flip-card-back {
  transform: rotateY(180deg);
  /* Back face styles */
}

.card-background-img {
  object-fit: cover;
}

/* Additional styling for card content */
.v-card__title,
.v-card__subtitle,
.v-card__text {
  color: white; /* Example: Set text color to white */
}
</style>