<template>
  <div class="home">
    <h1>But can you get the points?</h1>
    <h2 v-if="!showing">Point Total:</h2>
    <p v-if="!showing">{{ points }}</p>
    <button id="clickButn" @click="points +=1" v-if="!showing">Click here</button>
    <button @click="toggle()" id="startBtn" v-if="showing">Start Game</button>
    <h3 id="timer" v-if="!showing">{{ timerCount }}</h3>
    </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
      return {
        points: 0,
        timerCount: -3,
        showing: true,
      }
    },
    watch: {
      timerCount: {
        handler(value) {
          if(value > 0) {
            setTimeout(() => {
              this.timerCount--;
            }, 1000);
          }
          else if(value===0) { this.endGame()}
        },
        immediate:true
      }
    },
    methods: {
      counDownTimer () {
        if(this.countDown > 0 ) {
          setTimeout(() => {
            this.coundDown -= 1
            this.coundDownTimer()
          }, 1000)
        }
        else { this.endGame() }
      },
      toggle() {
        if (this.showing === true) {
          this.showing = false
          this.timerCount = 10;
        }
        else {this.showing = true}
      },
      endGame() {
          this.toggle()
          alert(`you got ${this.points} points`)
      },
    },
  }
</script>