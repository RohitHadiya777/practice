<template>
    <div class="block" v-if="showSquare" @click="stopTimer">
        click me
    </div>
</template>

<script>
    export default {
        props: ['delay'],
        data() {
            return {
                showSquare: false,
                timer: null,
                reactionTime: 0
            }
        },
        mounted() {
            setTimeout(() => {
                this.showSquare = true
                this.startTimer()
            }, this.delay)
        },
        methods: {
            startTimer() {
                this.timer = setInterval(() => {
                    this.reactionTime += 10
                }, 10)
            },
            stopTimer() {
                clearInterval(this.timer)
                this.$emit('rec', this.reactionTime)
            }
        }
    }
</script>

<style>
    .block {
        width: 200px;
        height: 100px;
        background: red;
        color: aqua;
        text-align: center;
        margin: 40px auto;
    } 
</style>