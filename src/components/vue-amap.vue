<template>
  <div class="amap-wrapper">
    <el-amap class="amap-box" :vid="'amap-vue'"></el-amap>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.amap-wrapper{
  height: 100vh;
}
</style>
