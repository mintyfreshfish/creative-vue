<template>
  <!--make sub.text appear/disappear on click of button-->
  <div class="body">
    <form class="pure-form">
      <i class="fas fa-search"></i><input v-model="searchText" placeholder="search here" />
    </form>
    <container class="flexcontainer">
      <div class="flexchild" v-for="sub in filtered_A" :key="sub.id">
        <!-- <h2> {{ letter.firstName }} </h2> -->
        <h3> {{ sub.id }} </h3>
        <p> {{ sub.tag }} </p>
        <button @click="fillLetter(sub.text)"> Read Letter </button>
        <!--//region [rgba(191, 170, 70, 0.2)] -->
        <!-- <p v-if="showing"> {{ sub.text }} </p> end region  -->
      </div>
      <div class="flexchild" v-for="sub in filtered_B" :key="sub.id">
        <!-- <h2> {{ letter.firstName }} </h2> -->
        <h3> {{ sub.id }} </h3>
        <p> {{ sub.tag }} </p>
        <button @click="fillLetter(sub.text)"> Read Letter </button>
        <!--//region [rgba(191, 170, 70, 0.2)] -->
        <!-- <p v-if="showing"> {{ sub.text }} </p> end region  -->
      </div>
      <div class="flexchild" v-for="sub in filtered_C" :key="sub.id">
        <!-- <h2> {{ letter.firstName }} </h2> -->
        <h3> {{ sub.id }} </h3>
        <p> {{ sub.tag }} </p>
        <button @click="fillLetter(sub.text)"> Read Letter </button>
        <!--//region [rgba(191, 170, 70, 0.2)] -->
        <!-- <p v-if="showing"> {{ sub.text }} </p> end region  -->
      </div>
      <div class="flexchild" v-for="sub in filtered_D" :key="sub.id">
        <!-- <h2> {{ letter.firstName }} </h2> -->
        <h3> {{ sub.id }} </h3>
        <p> {{ sub.tag }} </p>
        <button @click="fillLetter(sub.text)"> Read Letter </button>
        <!--//region [rgba(191, 170, 70, 0.2)] -->
        <!-- <p v-if="showing"> {{ sub.text }} </p> end region  -->
      </div>
    </container>
    <div id="letterBody" v-if="showing">{{letterText}}</div>
  </div>
</template>

<style scoped>
  .flexcontainer {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: stretch;
    align-content: space-around;
  }

  .flexchild {
    width: 25%;
    margin: 10px;
    margin-top: 60px;
    margin-bottom: 60px;
    padding: 30px;
  }

  p {
    height: 60px;
  }

  #letterBody {
    padding: 100px;
    text-align: left;
    background-color: #395884;
    color: #f3f1f2;
  }

</style>

<script>
  export default {
    name: 'Letters',
    props: {
      letters: Array
    },
    data() {
      return {
        showing: false,
        searchText: '',
        letterText: ''
      }
    },
    methods: {
      toggle() {
        if (this.showing === true) {
          this.showing = false
        } else {
          this.showing = true
        }
      },
      fillLetter(text) {
        this.letterText = text
        this.showing = true;
      }
    },
    computed: {
      filtered_A() {
        return this.letters[0].letters.filter((sub) => {
          return sub.tag.toLowerCase().match(this.searchText)
        })
      },
      filtered_B() {
        return this.letters[1].letters.filter((sub) => {
          return sub.tag.toLowerCase().match(this.searchText)
        })
      },
      filtered_C() {
        return this.letters[2].letters.filter((sub) => {
          return sub.tag.toLowerCase().match(this.searchText)
        })
      },
      filtered_D() {
        return this.letters[3].letters.filter((sub) => {
          return sub.tag.toLowerCase().match(this.searchText)
        })
      },

    }
  }
</script>