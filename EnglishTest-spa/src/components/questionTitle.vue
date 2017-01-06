
<template>
    <div class="mar">
        <h4 class="question-top-title">
            <span>
                {{txt}}
            </span>
        </h4>
    </div>
	 
</template>

<script type="text/javascript">
	export default {
		name:'questionTitle',
		props:['txt']
	}

</script>
<style type="text/css" scoped>
.question-top-title{
  width: 87.5%;
  color: #2d2d2d;
  font-size: 0.5rem;
  padding-bottom: 0.32rem;
  padding-top: 0.32rem;

}
.question-top-title span {
    display: block;
    background: url("../assets/images/img11-9-2.png") no-repeat left center;
    background-size: auto 0.65rem;
    padding-left: 0.5rem;
}
</style>















