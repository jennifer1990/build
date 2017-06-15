<template>
	<div class="txt-box">
		<p class="article" :style="{'height':isShow ? 'auto' : '66px'}">
			其实这个世界上，并没有什么是一定可以伤害到你的事情。只要你足够的冷酷，足够的漠然，足够对一切事情都变得不再在乎。只要你慢慢地把自己的心，打磨成一粒光滑坚硬的石子。只要你把自己当作已经死了。那么，这个世界上，就再也没有东西可以伤害到你了。</p>
		<div class="shrink" @click="showHidden" v-text="isShow ? '收起' : '展开' "></div>
	</div>
</template>

<style type="text/css">
	.txt-box{
		border: 10px solid #eee;
	    margin: 100px;
	    padding: 10px;
	    width: 300px;
	}
	.article{
		text-indent: 2em;
		overflow: hidden;
		height: 66px;
	}
	.shrink{
		margin-top: 20px;
	    color: yellowgreen;
	    text-align: center;
	    border-top: 1px solid #eee;
	    padding-top: 10px;
	    cursor: pointer;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				isShow : false,
			}
		},
		methods:{
			showHidden(){
				this.isShow = !this.isShow
			}
		}
	}
</script>




