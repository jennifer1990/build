<!-- <template>
	<div class="L-box">
		<btn type="primary" @click="isShow=true">点击选择门店</btn>
		<div class="L-box" v-show="isShow">
			<ul class="store-list">
				<li v-for="item in cusStoreList" :class="{'active':item.isChecked || check}" @click="checkedStore(item)">{{item.name}}{{item.isChecked}}</li>
			</ul>
			<div class="btn-group">
				<span @click="reelect">重选</span>
				<span @click="checkAll">全选</span>
				<span><btn type="primary" :plain="true" @click="cancel">取消</btn></span>
				<span><btn type="primary" @click="close()">确定</btn></span>
			</div>
		</div>

		<div>选中的门店：{{checkedStores}}</div>

		<div><input type="text" name=""></div>
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

<script type="text/javascript">
	export default{
		data(){
			return{
				storeList:["店一","店二","店三","店四","店五","店六","店七"],
				isChecked:false,
				isShow:false,
				cusStoreList:[], // 给每项添加了isChecked，用来标示是否选中
				checkedStores:[] // 选中的门店
			}
		},
		methods:{
			// 给每项添加一个isChecked
			addChecked(){
				let i
				for(i in this.storeList){
					this.cusStoreList.push({
						"name":this.storeList[i],
						"isChecked":false
					})
				}
			},
			// 单个选中门店的样式
			checkedStore(item){
				this.checkedStores = [];
				item.isChecked = !item.isChecked

				this.cusStoreList.forEach(i=>{
					if(i.isChecked == true){
						this.checkedStores.push(i.name)
					}
				})
			},
			// 全选
			checkAll(){
				this.checkedStores = [];
				this.cusStoreList.forEach(i=>{
					i.isChecked = true;
					this.checkedStores.push(i.name)
				})
			},
			// 重选
			reelect(){
				this.checkedStores = [];
				this.cusStoreList.forEach(i=>{
					i.isChecked = false;
				})
			},
			// 关闭
			close(){
				this.isShow = false
			},
			// 取消
			cancel(){
				this.reelect()
				this.close()
			}
			// 确定
		},
		ready(){
			this.addChecked();
		}
	}
</script> -->




<!-- 事件冒泡 -->
<!-- <template>
	<div @click="clickMe">
		父级
		<a @click.stop="clickMe">阻止事件冒泡</a>
	</div>
	<div @click.capture=""></div>

	<select v-model="aaa">
		<option :value="1">1</option>
		<option :value="2">2</option>
		<option :value="3">3</option>
	</select>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				aaa:''
			}
		},
		methods:{
			clickMe(){
				alert("11111111")
			}
			captureevent(){
				if(this.aaa)
			}
		}
	}
</script> -->


<!--<template>-->
	<!--<div>-->
		<!--<div v-html="hi"></div>-->
	<!--</div>-->
<!--</template>-->

<!--<script type="text/javascript">-->
	<!--export default{-->
		<!--data(){-->
			<!--return{-->
				<!--hi:"<h1>hi</h1>"-->
			<!--}-->
		<!--}-->
	<!--}-->
<!--</script>-->