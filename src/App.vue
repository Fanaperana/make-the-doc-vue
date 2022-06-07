<template>
  <div class="d-flex flex-column w-100 h-100">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <button class="btn btn-outline-secondary m-1 p-1">Open</button>
    </nav>
    <router-view/>
    <div class="w-100" id="footnote">
      <span>Line: 12</span>
    </div>
  </div>

</template>

<script>
import path from 'path';

export default {
  
}
</script>

<style>
@import 'highlight.js/styles/atom-one-dark.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  width: 100%;
}

nav {
  /* padding: 30px; */
  height: 50px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
