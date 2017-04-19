
<template>
  <div id="app">
    <img src="./assets/images/dog.jpg">
   <h3>vue-router</h3>
   <ul>
     <li><router-link to="/home">首页</router-link></li>
     <li><router-link to="/paths">路径</router-link></li>
     <li><router-link to="/courses">课程</router-link></li>
     <li><router-link to="/bootcamp">课程夏令营</router-link></li>
   </ul>
   <router-view></router-view>  
  </div>
</template>

<script>
import home from './component/home.vue'
import paths from './component/paths.vue'
import courses from './component/courses.vue'
import bootcamp from './component/bootcamp.vue'
import courseall from './component/courseall.vue'
import coursepreview from './component/coursepreview.vue'
import coursedevelop from './component/coursedevelop.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  
  components:{home,paths,courses,bootcamp,courseall,coursepreview,coursedevelop}
}
</script>

<style>
 @import './assets/css/bootstrap.css';
  @import './assets/css/font.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
