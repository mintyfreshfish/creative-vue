<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/letters">Letters</router-link>
    </div>
    <router-view/>
  <div id='footer'><a href="https://github.com/mintyfreshfish/creative-vue"><h2>github</h2></a></div>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color:#395884;
  margin: -10px;
}

#nav {
  padding: 30px;
  background-color: #61aad8
}

#nav a {
  font-weight: bold;
  color: #395884;
}

#nav a.router-link-exact-active {
  color:#f3f1f2
}

button {
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #61aad8;
  color: #f3f1f2;
}
input {
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 20px;
  background-color: #ae664d;
  color: #f3f1f2;
  height: 50px;
}

#footer {
  position: fixed;
  bottom: 0px;
  text-align: center;
  font-size: 20px;
  background-color: #395884;
  color: white;
  width: 100%;
  margin-top: 500px;
}

a {
  text-align: center;
}

h2 {
  text-align: center;
}

</style>
