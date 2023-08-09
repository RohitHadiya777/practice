<template>
    <form>
        <label>Email:</label>
        <input type="email" required v-model="email">

        <label>Password:</label>
        <input type="password" required v-model="password">

        <label>Role:</label>
        <select v-model="role">
            <option value="frontend">frontend dev</option>
            <option value="backend">backend dev</option>
        </select>

        <div class="tos">
            <input type="checkbox" v-model="tos" required>
            <label>Accept terms and conditions</label>
        </div>

        <div>
            <input type="checkbox" value="a" v-model="person">
            <label>a</label>
        </div>
        <div>
            <input type="checkbox" value="b" v-model="person">
            <label>b</label>
        </div>
        <div>
            <input type="checkbox" value="c" v-model="person">
            <label>c</label>
        </div>
    </form>

    <p>Email: {{ email }}</p>
    <p>Password: {{ password }}</p>
    <p>Role: {{ role }}</p>
    <p>terms and services: {{ tos }}</p>
    <p>Names: {{ person }}</p>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                password: '',
                role: '',
                tos: true,
                person: []
            }
        }
    }
</script>


<style>
    form {
        width: 750px;
        height: 500px;
        background-color: white;
        color: black;
        text-align: left;
        margin: 30px auto;
        padding: 40px;
    }

    label {
        display: inline-block;
        letter-spacing: 2px;
        font-size: 20px;
        margin: 15px 0 10px;
    }

    input {
        display:block;
        width: 100%;
        border: none;
        padding: 30px 10px;
        box-sizing: border-box;
    }

    input[type="checkbox"] {
        display: inline-block;
        width: 16px;
        
    }
</style>