<!-- 根据id[]获取name[] -->
<!-- <template>
	<ul>
		<li v-for="item in listName">{{item}}</li>
	</ul>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				list:[{
					id:"1",
					name:"门店1"
				},{
					id:"2",
					name:"门店2"
				},{
					id:"3",
					name:"门店3"
				},{
					id:"4",
					name:"门店4"
				},{
					id:"5",
					name:"门店5"
				},{
					id:"6",
					name:"门店6"
				}],
				listId:["2","4","6"],
				listName:[]
			}
		},
		methods:{
			listNameData(){
				// debugger
				let listName = []
				this.list.forEach(item => {
					for(var i=0; i<this.listId.length; i++){
						if(this.listId[i] == item.id){
							this.listName.push(item.name)
							console.log(this.listName)
						}
					}
				})
			}
		},
		ready(){
			this.listNameData()
		}
	}
</script> -->

<!-- **************************************************************************************** -->

<!-- 全选与反选 -->
<!-- <template>
	<div class="m100">
		<input type="checkbox" @click="allChecked">全选
		<hr>
		<ul class="all">
			<li v-for="item in checkboxData">
				<input type="checkbox" v-model="checkboxModel" value="{{item.id}}">{{item.value}}
			</li>
		</ul>
	</div>
</template>
<style lang="sass">
	.m100{ margin: 100px;  }
	.all li{ 
		display: inline-block; 
		input{
			margin-right: 10px;
			vertical-align:middle;
		}
		& + li{margin-left: 20px;}
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				checkboxData:[{
	      			id:'1',
	      			value:'苹果'
	    		},{
	      			id:'2',
	      			value:'荔枝'
	    		},{
	      			id:'3',
	      			value:'香蕉'
	    		},{
	      			id:'4',
	      			value:'火龙果'
	    		}],
	    		checkboxModel:['1','3','4'],
	    		checked:""
			}
		},
		methods:{
			allChecked(){
				if(this.checked){
					this.checkboxModel = []
				}else{
					this.checkboxModel = []
					this.checkboxData.forEach(item => {
						this.checkboxModel.push(item.id)
					})
				}
			}
		},
		watch:{
			'checkboxModel':{
				handler(val,oldVal){
					if(this.checkboxModel.length === this.checkboxData.length){
						this.checked = true
					}else{
						this.checked = false
					}
				}
			},
			deep: true
		}
	}
</script> -->

<!-- **************************************************************************************** -->

<!-- 导航切换 -->
<!-- <template>
	<div class="tab-box">
		<ul class="tab-nav">
			<li :class="{'active':item.is_show}" v-for="item in navDataNew" @click="clickTab($index,navDataNew)">{{item.title}}</li>
		</ul>
	</div>
</template>
<style lang="sass">
.tab-box{
	width: 800px;
	margin: 0 auto;
	.tab-nav{
    	border-bottom: 1px solid #e5e5e5;
		li{
			display: inline-block;
		    padding: 0 20px;
		    line-height: 40px;
		    cursor: pointer;
		    &.active{
		    	border-bottom: 2px solid #8cc96c;
		    }
		}
	}
}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				navData:["JavaScript","HTML","CSS","Result"],
				navDataNew:[]
			}
		},
		methods:{
			// 给数组添加一个新的变量
			tabSwitch(){
				this.navDataNew = this.navData.map(item => {return {
					title:item, is_show:false
				}})
				console.log(this.navDataNew)
				// 给定初始值——默认选中
				this.navDataNew[0].is_show = true
			},
			// 点击切换tab
			clickTab(index, arr){
				for(let i=0; i<arr.length; i++){
					arr[i].is_show = false
				}
				arr[index].is_show = true
			}
		},
		ready(){
			this.tabSwitch()
			this.clickTab()
		}
	}
</script>
 -->
<!-- **************************************************************************************** -->
<!-- 内部编辑器 -->
<!-- <template>
	<h2 class="tc">内部编辑器</h2>
	<hr><br>
	<div class="tc" v-cloak @click="hideTooltip">
		<input type="text" @click.stop v-model="contentText" v-show="show_input">
		<p @click.stop="toggleTooltip" v-show="!show_input">{{contentText}}</p>
	</div>
