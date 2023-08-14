<template>
  <div class="links">
    <router-link to="/">Reaction timer</router-link>
    <router-link to="/signup">Signup form</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/data">data</router-link>
  </div>
  <router-view/>
</template>

<style>

  .links {
    display: flex;
    align-items: center;
    justify-content: center;
    
    
  }
    .links a {
      flex: 1;
  background-color: white;
  color: black;
  text-decoration: none;
  border-radius: 20px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  white-space: nowrap;
  font-weight: 500;
}

  .links a:hover {
    background-color: aqua;
  }
</style>
