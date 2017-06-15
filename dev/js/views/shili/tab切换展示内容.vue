<template>
	<!-- tab切换展示内容 -->
	<div class="content-box">
		<!-- 导航 -->
		<ul class="nav-tab">
			<li :class="{active:item.is_show}" v-for="item in newNav" @click="clickTab($index,newNav)">{{item.title}}</li>
		</ul>
		<div class="content">
			<div v-show="newNav[0].is_show"><h1>111111111111111111</h1></div>
			<div v-show="newNav[1].is_show"><h1>222222222222222222222</h1></div>
			<div v-show="newNav[2].is_show"><h1>33333333333333333</h1></div>
			<div v-show="newNav[3].is_show"><h1>44444444444444444444</h1></div>
		</div>
		
	</div>
</template>

<style lang="sass">
	.content-box{
		margin: 50px 200px;
		color: #444;
		.nav-tab{
			li{
				display: inline-block;
				background: #ccc;
			    padding: 5px 15px;
			    border-radius: 4px;
			    color: #fff;
			    cursor: pointer;
			    & + li {
			    	margin-left: 10px;
			    }
			    &.active{
			    	background: yellowgreen;
			    }
			}
		}
		.content{
			border: 2px solid yellowgreen;
			margin-top: 20px;
			h1{
				padding: 100px 200px;
			}
		}
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				nav:["one","two","three","four"],
				newNav:[]
			}
		},
		methods:{
			// 给数组每项加一个变量
			tabSwitch(){
				this.newNav = this.nav.map(item=>{return{
					title:item, is_show:false
				}})

				this.newNav[0].is_show = true
			},
			clickTab(index,arr){
				for(let i=0; i<arr.length; i++){
					arr[i].is_show = false
				}
				arr[index].is_show = true
			}
		},
		ready(){
			this.tabSwitch();
		}
	}
</script>












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