</template>
<style type="text/css">
	[v-cloak]{
		display:none;
	}
	.tc{text-align: center;}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				contentText:"edit me !",
				show_input: false
			}
		},
		methods:{
			hideTooltip(){
				this.show_input = false
			},
			toggleTooltip(){
				this.show_input = !this.show_input
			}
		}
	}
</script> -->


<!-- **************************************************************************************** -->

<!-- 提交表单 -->
<!-- <template>
	<div>
		<ul class="submit-ul">
			<li v-for="item in servicesNew" :class="{'active':item.active}" @click="toggleActive(item)">
				{{item.name}}
				currency 是vue自带的过滤器 使金钱以小数点两位显示  两个默认参数“$”,".00" 如 $ 100.00
				<span>{{item.price | currency}}</span>
			</li>
			<li class="total">Total:<span>{{total() | currency}}</span></li>
		</ul>
	</div>
</template>
<style lang="sass">
	.submit-ul{
		width: 500px;
	    border: 1px solid #e5e5e5;
	    padding: 20px;
	    margin: 100px auto;
	    li{
	    	padding: 10px 20px;
	    	background: #b5dba8;
	    	color:#fff;
	    	cursor: pointer;
	    	span{
	    		margin-left: 20px;
	    		float: right;
	    	}
	    	& + li{
	    		margin-top: 10px;
	    	}
	    	&.active{
	    		background: #ff8d72;
	    	}
	    	&.total{
	    		background: #8cc96c;
	    	}
	    }
	}
</style>
<script type="text/javascript">
 	export default{
 		data(){
 			return{
 				services: [
		        	{
		        		name: 'Web Development',
		        		price: 300
		        	},{
		        		name: 'Design',
		        		price: 400
		        	},{
		        		name: 'Integration',
		        		price: 250
		        	},{
		        		name: 'Training',
		        		price: 220
		        	}
		        ],
		        servicesNew:[]
 			}
 		},
 		methods:{
 			// 初始数据
 			initialData(){
 				this.servicesNew = this.services.map(item => {return{
 					name:item.name, price:item.price, active:false
 				}})
 			},
 			// 判断选中
 			toggleActive(s){
 				s.active = !s.active
 			},
 			// 计算选中的和
 			total(){
 				let sum = 0
 				this.servicesNew.forEach(s => {
 					if(s.active == true){
 						sum += s.price
 					}
 				})
 				return sum
 			}
 		},
 		ready(){
 			this.initialData()
 		}
 	}
</script> -->


<!-- **************************************************************************************** -->

<!-- 储值卡多卡切换 -->
<!-- <template>
	<div class="card">
		<div class="left">
			<div class="title">
				<div class="tit-left">充{{curData[0].pay}}送{{curData[0].send}}</div>
				<div class="btn-switch" @click="listShow">{{switchText}}</div>
			</div>
			<div class="price">￥10.50</div>
		</div>
		<ul class="list" v-show="is_show" transition="expand">
			<li v-for="item in list" @click="listHide($index)">充{{item.pay}}送{{item.send}}</li>
		</ul>
	</div>
</template>
<style lang="sass">
	.card{
		background: #8cc96c;
	    border-radius: 8px;
	    margin: 20px;
	    color: #fff;
        display: flex;
        min-height: 360px;
        .left{
        	position: relative;
			flex: 1;
			.title{
				display: flex;
			    padding: 0 20px;
			    line-height: 40px;
			    .tit-left{
			    	flex: 1;
			    }
			    .btn-switch{
			    	cursor: pointer;
			    }
			}
			.price{
				font-size: 30px;
			    position: absolute;
			    left: 50%;
			    top: 50%;
			    transform: translate(-50%,-50%);
			}
        }
        .list{
        	cursor: pointer;
        	padding: 0 20px;
    		border-left: 1px solid #fff;
        	li{
        		line-height: 40px;
        	}
        }
	}

	/* 可以设置不同的进入和离开动画 */
	/* 设置持续时间和动画函数 */
	.expand-transition {
	  transition: all .3s ease;
	  height: 100%;
	  padding: 10px;
	  overflow: hidden;
	}
	/* .expand-enter 定义进入的开始状态 */
	/* .expand-leave 定义离开的结束状态 */
	.expand-enter, .expand-leave {
	  height: 0;
	  padding: 0 10px;
	  opacity: 0;
	}
