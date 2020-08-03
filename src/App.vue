<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Cards</router-link> |
      <router-link to="/add">Add a card</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
html {
  background-color: #2c3e50;
}

#app {
  font-family: "Montserrat", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
}

#nav {
  padding: 30px;
}

a {
  font-weight: bold;
  color: white;
}

a.router-link-exact-active,
a:hover {
  color: #42b983;
}
</style>
