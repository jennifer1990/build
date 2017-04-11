<template>

	<btn type="primary" @click="openDialog('primary')">提示默认对话框</btn>
	<btn type="success" @click="openDialog('success')">提示成功对话框</btn>
	<btn type="warning" @click="openDialog('warning')">提示警告对话框</btn>
	<btn type="danger" @click="openDialog('danger')">提示错误对话框</btn>
	<btn type="info" @click="openDialog('info')">提示信息对话框</btn>

    <br>

	<dialog :type="type" :show.sync="show">
		<h2 slot="title">标题</h2>
		<p slot="content">内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出框内容弹出</p>
	</dialog>
	
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				show:false,
				type:''
			}
		},
		methods:{
			openDialog(val) {
				this.show = true;
				this.type = val;
			}
		}
	}
</script>