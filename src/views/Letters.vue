<template>
  <div>
    <LetterList :letters="letters"/>
  </div>
</template>

<script>
  import LetterList from '../components/LetterList.vue'

  export default {
    name: 'Letters',
    components: {
      LetterList
    },
    computed: {
        letters(){
            return this.$root.$data.letters
        }
    }
  }
</script>