<!-- <template>
	<page   :total:"total" 
			:pages:"pages" 
			:page_current="page_current" 
			:page_size:"10"></page>
</template>
<script type="text/javascript">
	export default {
		data () {
			return {
				total:0,
				pages:7,
				page_current:2
			}
		},
		ready () {
			this.total = 100
		}
	}
</script> -->


<template>
	<div class="L-box">
		<ul class="paging">
			<li :class="{'disabled' : isDisabledL }" @click="forward($index,pages)">&lt;</li>
			<li v-for="item in pages" :class="{'active':item.isChecked}" @click="pageCurrent($index,pages)">{{ item.num }}</li>
			<li :class="{'disabled' : isDisabledR }" @click="backward($index,pages)">&gt;</li>
		</ul>
	</div>

</template>

<style type="text/css">
	.L-box{
		border:10px solid #eee;
		margin:100px;
		padding: 20px;
	}
	.paging li{
		display: inline-block;
		min-width:16px;
		line-height: 36px;
		padding: 0 10px;
		border-radius: 3px;
		text-align: center;
		cursor: pointer;
	}
	.paging li:hover{
		background: #eee;
	}
	.paging li.active{
		background: yellowgreen;
		color:#fff;
	}
	.paging li.disabled{
		color:#ccc;
		cursor: no-drop;
	}
	
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				total:'',
				cur_page:1,
				page_size:10,
				total_page:'',

				pages:[],
				isChecked:false,
				check:false,
				isDisabledL:false,
				isDisabledR:false,
				forwardPage:''
			}
		},
		methods:{
			// 总页数
			totalPage(){
				this.total_page = this.total / this.page_size;

				let arr = []
				for(let i = 1; i <= this.total_page; i++){
					arr.push(i)
				}

				let t
				for(t in arr){
					this.pages.push({
						"num": arr[t],
						"isChecked":false
					})
				}
				if( this.pages.length > 7 ){
					let d = this.pages.length - 6
					this.pages.splice(5,d,{
						"num": '...',
						"isChecked":false
					})
				}
				console.log(this.pages)
			},

			// 点击选中
			pageCurrent(index,arr){
				arr.forEach(t=>{
					t.isChecked = false
				})

				arr[index].isChecked = true

				this.forwardPage = arr[index].num

				if(arr[index].num == 1 ){
					this.isDisabledL = true
					this.isDisabledR = false
				}else if(arr[index].num == this.total_page ){
					this.isDisabledR = true
					this.isDisabledL = false
				}else{
					this.isDisabledL = false
					this.isDisabledR = false
				}

			},

			// 向前
			forward(index,arr){

				arr.forEach(t=>{
					t.isChecked = false
				})
				arr[this.forwardPage-2].isChecked = true
				this.forwardPage--;

				if(this.forwardPage < 3){
					return
				}

				if(this.forwardPage == 1){
					this.isDisabledL = true
					this.isDisabledR = false	
				}
			},

			// 向后
			backward(index,arr){
				arr.forEach(t=>{
					t.isChecked = false
				})
				arr[this.forwardPage].isChecked = true
				this.forwardPage++;

				// if(this.forwardPage == this.total_page){
				// 	this.isDisabledR = true
				// 	this.isDisabledL = false	
				// }

				// console.log(this.forwardPage)
			}

		},
		ready(){
			this.total = 200
			this.totalPage()

			this.pageCurrent(0,this.pages)
		},
		watch:{

		}
	}
</script>




