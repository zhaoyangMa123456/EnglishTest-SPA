import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//--------------引入外部文件
//引入css
require("./assets/css/main.css");
require("./assets/css/animate.min.css");
//初始化设置rem
require("./assets/js/remSize.js");


//----------------引入vue模块文件
//引入页面
import Home from './pages/home.vue'
import QuestionBase from './pages/questionBase.vue'
import QuestionWords from './pages/questionWords.vue'
import QuestionGrammar from './pages/questionGrammar.vue'
import QuestionSpoken from './pages/questionSpoken.vue'
import Computing from './pages/computing.vue'
import Success from './pages/success.vue'
import Fail from './pages/fail.vue'
import ErrorPage from './pages/errorPage.vue'
//引入vuex
import store from './store/store'
import { mapState,mapMutations } from 'vuex'



//设置路由
const router  = new VueRouter({
	mode:'history',
	base:__dirname,
	routes:[
		{path:'/',component:Home},
		{path:'/questionBase',component:QuestionBase},
		{path:'/questionWords',component:QuestionWords},
		{path:'/questionGrammar',component:QuestionGrammar},
		{path:'/questionSpoken',component:QuestionSpoken},
		{path:'/Computing',component:Computing},
		{path:'/Success',component:Success},
		{path:'/Fail',component:Fail},
		{path:'*',component:ErrorPage},
	]
})



new Vue({
	router,
	store,
	template:`
		<div id="root">
			<transition name="fade" mode="out-in">
				<router-view></router-view>
			</transition>
		</div>
	`,
	computed:{
		...mapState([
			'computingBoolean',
			'backHome',
			'routeWhere',
			'form'
		])
	},
	methods :{
		...mapMutations([
			'resetForm'
		]),
	},	
	watch: {
	    routeWhere:function (val) {
	      if(val.home){
	      	router.push({path: '/'})
	      }
	      else if(val.base){
	      	router.push({path: '/questionBase'})
	      }else if(val.words){
	      	router.push({path: '/questionWords'})	      	
	      }else if(val.grammar){
	      	router.push({path: '/questionGrammar'})	      	
	      }else if(val.spoken){
	      	router.push({path: '/questionSpoken'})	      	
	      }else if(val.computing){
	      	router.push({path: '/Computing'})	      	
	      }else if(val.success){
	      	router.push({path: '/Success'})	      	
	      }else if(val.fail){
	      	router.push({path: '/Fail'})	      	
	      }
	    }
	}

}).$mount('#app');


