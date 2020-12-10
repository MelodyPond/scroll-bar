# scroll-bar
# 用法

## 1. 安装
npm install --save cool-vue-scrollbar

## 2. 使用
### main.js 全局
import coolscrollBar from 'cool-vue-scrollbar'
Vue.use(coolscrollBar)

### 组件中：
### example
```
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

export default {
  name: 'App',
  data(){
    return {
      options: {
        innerStyle:{ // 这里是滑块的样式
          backgroundColor: 'red',
          borderRadius: '5px',
          width: '5px'
        },
        outStyle: { //包裹滑块的容器样式
        width: '5px',
        borderRadius: '5px',
        backgroundColor: '#fff'
      },
      level :80  //鼠标滚动时滑块移动的级别，默认是20px
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
  width:200px;
  height:200px;
  border:1px solid rgb(94, 126, 94);
  margin: 0 auto;
}
.inner{
  background-color: blueviolet;
  width:100px;
  border: 3px solid pink;
}
</style>
```