<!-- <template>
	<div class="table-wrapper">
		<div class="table-box table-striped">
			
			<div class="table-body">
				<table>
					<tr>
						<th class="table-hidden">姓名</th>
						<th>年龄</th>
						<th>省份</th>
						<th>市区</th>
						<th><div class="fixed-ws">地址</div></th>
						<th><div class="fixed-ell">地址</div></th>
						<th>邮编</th>
						<th class="table-hidden">操作</th>
					</tr>
					<tr>
						<td class="table-hidden">王小明</td>
						<td>18</td>
						<td>北京市</td>
						<td>朝阳区</td>
						<td><div class="fixed-ws">北京市朝阳区芍药居</div></td>
						<td><div class="fixed-ell">北京市朝阳区芍药居</div></td>
						<td>100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td class="table-hidden">张小刚</td>
						<td>25</td>
						<td>北京市</td>
						<td>海淀区</td>
						<td><div class="fixed-ws">北京市海淀区西二旗</div></td>
						<td><div class="fixed-ell">北京市海淀区西二旗</div></td>
						<td>100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td class="table-hidden">李小红</td>
						<td>30</td>
						<td>上海市</td>
						<td>浦东新区</td>
						<td><div class="fixed-ws">上海市浦东新区世纪大道</div></td>
						<td><div class="fixed-ell">上海市浦东新区世纪大道</div></td>
						<td>100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td class="table-hidden">周小伟</td>
						<td>26</td>
						<td>广东</td>
						<td>南山区</td>
						<td><div class="fixed-ws">深圳市南山区深南大道</div></td>
						<td><div class="fixed-ell">深圳市南山区深南大道</div></td>
						<td>100000</td>
						<td class="table-hidden">查看</td>
					</tr>
				</table>
			</div>
			<div class="table-fixed-left" style="width: 79px;">
				<table>
					<tr>
						<th>姓名</th>
						<th class="table-hidden">年龄</th>
						<th class="table-hidden">省份</th>
						<th class="table-hidden">市区</th>
						<th class="table-hidden"><div class="fixed-ws">地址</div></th>
						<th class="table-hidden"><div class="fixed-ell">地址</div></th>
						<th class="table-hidden">邮编</th>
						<th class="table-hidden">操作</th>
					</tr>
					<tr>
						<td>王小明</td>
						<td class="table-hidden">18</td>
						<td class="table-hidden">北京市</td>
						<td class="table-hidden">朝阳区</td>
						<td class="table-hidden"><div class="fixed-ws">北京市朝阳区芍药居</div></td>
						<td class="table-hidden"><div class="fixed-ell">北京市朝阳区芍药居</div></td>
						<td class="table-hidden">100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td>张小刚</td>
						<td class="table-hidden">25</td>
						<td class="table-hidden">北京市</td>
						<td class="table-hidden">海淀区</td>
						<td class="table-hidden"><div class="fixed-ws">北京市海淀区西二旗</div></td>
						<td class="table-hidden"><div class="fixed-ell">北京市海淀区西二旗</div></td>
						<td class="table-hidden">100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td>李小红</td>
						<td class="table-hidden">30</td>
						<td class="table-hidden">上海市</td>
						<td class="table-hidden">浦东新区</td>
						<td class="table-hidden"><div class="fixed-ws">上海市浦东新区世纪大道</div></td>
						<td class="table-hidden"><div class="fixed-ell">上海市浦东新区世纪大道</div></td>
						<td class="table-hidden">100000</td>
						<td class="table-hidden">查看</td>
					</tr>
					<tr>
						<td>周小伟</td>
						<td class="table-hidden">26</td>
						<td class="table-hidden">广东</td>
						<td class="table-hidden">南山区</td>
						<td class="table-hidden"><div class="fixed-ws">深圳市南山区深南大道</div></td>
						<td class="table-hidden"><div class="fixed-ell">深圳市南山区深南大道</div></td>
						<td class="table-hidden">100000</td>
						<td class="table-hidden">查看</td>
					</tr>
				</table>
			</div>
			<div class="table-fixed-right" style="width: 66px;">
				<table>
					<tr>
						<th>操作</th>
						<th class="table-hidden">姓名</th>
						<th class="table-hidden">年龄</th>
						<th class="table-hidden">省份</th>
						<th class="table-hidden">市区</th>
						<th class="table-hidden"><div class="fixed-ws">地址</div></th>
						<th class="table-hidden"><div class="fixed-ell">地址</div></th>
						<th class="table-hidden">邮编</th>
					</tr>
					<tr>
						<td>查看</td>
						<td class="table-hidden">王小明</td>
						<td class="table-hidden">18</td>
						<td class="table-hidden">北京市</td>
						<td class="table-hidden">朝阳区</td>
						<td class="table-hidden"><div class="fixed-ws">北京市朝阳区芍药居</div></td>
						<td class="table-hidden"><div class="fixed-ell">北京市朝阳区芍药居</div></td>
						<td class="table-hidden">100000</td>
					</tr>
					<tr>
						<td>查看</td>
						<td class="table-hidden">张小刚</td>
						<td class="table-hidden">25</td>
						<td class="table-hidden">北京市</td>
						<td class="table-hidden">海淀区</td>
						<td class="table-hidden"><div class="fixed-ws">北京市海淀区西二旗</div></td>
						<td class="table-hidden"><div class="fixed-ell">北京市海淀区西二旗</div></td>
						<td class="table-hidden">100000</td>
					</tr>
					<tr>
						<td>查看</td>
						<td class="table-hidden">李小红</td>
						<td class="table-hidden">30</td>
						<td class="table-hidden">上海市</td>
						<td class="table-hidden">浦东新区</td>
						<td class="table-hidden"><div class="fixed-ws">上海市浦东新区世纪大道</div></td>
						<td class="table-hidden"><div class="fixed-ell">上海市浦东新区世纪大道</div></td>
						<td class="table-hidden">100000</td>
					</tr>
					<tr>
						<td>查看</td>
						<td class="table-hidden">周小伟</td>
						<td class="table-hidden">26</td>
						<td class="table-hidden">广东</td>
						<td class="table-hidden">南山区</td>
						<td class="table-hidden"><div class="fixed-ws">深圳市南山区深南大道</div></td>
						<td class="table-hidden"><div class="fixed-ell">深圳市南山区深南大道</div></td>
						<td class="table-hidden">100000</td>
					</tr>
				</table>
			</div>
		</div>
	</div>
