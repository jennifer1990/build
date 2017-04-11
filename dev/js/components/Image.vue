<template>

<div class="image-box" v-show="show">
	<img v-bind:src="url">
	<i class="iconfont" v-on:click="close">&#xe60d;</i>
</div>

</template>

<script type="text/javascript">
	export default {
		props: {
			show: { type: Boolean, default: false },
			url: { type: String, default: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490876145162&di=9f0a29cf4f7345192c00ae24591c5d1b&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141231%2Fsy_78119214412.jpg"}
		},
		data(){
			return{

			}
		},
		methods: {
			close(){
				this.show = false;
			}
		}
	}
</script>