</style>
<script type="text/javascript">
	export default{
		data(){
			return{
				list:[{
					pay:1000,
					send:100
				},{
					pay:2000,
					send:200
				},{
					pay:3000,
					send:300
				},{
					pay:4000,
					send:400
				},{
					pay:5000,
					send:500
				},{
					pay:6000,
					send:600
				},{
					pay:7000,
					send:700
				},{
					pay:8000,
					send:800
				},{
					pay:9000,
					send:900
				}],
				switchText:"切换储值卡",
				is_show:false,
				curData:[{}]
			}
		},
		methods:{
			// 列表显示
			listShow(){
				this.is_show = true
			},
			// 列表隐藏
			listHide(index){
				this.curData = []
				this.curData.push(this.list[index])
				this.is_show = false
			},
			// 显示默认规则
			defaultRule(){
				this.curData.splice(0,1,this.list[0])
			}
		},
		ready(){
			this.defaultRule()
		}
	}
</script> -->

<!-- **************************************************************************************** -->

<!-- 多张卡滑动轮播 -->
<!-- <template>
	<div class="card-box">
		<div class="card-more" :style="{width:allWidth+'%'}" v-el:card_more>
			<div class="card" id="card-more" v-for="it in a" :style="{marginLeft: $index == 0 ? 0 : 100*2/allWidth + '%'}" @click="clickMobile($index)">
				<div class="top">
					<div class="left" v-if="it.type == 1">充{{it.pay_amount}}送{{it.give_amount}}</div>
					<div class="left" v-if="it.type == 3">充{{it.pay_amount}}立享消费折扣</div>
					<div class="right" v-text="it.is_default_card == 1 ? '默认支付':'设为默认' " :class="it.is_default_card == 1 ? 'default':'setting'"></div>
				</div>
				<div class="bottom">
					<div class="left"><span>￥</span>{{it.balance > 0 ? it.balance : 0}}</div>
					<div class="right">{{$index + 1}}/{{a.length}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="sass">
	.card-box{
		overflow: hidden;
		.card-more{
			display: flex;
			padding: 0 10%;
			.card{
				flex:1;
				background: #8cc96c;
			    border-radius: 10px;
			    color: #fff;
			    padding: 20px;
			    .top,.bottom{
			    	display:flex;
			    	.left{
			    		flex:1;
			    	}
			    }
			    .top{
			    	.setting{
			    		background: rgba(0,0,0,.2);
					    padding: 3px 20px;
					    border-radius: 14px;
			    	}
			    	.default{
			    		background: #ff8d72;
					    padding: 3px 20px;
					    border-top-left-radius: 14px;
					    border-bottom-left-radius: 14px;
					    margin-right: -20px;
			    	}
			    }
			    .bottom{
			    	padding-top: 50px;
			    }
			}
		}
	}
	
	
</style>

<script type="text/javascript">
    import toucher from '../../lib/toucher.js'
	export default{
		data(){
			return{
				a:[],
		        allWidth: ''
			}
		},
		methods:{
			clickMobile(index){
				var per = index*82
				this.$els.card_more.style.marginLeft = "-" + per + "%";
			}

		},
		ready(){
			this.a = [{
			            id:1,
			            balance: 100,
			            is_default_card:1,
			            type:1,
			            pay_amount: 1000,       
			            give_amount:10,
			            stores:[1001,1002]
			        },{
			            id:2,
			            balance: 200,
			            is_default_card:0,
			            type:3,
			            pay_amount: 2000,       
			            give_amount:20,
			            stores:[1001,1002]
			        },{
			            id:3,
			            balance: 300,
			            is_default_card:0,
			            type:1,
			            pay_amount: 3000,       
			            give_amount:30,
			            stores:[1001,1002]
			        },{
			            id:4,
			            balance: 400,
			            is_default_card:0,
			            type:1,
			            pay_amount: 4000,       
			            give_amount:40,
			            stores:[1001,1002]
			        }]
			this.allWidth = this.a.length > 1 ? this.a.length * 80 + (this.a.length-1) * 2 : 80

			var touchDom= toucher(document.getElementById('card-more'))
            touchDom.on('swipeLeft',(e)=>{
                if(this.index+1 >= this.cardList.length) return
                this.index++                 
                this.leftCard(this.index)
                return false
            }).on('swipeRight',()=>{
                if(this.index-1 <0) return
                this.index-- 
                this.leftCard(this.index)
                return false
            })
		}
	}
</script> -->

<!-- **************************************************************************************** -->