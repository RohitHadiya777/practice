<template>
    <p>Reaction time - {{ score }} ms</p>
    <p>{{ rank }}</p>
</template>

<script>
    export default {
        props: ['score'],
        data() {
            return {
                rank: null
            }
        },
        mounted() {
            if(this.score < 250) {
                this.rank = "impressive"
            } else if (this.score < 1000) {
                this.rank = "nice"
            } else {
                this.rank = "pathetic"
            }
        }
    }
</script>