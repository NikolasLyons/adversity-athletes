<template>
  <v-container>

    <div v-for="(coach, i) in coaches">

      <v-avatar :image="coach.imagePath" rounded="0" size="80"></v-avatar>
      <p>{{ coach.description }}</p>
    </div>
  </v-container>
</template>
<script>
export default {
  name: 'Coaches',
  data() {
    return {
      isFlipped: false,
      coaches: [
        { name: 'Ty Flannagen', description: "A little bit about coach Ty: Former Idaho state running back, Hula bowl all star game, Big sky all conference for multiple years, Bachelor of science: physical education with a minor in coaching. After graduation coach Ty helped Idaho state coaches and learned from them on the take’s of being a D1 football coach . 7v7 coach for 208 platinum, Football fanaticAs a youth I was blessed with coaches that wanted not only the best for me and other players on the field but off the field most importantly. Coaches that taught me a lot of life lessons that kept me going throughout all these years! Coaches that pushed me to be the best me! Coaches that built not only a team bond for players but also for the parents … where our team was truly more than just a football team we were a family. Coaches that wanted kids like me that wasn’t able to pay to play because of struggles we were faced with in life… came out of their own pocket to keep us with them ! We were truly blessed and this was a culture built from 9 years old all the way up to high school! One of the coaches who became a father figure to me ( Ben Arave ) Always taught me ( IT’S BETTER TO GIVE THAN RECEIVE ) this is something if you truly know me I live my life by helping out other wanting nothing in return at all.", imagePath: '/images/ty-headshot1.jpeg', isFlipped: false, },
        { name: 'Cory LastName', description: "Quote: Body language is a billboard for your character. I have coached youth sports for 5 years, mostly basketball and football. I was Raised in a small town, where I developed a love for football from an early age Growing up in a town where Friday nights were the highlight of the week, I discovered my passion for the game playing 8-man football. Our close-knit team raised an intense sense of camaraderie and sportsmanship that would shape my coaching philosophy in the years to come. In a town where resources for coaching were limited, and not able to play competitively until the 7th grade, I have a burning desire to give the kids the opportunities I wasn't blessed with. I took it upon myself to learn the details of the game. Studying playbooks, attending online coaching clinics, and seeking guidance from social media groups, I transformed the lack of resources into an opportunity for growth.", imagePath: '/images/cory-headshot.jpeg', isFlipped: false, },
        { name: 'Josh LastName', description: "With a lifelong passion for football, I started my journey at the age of 7, dedicating years to the sport until wrapping up my career with back-to-back state championships at McQueen High School in Reno, NV. I have been an unwavering 49ers fan never missing a game on tv or radio since 1984. My commitment to the game extends beyond the stands. I've been fortunate to coach my younger brother in my youth for 5 years and now my son for another 5 years. Growing up football was always on my mind, creating brain testing coaching games against my brother.  Studying & pitting offense vs defense against each other to see who could win each down. Outside of football my life revolves around providing for my wife Jamie of 18 years and son James.  I am devoted to seeing them happy each and every day even if it takes one too many dad jokes. I have worked at UPS for 23 years & currently am a full-time dispatch supervisor designing routs to ensure optimal travel time between deliveries. As a football coach, I aim to instill proper technique and discipline, fostering accountability both on and off the field. My ultimate goal is to mold not just skilled athletes, but individuals who exemplify leadership both in football and as exemplary humans.", imagePath: '/images/josh-headshot.jpeg', isFlipped: false, },
        { name: 'Nik Lyons', description: "My Love for football started when I was 7 years old. Baseball was my first ever sport and though it was fun, I quickly realized that it wasn't for me. As a kid I always had a chip on my shoulder and needed a way to let out any aggression I had. Once I strapped the pads for the first time ever, my life changed. I grew committed to becoming the best football player I could. My past coaches molded me into the athlete and the person I am today. I was lucky enough to get scholarship to play at the College of Idaho and be part of the growth of that program with bringing back football to the community of Caldwell. Ive received numerous awards and recognition in the NAIA community. As my college career came to and end, I need to find a way to give back to the community with my knowledge of sports and athletics. I spent one year as a GA at the College of Idaho then transitioned to working with younger athletes. I was a performance coach at Off the Field and they, I grew my passion for working with younger athletes. I then started my own 7v7 team, Reign Academy, with a close friend of mine. My Goal in life it to spread what I know to the youth and develop our youth into fine adults!", imagePath: '/images/nik.jpeg', isFlipped: false }
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
  width: 100%;
  /* Set to 100% to ensure it covers the container */
  max-height: 400px;
  /* Adjust the max-height as needed */
  object-fit: cover;

}

.overlay {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  width: 50%;
  background: rgba(0, 0, 0, 0.5);
  /* Adjust the opacity as needed */
}

.text-container {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 50%;
  padding: 20px;
  /* Add padding for spacing */
  color: white;
  /* Text color */
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
  color: white;
  /* Example: Set text color to white */
}</style>