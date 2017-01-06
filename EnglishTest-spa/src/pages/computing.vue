<template>
	<div id="computing" >
		<div id="conputing-box" class="animated bounceIn">
			computing...
		</div>
		
	</div>
	

</template>

<script type="text/javascript">

import store from '../store/store'
import answer from '../store/answer.json'
import { mapState,mapMutations} from 'vuex'

export default{
	name:'computing',
	store,
	data(){
		return {
			computeTime:true
		}
	},
	methods :{
		...mapMutations([
			'doSubmit',
			'addFinalScore'
		]),
		doComput(){
			var This = this;
			this.addFinalScore(this.result) ;
			setTimeout(function(){
				if(This.result >40){
					This.doSubmit('success')
				}else{
					This.doSubmit('fail')					
				}

			},3000);
			
		}
	},	
	computed:{
		...mapState([
			'form'
		]),
		'result':function(){
			var Answer = answer;
			var uAns = this.form;
			var oResult = 0;

			for(var item in  Answer){
				switch (item){
					case 'words':
						for(var item2 in Answer[item]){

							if(Answer[item][item2] ==uAns[item][item2]){
								oResult+=5;
							}
						}

					break;
					case 'grammar':
						for(var item2 in Answer[item]){

							if(Answer[item][item2] ==uAns[item][item2]){
								oResult+=5;
							}
						}

					break;
					case 'spoken':
						for(var item2 in Answer[item]){

							if(Answer[item][item2] ==uAns[item][item2]){
								oResult+=5;
							}
						}

					break;
					default:break;
				}
			}

			
			return oResult
		}
	},

	created(){
		this.doComput();
	}




}












</script>

<style type="text/css" scoped>
	#computing{
		width: 100%;
		height: 100%;
		position: absolute;
		left: 0;
		top: 0;
	}
	#conputing-box{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		width: 100%;
		height: 100%;
	}
</style>



