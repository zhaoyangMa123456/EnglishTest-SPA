<template>
	<div id="final-score-container">
		<p >
			您的成绩是：
			<strong>
				{{ scoreAnimate }}
			</strong>			
		</p>		
	</div>
</template>

<script type="text/javascript">
import store from "../store/store"
import {mapState,mapMutations} from 'vuex'

export default{
	name:'success',
	components:'finalScore',
	store,
	data(){
		return {
			scoreAnimate:0
		}
	},
	computed:{
		...mapState([
			'form'

		])
	},
	created:function(){
		var This = this;
		if(This.scoreAnimate < This.form.finalScore){
			var oTimer = setInterval(function(){
				if(This.scoreAnimate < This.form.finalScore){
					This.scoreAnimate++
				}else{
					clearInterval(oTimer)
				}
			},30)
		}
	}

}


</script>

<style type="text/css" scoped>
#final-score-container{
	position: absolute;
	width: 100%;
	text-align: center;
	left: 0;
	bottom: 20px;
}
#final-score-container p{
	font-size: 0.5rem;
	line-height: 1rem;
}
#final-score-container p strong{
	font-size: 0.8rem;
}

</style>