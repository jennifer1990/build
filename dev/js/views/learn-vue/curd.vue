<template>
	<form>
		<div class="row">
			<label class="col">Search:</label>
			<input type="text" class="col" v-model="
			0">
		</div>
	</form>
	<div class="table-striped">
		<table>
			<tr v-for="col in columns">
				<th>{{col.name | capitalize}}</th>
				<th>Delete</th>
			</tr>
			<tr v-for="it in people">
				<td>{{it.name}}</td>
				<td>{{it.age}}</td>
				<td>{{it.sex}}</td>
				<td><button @click="deleteItem($index)">Delete</button></td>
			</tr>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				columns:[{
					name:'name'
				},{
					name:'age'
				},{
					name:'sex'
				}],
				people: [{
                    name: 'Jack',
                    age: 30,
                    sex: 'Male'
                }, {
                    name: 'Bill',
                    age: 26,
                    sex: 'Male'
                }, {
                    name: 'Tracy',
                    age: 22,
                    sex: 'Female'
                }, {
                    name: 'Chris',
                    age: 36,
                    sex: 'Male'
                }]
			}
		},
		methods:{
			deleteItem(index){
				this.people.splice(index,1);
			}
		}
	}
</script>
<style type="text/css">
	.row{
		margin-bottom: 20px;
	}
	label{
		width: 80px;
	    text-align: right;
	    padding-right: 10px;
	}
</style>