<template>
	<image 
		v-bind:show.sync="isShow"
		v-bind:src="url"></image>
		
	<btn type="primary" v-on:click="isShow == true">查看图片</btn>
</template>

<script type="text/javascript">
	export default {
		data(){
			return{
				isShow: false,
				url: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1490876145162&di=9f0a29cf4f7345192c00ae24591c5d1b&imgtype=0&src=http%3A%2F%2Fimg05.tooopen.com%2Fimages%2F20141231%2Fsy_78119214412.jpg"
			}
		},
		methods: {

		}
	}
</script>