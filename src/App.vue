<template>
  <div id="app">
    <Crawler msg="Web Scraper"/>
  </div>
</template>

<script>
import Crawler from "./components/Crawler";

export default {
  name: "App",
  components: {
    Crawler
  }
};
</script>

<style>
html, body {
  background-color: #eee;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 20px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}
li {
  display: inline-block;
  vertical-align: top;
  margin: 10px;
  padding: 5px;
  border-radius: 10px;
  border: 1px solid #fff;
  border-bottom: 1px dashed #ccc;
  transition: background-color 0.5s ease;
  background-color: #fff;
}
li:hover {
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid #555;
  background-color: #ccc;
}
a {
  color: #42b983;
}
.left,
.right {
  clear: none;
  width: 48%;
  margin: 0;
  padding: 0;
  height: 400px;
  overflow: scroll;
  padding: 1%;
  border-radius: 10px;
}
.left {
  float: left;
}
.right {
  float: right;
  background-color: #ddd;
}
.url {
  color: #000;
}
</style>
