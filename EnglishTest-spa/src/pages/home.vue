
<template>
	<div class="root-container" id="home-container">
		<Banner></Banner>
		<div id="submit-btn"  :class=" { animated:isMove,bounceIn:isMove2,active:isMove3 } ">
			<input value="马上答题"   type="submit" @click="goBase()">					
		</div>

	</div>
</template>


<style type="text/css" scoped>
#banner{
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
}
#home-container{
	background-size: cover;
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;

}
#submit-btn{
	width: 100%;
	position: absolute;
	top: 60%;
	z-index: 10;
	text-align: center;
	line-height: 100%;
	color: #fff;
	display: none;
}
#submit-btn.active{
	display: block;
}
#submit-btn input{
	color: #01b6e1;
	display: block;
	width: 50%;
	margin: 0 auto;
	line-height: 1.5;
	background: rgba(255,255,255,0.8);
	border-radius: 10px;
}
</style>

<script type="text/javascript">
import Banner from "../components/Banner.vue"
import { mapState,mapMutations} from 'vuex'

export default {
	name : 'app',
	data(){
		return {
			msg:"马上答题",
			isMove:false,
			isMove2:false,
			isMove3:false
		} 
	},
	components:{
		Banner
	},
	methods :{
		...mapMutations([
			'goBase'
		]), 
	},
	created(){
		var This = this;
		setTimeout(function(){
			This.inMove = true;
			This.isMove2 = true;
			This.isMove3 = true;
		},1000)
	}

}





</script>



























