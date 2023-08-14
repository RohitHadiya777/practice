<template>
    <h1>API LIST</h1>

    <div class="item-div">

   <div class="list" v-for="item in allData.entries.slice(0, 40)" :key="item.API">
    {{ item.API }}
    </div>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        data() {
            return {
                allData: ""
            }
        },
        mounted() {
            axios.get('https://api.publicapis.org/entries')
            .then(res => this.allData = res.data)
        }
    }
</script>

<style>

    .item-div {
        display: flex;
        flex-wrap: wrap;
        white-space: nowrap;
    }
    .list {
        background-color: green;
        flex: 1 0 10em;
        margin: 15px;
        padding: 15px;
        
    }

    .list:hover {
        cursor: pointer;
    }
</style>