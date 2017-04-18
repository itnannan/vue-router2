import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import VueResource from 'vue-resource'
import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
Vue.use(Element)
//开启debug模式
//Vue.config.debug = true;


Vue.use(VueRouter);
Vue.use(VueResource);

//定义组件
//const First = {template:'<div><h2>我是第一个子页面</h2></div>'}
import home from './component/home.vue'
import paths from './component/paths.vue'
import courses from './component/courses.vue'
import bootcamp from './component/bootcamp.vue'
import courseall from './component/courseall.vue'
import coursepreview from './component/coursepreview.vue'
import coursedevelop from './component/coursedevelop.vue'
//创建一个路由器实例
//并且配置路由规则

const router = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{
			path:'/home',
			component:home
		},
		{
			path:'/paths',
			component:paths
		},
		{
			path:'/courses',
			component:courses,
			children:[
				{path:'/courses/all',component:courseall},
				{path:'/courses/preview',component:coursepreview},
				{path:'/courses/develop',component:coursedevelop}
			]
		},
		{
			path:'/bootcamp',
			component:bootcamp
		}
	]
})
const app = new Vue({
	router:router,
  render: h => h(App)
}).$mount('#app')