</template>

<style lang="sass">
	.table-wrapper{
		width: 550px;
    	border: 1px solid #e5e5e5;
    	position: relative;

    	.table-hidden{
    		visibility: hidden;
    	}
    	.fixed-ws{  
			width: 100px;
			white-space: normal;  
		}
		.fixed-ell{
			width: 100px;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    overflow: hidden;
		}
    	.table-fixed-left{
    		box-shadow: 2px 0 6px -2px rgba(0,0,0,.2);
    		position: absolute;
    		left: 0;
    		top: 0;
    		overflow: hidden;
    	}
    	.table-fixed-right{
    		box-shadow: -2px 0 6px -2px rgba(0,0,0,.2);
    		position: absolute;
    		top: 0;
		    left: auto;
		    right: 0;
    		overflow: hidden;
    	}

    	/* table基础样式 */
		.table-striped {
		    overflow-y: hidden;
		    /*margin: 0 -20px;*/
		    /*margin-bottom: 20px;*/
		    table { 
				width: 100%;
			    /*white-space: nowrap;*/
			    background: #fff;
			    th{
			       padding: 10px 20px;
				    border: 0;
				    line-height: 1.7em;
			        border-bottom: 1px solid #999;
			        /*border-top:1px solid #e9e9e9;*/
			        font-weight: bold;
			        text-align: left;
			        white-space: nowrap;
			    }
			    td{ 
					padding: 10px 20px;
					white-space: nowrap;
				    border: 0;
				    line-height: 1.7em;
				    border-bottom: 1px solid #e9e9e9;
				    vertical-align:top;
				    a{
				        color: #2196F3;
				        cursor: pointer;
				    }
				    i{ 
				    	padding-right: 10px; 
				    }
			    }
		    }
		    & tbody tr:nth-of-type(odd) { 
		    	background-color: #fcfcfc; 
		    }
		} 
    	
	}
</style> -->
