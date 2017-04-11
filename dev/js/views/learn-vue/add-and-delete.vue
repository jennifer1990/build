<template>
	<form>
		<div class="row">
			<label class="col">Name:</label>
			<input type="text" class="col" v-model="newPerson.name">
		</div>
		<div class="row">
			<label class="col">Age:</label>
			<input type="text" class="col" v-model="newPerson.age">
		</div>
		<div class="row">
			<label class="col">Sex:</label>
			<select v-model="newPerson.sex">
				<option value="Male">Male</option>
				<option value="Female">Female</option>
			</select>
		</div>
		<div class="row">
			<label class="col"></label>
			<button @click="createPerson">Create</button>
		</div>
	</form>
	<div class="table-striped">
		<table>
			<tr>
				<th>Name</th>
				<th>Age</th>
				<th>Sex</th>
				<th>Delete</th>
			</tr>
			<tr v-for="it in people">
				<td>{{it.name}}</td>
				<td>{{it.age}}</td>
				<td>{{it.sex}}</td>
				<td><button @click="deletePerson($index)">Delete</button></td>
			</tr>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				newPerson:{
					name:'',
					age:0,
					sex:'Male'
				},
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
			createPerson(){
				this.people.push(this.newPerson);
				this.newPerson ={name:'',age:0,sex:'Male'};
			},
			deletePerson(index){
				this.people.splice(index,1)
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

