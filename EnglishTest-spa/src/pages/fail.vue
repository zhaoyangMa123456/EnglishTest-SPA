

<template>
	<div id="fail-container">
		<img src="../assets/images/fail-img2s.png" alt="">
		<div>
				<finalScore></finalScore>		
		</div>
	</div>
</template>

	
<script type="text/javascript">
import finalScore from '../components/finalScore.vue'
export default{
	name:'success',
	components:{
		finalScore
	}

}




</script>

<style type="text/css" scoped>
	#fail-container{
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 0;
		left: 0;
		height: 100%;
		width: 100%;
	}
	#fail-container img{
		width: 50%;
	}
</style>
