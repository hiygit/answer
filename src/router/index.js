import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import Item from '@/components/item'
import Home from '@/page/home'
import Answer from '../page/answer'
import Score from '../page/score'

Vue.use(Router)

export default new Router({
	mode:"history",
  routes: [
    {
    	// webpack里面的代码分割  require.ensure  作用：有利于代码维护  性能(页面加载速度快)
      path:'/',
      name:'app',
      component:App,
      children:[
      	{
      		path:"/home",
      		name:"home",
      		// r=>render  代码分割      ! = 路由懒加载
      		component:r=>require.ensure([],()=>require("../page/home.vue"),"home")
      	},
      	{
      		path:"/answer",
      		name:"answer",
      		// r=>render  代码分割      ! = 路由懒加载
      		component:r=>require.ensure([],()=>require("../page/answer.vue"),"home")
      	},
      	{
      		path:"/score",
      		name:"score",
      		// r=>render  代码分割      ! = 路由懒加载
      		component:r=>require.ensure([],()=>require("../page/score.vue"),"home")
      	},
      ]
    }
  ]
})
