<template>
  <div class="links">
    <router-link to="/">Reaction timer</router-link>
    <router-link to="/signup">Signup form</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view/>
</template>

<style>
    .links router-link {
      background-color: white;
      color: aqua;
    }
</style>
