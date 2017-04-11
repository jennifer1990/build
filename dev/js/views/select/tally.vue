<template>
	<div class="tally row-auto">
		<ul class="col-auto">
			<li v-for="it in items" track-by="$index">
				{{it}}
				<button @click="deleteText($index)">X</button>
			</li>
		</ul>
		<div class="input-box col"><input type="text" v-model="newText" v-on:keyup.enter="createText"></div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				newText:'',
				items: []
			}
		},
		methods:{
			createText(){
				this.items.push(this.newText);
				this.newText ='';
			},
			deleteText(index){
				this.items.splice(index,1)
			}
		}
	}
</script>
<style lang="sass">
	.tally{
		border: 1px solid #c8c8c8;
    	border-radius: 4px;
    	background: #fff;
    	padding-left: 10px;
    	.input-box{
    		padding: 0 20px;
    		input{
				height: 36px;
			    border: 0;
			    outline: 0;
			    width: 100%;
			    background: transparent;
			}
    	}
		ul li{
			display: inline-block;
			background: #b5dba8;
		    color: #fff;
		    padding: 5px 10px;
		    border-radius: 4px;
		    & + li { margin-left: 10px; }
		}
		button{
			background: #8cc96c;
		    border: oldlace;
		    color: #fff;
		    border-radius: 4px;
		    margin-left: 5px;
		}
	}
</style>