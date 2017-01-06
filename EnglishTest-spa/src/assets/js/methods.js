

/*************************************************************************************************
												公用方法
***************************************************************************************************/


/***************
失去焦点提示测验
*/
function doCheck(type,json){
	var el = json.event.target.parentElement;
    var elClass = el.className;
    var nowEl = json.event.currentTarget;
	switch (type){
		case 'empty': 		//非空验证方法
			(json.val =='') ? checkClassError() : checkClassTrue();
		break;
		case 'number':     //数字格式验证方法
		    ( !oCheckNumber(json.val) ) ? cleanAndError() :checkClassTrue();
		break;
		case 'id':		   //身份证格式验证方法    
		    ( !oCheckId(json.val) ) ? cleanAndError() :checkClassTrue();
		break;
		default:break;

	}


	function checkClassError(){
		if(!hasClass(el, 'error')){
		    el.className=elClass+' '+'error'
		}
	}
	function checkClassTrue(){
		if(hasClass(el, 'error')){
		    removeClass(el, 'error');
		}
	}
	function cleanAndError(){
		json.val = '';
		        nowEl.value = '';
		        if(!hasClass(el, 'error')){
		            el.className=elClass+' '+'error'
		}
	}

}

		    

/*************************************************************
 * 提交验证
 */
 //验证基本信息页
 function submitBase(state){
	var oCheckBase = state.form.yanzheng.checkBase = 0,	//判断未通过个数
        oBase = state.form.basic;

    if(isNaN( state.form.basic.age)){  state.form.basic.age=''}
    if(isNaN( state.form.basic.tel)){  state.form.basic.tel=''}
    if(!oCheckId(state.form.basic.idNumber)){  state.form.basic.idNumber=''}
    if(isNaN( state.form.basic.parentTel)){  state.form.basic.parentTel=''}

    //验证基本资料
    testFn(oBase,oCheckBase,state);
    if (!state.oCheckReturnFalse) {return false};

 }


//验证有几条格式错误
function testFn(obj,obj2,state){
     state.oCheckReturnFalse = false;
	for( var js in obj){
		if(obj[js] ==''){
			obj2++;
		}    		
	}

    if(obj2 >0){
        var html = '有'+obj2+'条信息没有填写';
        alert(html);
        state.oCheckReturnFalse =false;
    }else{
    	state.oCheckReturnFalse = true;
	    var formMsg = state.form;    
	    localStorage.setItem("formMsg", JSON.stringify(formMsg));    
    }
}


//添加class
function hasClass(obj, cls) {
    return obj.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
}
//移除class
function removeClass(obj, cls) {
    if (hasClass(obj, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        obj.className = obj.className.replace(reg, ' ');
    }
}

//验证数字
function oCheckNumber(oNumber){
    var oMailreg = /^[0-9]*$/;
    if (oMailreg.test(oNumber) && (oNumber!='') ) {
        return true;
    }else{
        return false;
    };
};
//验证身份证
function oCheckId(oId){
    var oMailreg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
    if (oMailreg.test(oId)) {
        return true;
    }else{
        return false;
    };
};

/****************
	切换路由
****************/
function changeRoute(state,obj) {
    state.routeWhere={'home':false,'base':false,'words':false,'grammar':false,'spoken':false,'computing':false,'success':false,'fail':false};
    state.routeWhere[obj] = true;
}




 var methodsFn ={
	doCheck:doCheck,
	hasClass:hasClass,
	removeClass:removeClass,
	oCheckNumber:oCheckNumber,
	oCheckId:oCheckId,
	submitBase:submitBase,
	testFn:testFn,
	changeRoute:changeRoute
 }

 module.exports.methodsFn = methodsFn;