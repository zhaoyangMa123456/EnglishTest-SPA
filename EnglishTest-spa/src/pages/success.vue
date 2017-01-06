<template>
	<div id="seccess-container">
		<img src="../assets/images/success-img.png" alt="">
		<div>
				<finalScore></finalScore>		
		</div>
	</div>
</template>



	
<script type="text/javascript">

import store from "../store/store"
import {mapState,mapMutations} from 'vuex'
import finalScore from '../components/finalScore.vue'


export default{
	name:'success',

	store,
	components:{
		finalScore		
	},
	computed:{
		...mapState([
			'form'

		])
	},
	created:function(){
		console.log(this.form)

	}
}

</script>




<style type="text/css" scoped>
	#seccess-container{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	#seccess-container img{
		width: 50%;
	}
</style>











