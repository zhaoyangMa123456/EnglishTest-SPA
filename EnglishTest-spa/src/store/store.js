
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


var commonMethods = require('../assets/js/methods');    //公用方法函数
var form = require('./form.json');						//提交表单数据

if (window.localStorage.formMsg) {						//退出后数据保存
	var oformMsg =  JSON.parse(localStorage.getItem('formMsg'));
	form = oformMsg;
}

const state = {
	jumpTime:3000,
	form:form,
	routeWhere:{						//路由切换
		'home':false,
		'base':false,
		'words':false,
		'grammar':false,
		'spoken':false,
		'computing':false,
		'success':false,
		'fail':false
	},
	oCheckReturnFalse:false
}
const mutations = {	

	checkEmpty(state,json){			//验证非空
		commonMethods.methodsFn.doCheck('empty',json);
	},     		                              
	checkNumber(state,json){		//验证数字
		commonMethods.methodsFn.doCheck('number',json);			
	},
	checkId(state,json){			//验证身份证号
		commonMethods.methodsFn.doCheck('id',json);
	},

	doSubmit(state,whichPage){		//提交
		switch (whichPage){
			
			case "base": 			//基本信息页面提交
				commonMethods.methodsFn.submitBase(state);
				if (!state.oCheckReturnFalse) { return false};

				commonMethods.methodsFn.changeRoute(state,'words')  //切换路由 
				break;

			case "words" : 			//词汇页面提交
				commonMethods.methodsFn.testFn(state.form.words,form.yanzheng.checkWords= 0,state);
				if (!state.oCheckReturnFalse) {return false};					
				commonMethods.methodsFn.changeRoute(state,'grammar')    
				break;

			case "grammar": 			//语法页面提交
				commonMethods.methodsFn.testFn(state.form.grammar,form.yanzheng.checkGrammar= 0,state);
				if (!state.oCheckReturnFalse) {return false};
				commonMethods.methodsFn.changeRoute(state,'spoken')    
				break;

			case "spoken": 			//口语页面提交
				commonMethods.methodsFn.testFn(state.form.spoken,form.yanzheng.checkSpoken= 0,state);		
				if (!state.oCheckReturnFalse) {return false};
				localStorage.removeItem('formMsg');
				commonMethods.methodsFn.changeRoute(state,'computing')    
				break;

			case "success": 
				commonMethods.methodsFn.changeRoute(state,'success')    
				break;

			case "fail": 
				commonMethods.methodsFn.changeRoute(state,'fail')    
				break;

			default:break;
		}
	},
	goBackHome(state){		//延迟返回首页
		setTimeout(() =>{
			commonMethods.methodsFn.changeRoute(state,'home')   
		},3000);		
	},
	goBase(state){
		commonMethods.methodsFn.changeRoute(state,'base')   
	},
	addFinalScore(state,score){
		state.form.finalScore = score
	}
}



export default new Vuex.Store({
	state,
	mutations
})

