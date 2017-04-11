<template>
	<div class="L-box">
		<div class="L-box">
			<ul class="store-list">
				<li v-for="item in cusStoreList" :class="{'active':item.isChecked || check}" @click="checkedStore($index)">{{item.name}}{{item.isChecked}}</li>
			</ul>
			<div class="btn-group">
				<span>重选</span>
				<span @click="allChecked">全选</span>
				<span><btn type="primary" :plain="true">取消</btn></span>
				<span><btn type="primary">确定</btn></span>
			</div>
		</div>

		<div>选中的门店：{{checkedStores}}</div>
	</div>
</template>

<style type="text/css">
	.L-box{
		border: 10px solid #eee;
		margin:100px;
		padding: 20px;
	}
	.store-list{
		margin-bottom: 20px;
	}
	.store-list li{
		display: inline-block;
	    padding: 0 20px;
	    background: #eee;
	    border-radius: 4px;
	    border: 1px solid #eee;
	    height: 36px;
	    line-height: 36px;
	    cursor: pointer;
	}
	.store-list li.active{
		background: transparent;
	    border: 1px solid yellowgreen;
	    color: yellowgreen;
	    
	}
	.store-list li + li {
		margin-left: 20px;
	}
	.btn-group{
		color: #2196F3;
	}
	.btn-group{
		text-align: right;
	}
	.btn-group > span{
		cursor: pointer;
	}
	.btn-group > span + span{
		margin-left: 10px;
	}
</style>

<!--  -->

<script type="text/javascript">
	/*
	*  新建一个数组，用来存放选中的店
	*
	*
	*/
	export default{
		data(){
			return{
				storeList:["店一","店二","店三","店四","店五","店六","店七"],
				isChecked:false,
				check:false,
				cusStoreList:[], // 给每项添加了isChecked，用来标示是否选中
				checkedStores:[] // 选中的门店
			}
		},
		methods:{
			
			// 给每项添加一个isChecked
			addChecked(){
				// 给每项添加一个isChecked
				let index
				for(index in this.storeList){
					this.cusStoreList.push({
						"name":this.storeList[index],
						"isChecked":false
					})
				}
				// console.log(this.cusStoreList)

			},
			// 单个选中门店的样式
			checkedStore(index){
				this.checkedStores = [];
				// debugger
				this.cusStoreList[index].isChecked = !this.cusStoreList[index].isChecked

				this.cusStoreList.forEach(item=>{
					if(item.isChecked == true){
						this.checkedStores.push(item.name)
					}
				})
			},
			// 全选
			allChecked(){
				this.cusStoreList.isChecked = true;
				this.check = true;

				this.checkedStores = [];

				this.cusStoreList.forEach(item=>{
					this.checkedStores.push(item.name)
				})

			}
		},
		watch:{
			// list(val){
			// 	val.forEach(item=>{
			// 		if(item.isChecked == false) {
			// 			this.check = false;
			// 		}
			// 	})
			// }
		},
		ready(){
			this.addChecked();
		}
	}
</script>