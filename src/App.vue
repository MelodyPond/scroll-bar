<template>
  <div id="app">
    <scroll-bar class="wrapper" :options="options">
      <div class="inner">
        <div style="height:800px">
          <div>Demo :D</div>
          <div>Hi~ there</div>
        </div>
      </div>
     </scroll-bar>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return {
      options: {
        innerStyle:{
          backgroundColor: 'rgb(129,216,207)',
          borderRadius: '5px',
          width: '5px'
        },
        outStyle: {
        width: '5px',
        borderRadius: '5px',
        backgroundColor: '#fff'
      },
      level :80
      },
      
    }
  },
  methods: {
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
  width:200px;height:200px;margin: 0 auto;
  border: 1px solid rgb(189, 186, 186)
}
.inner{
  background-color: rgb(252, 199, 208);
  width:100px;
  padding: 0;
  margin:0;
}
</style>
