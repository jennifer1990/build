<template>
	<div class="box">
		
		<h2>基础下拉</h2>
		<div>
			<input type="text" v-model="value" placeholder="请选择">
			<ul>
				<li v-for="item in options">{{item.label}}</li>
			</ul>
		</div>

	</div>
</template>

<style lang="sass">
	.box{
		margin:50px 100px;
		border:5px solid #eee;
		padding:20px;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				options: [{
		          	value: '选项1',
		          	label: '黄金糕'
		        }, {
		          	value: '选项2',
		          	label: '双皮奶'
		        }, {
		          	value: '选项3',
		          	label: '蚵仔煎'
		        }, {
		          	value: '选项4',
		          	label: '龙须面'
		        }, {
		          	value: '选项5',
		          	label: '北京烤鸭'
		        }],
		        value:''
			}
		}
	}
</script>