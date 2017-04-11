<template>
	<div>
		<ul class="page">
			<li class="arrow-left">&lt;</li>
			<li v-for="i in totalPage">{{ i+1 }}</li>
			<li class="arrow-right">&gt;</li>
		</ul>
	</div>
</template>

<style lang="sass">
.page{
	display: flex;
	line-height: 30px;
	li{
	    width: 30px;
    	text-align: center;
    	cursor: pointer;
    	&.active{
    		background: #c4d79b;
    	}
	}
}
	
</style> 

<script type="text/javascript">
	export default{
		data(){
			return{
				total:'', //总共数据条数
				pageSize: 10, // 每页展示多少条
				totalPage:'',
				totalPageArry:[],
				isActive:false
			}
		},
		methods:{
			// 总页数
			pageCount(){
				// debugger
				this.totalPage = this.total / this.pageSize
				
			}

		},
		ready(){
			this.total = 100  //list.length
			this.pageCount()
		}
	}
</script>