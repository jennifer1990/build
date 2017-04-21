<template>
	<div class="L-box table-manage">

		<btn type="success" @click="isShow=true">添加</btn>

		<!-- 添加的弹框 -->
		<div class="dialog-box" v-show="isShow">
			<div class="dialog">
				<div class="form-grounp">
					<label>名称</label>
					<input type="text" placeholder="请输入名称" class="input" v-model="addList.name">
				</div>
				<div class="form-grounp">
					<label>人群</label>
					<select class="input" v-model="addList.crowd">
						<option value=" " selected="">请选择</option>
						<option value="全部">全部</option>
						<option value="部分">部分</option>
					</select>
				</div>
				<div class="form-grounp">
					<label>状态</label>
					<select class="input" v-model="addList.state">
						<option value=" " selected="">请选择</option>
						<option value="0">已推送</option>
						<option value="1">未推送</option>
					</select>
				</div>
				<btn type="primary" :plain="true" @click="isShow=false">取消</btn>
				<btn type="primary" @click="add()">确定</btn>
			</div>
		</div>
		
		<!-- 列表 -->
		<div class="table-striped">
			<table>
				<thead>
					<tr>
						<th>序号</th>
						<th>名称</th>.
						<th>人群</th>
						<th>状态</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(index,item) in list">
						<td>{{index + 1}}</td>
						<td>{{item.name}}</td>
						<td>{{item.crowd}}</td>
						<td>{{item.state == 0 ? '已推送' : '未推送'}}</td>
						<td>
							<a @click="detail($index)">详情</a>
							<a>修改</a>
							<a @click="delete($index)">删除</a>
						</td>
					</tr>
				</tbody>
			</table>
		</div>

		<!-- 详情的弹框 -->
		<div class="dialog-box" v-show="isShow2">
			<div class="dialog">
				<div class="close-box" @click="close()"><i class="icon">&#xe611;</i></div>
				<div class="form-grounp">名称：{{details.name}}</div>
				<div class="form-grounp">人群：{{details.crowd}}</div>
				<div class="form-grounp">状态：{{details.state  == 0 ? '已推送' : '未推送'}}</div>
			</div>
		</div>
		
	</div>
</template>

<style type="text/css">
	.L-box{
		border: 10px solid #eee;
		margin:100px;
		padding: 20px;
	}
	.table-manage table a + a{
		margin-left: 10px;
	}
	.form-grounp{
		margin-bottom: 20px;
	}
	.dialog-box{
		background: rgba(0,0,0,.5);
	    position: fixed;
	    top: 0;
	    left: 0;
	    right: 0;
	    bottom: 0;
	}
	.dialog{
		min-width: 200px;
		border: 10px solid #eee;
	    border-radius: 4px;
	    padding: 20px;
	    display: inline-block;
	    background: #fff;

	    position: fixed;
	    top: 50%;
	    left: 50%;
	    transform: translate(-50%,-50%);
	}
	.close-box{
		text-align: right;
		cursor: pointer;
	}
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				addList:{
					crowd:" ",
					name:" ",
					state:" "      // 0:已推送，1:未推送
				},
				list:[
					{
						crowd:"全部",
						name:"代金券",
						state:0      // 0:已推送，1:未推送
					},
					{
						crowd:"全部",
						name:"代金券",
						state:1      // 0:已推送，1:未推送
					},
					{
						crowd:"部分",
						name:"代金券",
						state:1      // 0:已推送，1:未推送
					},
					{
						crowd:"全部",
						name:"代金券",
						state:0      // 0:已推送，1:未推送
					},
					{
						crowd:"全部",
						name:"代金券",
						state:0      // 0:已推送，1:未推送
					},
					{
						crowd:"部分",
						name:"代金券",
						state:0      // 0:已推送，1:未推送
					},
					{
						crowd:"全部",
						name:"代金券",
						state:1      // 0:已推送，1:未推送
					},
				],
				details:{
					crowd:" ",
					name:" ",
					state:" "      // 0:已推送，1:未推送
				},

				isShow:false,
				isShow2:false
			}
		},
		methods:{
			// 删除
			delete(index){
				this.list.splice(index,1)
			},

			// 添加
			add(){
				this.list.push(this.addList)
				this.addList = {
					crowd:" ",
					name:" ",
					state:" "      // 0:已推送，1:未推送
				}
			},

			// 详情
			detail(index){
				this.isShow2 = true
				this.details.crowd = this.list[index].crowd
				this.details.name = this.list[index].name
				this.details.state = this.list[index].state
			},

			// 关闭
			close(){
				this.isShow2 = false
			}
		}
	}
</script>