<template>
	<div class="quanxian">
		<!-- 权限弹框 -->
		<div class="qx-dialog">
			<!-- 标题 -->
			<div class="row-auto qx-dialog-hd">
				<h2 class="col">权限组件</h2>
				<span class="col-auto">X</span>
			</div>
			<!-- main -->
			<!-- <div class="qx-dialog-bd">
				tab
				<div class="content-box">
					left
					<span class="left">功能模块</span>
					right
					<div class="right">
						分类 全选
						<div class="row-auto title">
							<h3 class="col">门店</h3>
							<div class="col-auto"><button>全选</button></div>
						</div>
						detail
						<div class="detail-box row-auto">
							<span class="col-auto">门店管理</span>
							<ul class="list col">
								<li><input type="checkbox">查询</li>
								<li><input type="checkbox">操作</li>
							</ul>
						</div>
					</div>
				</div>
			</div> -->
			<!-- main -->
			<div class="qx-dialog-bd">
				<!-- tab -->
				<div class="content-box" v-for="one in qxListNew">
					<!-- left -->
					<span class="left" @click="tabSwitch($index, qxListNew)">{{one.name}}</span>{{one.checked}}
					<!-- right -->
					<div class="right" v-for="two in one.list" v-show="one.checked">
						<!-- 分类 全选 -->
						<div class="row-auto title">
							<h3 class="col">{{two.name}}</h3>
							<div class="col-auto" @click="allChecked($index,two)"><button>全选</button></div>
						</div>
						<!-- detail -->
						<div class="detail-box row-auto" v-for="three in two.list">
							<span class="col-auto">{{three.name}}</span>
							<ul class="list col">
								<li  v-for="four in three.list">
									<input type="checkbox" v-model="checkboxModel" value="{{four.id}}">{{four.name}}
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="sass">
	.quanxian{
		.qx-dialog{
			width: 600px;
		    border: 1px solid #c8c8c8;
		    border-radius: 4px;
		    position: fixed;
		    top: 50%;
		    left: 50%;
		    transform: translate(-50%,-50%);
		    padding: 20px;

		    .qx-dialog-hd{
				padding-bottom: 20px;
				margin-bottom: 20px;
    			border-bottom: 1px solid #c8c8c8;
    			h2{
    				font-size: 20px;
    			}
		    }
		    .qx-dialog-bd{
		    	.content-box{
		    		.left{
		    			cursor: pointer;
		    			.active{
		    				color:red;
		    			}
		    		}
		    		.right{
		    			line-height: 40px;
		    			.title{
		    				border-bottom: 1px solid #c8c8c8;
		    				h3{
		    					font-size: 16px;
		    				}
		    				button{
		    					background: #e5e5e5;
							    border: 1px solid #c8c8c8;
							    border-radius: 12px;
							    padding: 3px 10px;
							    outline: 0;
							    &.active{
							    	background: #8cc96c;
							    	border: 1px solid #8cc96c;
							    	color:#fff;
							    }
		    				}
		    			}
		    			.detail-box{
		    				span{
		    					padding-right: 20px;
		    				}
		    				.list{
		    					li{
		    						display: inline-block;
		    						input{
		    							margin-right: 10px;
		    							vertical-align: middle;
		    						}
		    						& + li{
		    							margin-left: 20px;
		    						}
		    					}
		    				}
		    			}
		    		}
		    	}
		    }
		}
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				checkboxModel:[],
				qxListNew:[],
				qxList:[
					{
						"name": "功能模块",
						// "checked": "false"   判断tab切换
						"list":[
							{
								"name": "门店1",
								// "checked": "false"   判断全选
								"list":[
									{
										"name": "门店管理1",
										// "checked": "false"  
										"list": [
											{
												"id":'01',
												"name": "查询"
												// "checked": "false"   判断是否选中
											},
											{
												"id":'02',
												"name": "操作"
												// "checked": "false"   判断是否选中
											}
										]
									}
								]
							},
							{
								"name": "营销1",
								"list":[
									{
										"name": "优惠劵管理1",
										"list": [
											{
												"id":'03',
												"name": "查询"
											},
											{
												"id":'04',
												"name": "操作"
											}
										]
									}
								]
							}
						]
					},
					{
						"name": "管理模块",
						"list":[
							{
								"name": "门店2",
								"list":[
									{
										"name": "门店管理2",
										"list": [
											{
												"id":'01',
												"name": "查询"
											},
											{
												"id":'01',
												"name": "操作"
											}
										]
									}
								]
							},
							{
								"name": "营销2",
								"list":[
									{
										"name": "优惠劵管理2",
										"list": [
											{
												"id":'01',
												"name": "查询"
											},
											{
												"id":'01',
												"name": "操作"
											}
										]
									}
								]
							}
						]
					},
					{
						"name": "设置模块",
						"list":[
							{
								"name": "门店3",
								"list":[
									{
										"name": "门店管理3",
										"list": [
											{
												"id":'01',
												"name": "查询"
											},
											{
												"id":'01',
												"name": "操作"
											}
										]
									}
								]
							},
							{
								"name": "营销3",
								"list":[
									{
										"name": "优惠劵管理3",
										"list": [
											{
												"id":'01',
												"name": "查询"
											},
											{
												"id":'01',
												"name": "操作"
											}
										]
									}
								]
							}
						]
					}
				]
			}
		},
		methods:{
			// 一级导航切换
			qxListTab(){

				// 数据转换——将数组中的每项添加一个checked
				this.qxListNew = this.qxList.map(item => {return {
					name: item.name, checked: false, list: item.list.map(item => {return {
						name: item.name, checked: false, list: item.list.map(item => {return {
							name: item.name, list: item.list.map(item => {return {
								id: item.id, name: item.name, checked: false
							}})
						}})
					}})
				}})

				// console.log(this.qxListNew)
			},

			// tab导航切换
			tabSwitch(index, arr){
				// 每次点击都遍历，如果是当前项，checked=true，如果不是当前项，checked=false
				for(var i=0; i<arr.length; i++){
					if(i==index){
						arr[i].checked = true
					}else{
						arr[i].checked = false
					}
				}
			},

			// tab导航切换 默认选中第一项
			tabDefault(arr){
				arr[0].checked = true
			},

			// 全选操作
			allChecked(index,item){

				let len = item.list.length
				for(var i=0; i<len; i++){
					if(item.checked){
						this.checkboxModel = [];
					}else{
						this.checkboxModel = [];
  					
		      			this.item.forEach(it => {
		        			this.checkboxModel.push(it.id);
		      			});
					}
				}
				item.checked = !item.checked
			}
		},
		watch: {//深度 watcher
	  		'checkboxModel': {
	    		handler(val, oldVal) { 

	      			if (this.checkboxModel.length === this.item.length) {
	        			this.checked=true;
	      			}else{
	        			this.checked=false;
	      			}
	    		}
	  		}
		},
		ready(){
			this.qxListTab()
			this.tabDefault(this.qxListNew)
		}
	}
</script>