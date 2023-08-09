<template>
  <h1>Reaction timer</h1>

  <div>
    <button type="button" @click="start" :disabled="isPlaying">Play</button>
  </div>
  <Square v-if="isPlaying" :delay="delay" @rec="newRec"/>
  <Result v-if="showResults" :score="score"/>
</template>

<script>
  import Square from "./Square.vue"
  import Result from "./Result.vue"
  
  export default {
    name: 'Block',
    components: { Square, Result },
    data() {
      return {
        isPlaying: false,
        delay: null,
        score: null,
        showResults: false
      }
    },
    methods: {
      start() {
        this.delay = 1000 + Math.random() * 5000
        this.isPlaying = true
        this.showResults = false
      },
      newRec(reactionTime) {
        this.score = reactionTime
        this.isPlaying = false
        this.showResults = true
      }
    }
  }
</script>
