<template>
	 <div class="back-btn" onclick="window.history.go(-1)">
            <img src="../assets/images/back-btn.png" alt="">
            <span id="goback">BACK</span>
     </div>
</template>

<script type="text/javascript">
	export default {
		name:'questionTitle',
		props:['txt']
	}

</script>

<style type="text/css" scoped>
#goback{
	font-size: 0.5rem;
	color: #fff;
}
</style>