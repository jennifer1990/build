<template>
	<div :class="[ type ? 'dialog-bg-' + type : '' ]"  v-show="show">
		<div class="title">
			<slot name="title"></slot>
			<div class="close" @click="closeDialog"><i class="icon">&#xe611;</i></div>
		</div>

		<div class="content">
			<slot name="content"></slot>
		</div>
		<div class="operation">
			<btn :type=type :plain="true" @click="closeDialog">取消</btn>
			<btn :type=type @click="closeDialog">确定</btn>
		</div>
	</div>
</template>

<script type="text/javascript">
	export default{
		props:{
			type: { type:String },
			show: { type:Boolean }
		},
		data(){
			return{}
		},
		methods:{
			closeDialog(){
				this.show = false;
			}
		}
	}
</script>