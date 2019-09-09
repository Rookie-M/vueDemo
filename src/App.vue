<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <h3 class="title">{{ msg }}</h3> -->
    <!-- <div class="amap-wrapper">
      <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
    </div> -->
    <VueAmap></VueAmap>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'


import VueAmap from './components/vue-amap.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    VueAmap
  },
  data(){
    return{
      msg: 'vue-amap'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: red;
  /* margin-top: 60px; */
  height: 100vh;
}
.amap-wrapper{
  width: calc(100vw - 100px);
  width: 100vw;
  height: 100vh;
}
</style>
