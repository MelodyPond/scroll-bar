<template>
  <div id="app">
    <scroll-bar class="wrapper" :options="options">
      <div class="inner">
       <div style="height:800px"></div>
      </div>
     </scroll-bar>
  </div>
</template>

<script>
import ScrollBar from './components/ScrollBar.vue'

export default {
  name: 'App',
  components: {
    ScrollBar
  },
  data(){
    return {
      cc: ['ss'],
      options: {
        innerStyle:{
          backgroundColor: 'red',
          borderRadius: '5px',
          width: '5px'
        },
        outStyle: {
        width: '5px',
        borderRadius: '5px',
        backgroundColor: 'yellow'
      },
      level :80
      },
      
    }
  },
  methods: {
    add(){
      this.cc.push('hh')
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper{
  width:200px;height:200px;border:1px solid rgb(94, 126, 94);margin: 0 auto;
 
}
.inner{
  background-color: blueviolet;
  width:100px;
  border: 3px solid pink;
  /* height:300px; */
}
</style>
