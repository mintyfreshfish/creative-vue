<template>
  <div :class="background">
    <h1 :class="color">Colors!</h1>
    <p :class="color">Enter a (common) color in the box below</p>
    <input v-model="color" placeholder="text color">
    <!-- <p>Background:</p> -->
    <!-- <input v-model='background' placeholder="text color"> -->
    
  </div>
</template>

<style>
  .red {
    color: red;
  }

  .orange {
    color: orange;
  }

  .yellow {
    color: yellow;
  }

  .green {
    color: green;
  }

  .blue {
    color: blue;
  }

  .purple {
    color: purple;
  }

  .black {
    color: black;
  }

  .white {
    color: white;
  }

  .bk-red {
    background-color: red;
  }

  .bk-orange {
    background-color: orange;
  }

  .bk-yellow {
    background-color: yellow;
  }

  .bk-green {
    background-color: green;
  }

  .bk-blue {
    background-color: blue;
  }

  .bk-purple {
    background-color: purple;
  }

  .bk-black {
    background-color: black;
  }

  .bk-white {
    background-color: white;
  }

  input {
    width: 500px;
      box-sizing: border-box;
  border: 3px solid #ccc;
  -webkit-transition: 0.5s;
  transition: 0.5s;
  outline: none;
  }
</style>

<script>
  export default {
    name: 'About',
    components: {},
    data() {
      return {
        value: '',
        color: '',
        background: 'bk-'+'',
        showing: false
      }
    },
    methods: {
    Toggle() {
      if (this.showing === 'false') {
        this.showing = true;
      }
      else {
        this.showing = false;
      }
    }
  }
  }
</script>