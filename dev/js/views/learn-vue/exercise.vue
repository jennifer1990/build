<!-- hello world 实例-->
<!-- <template>
	<div>
		{{message}}
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return {
				message:'hello world!'
			}
		}
	}
</script> -->




<!-- 双向绑定实例 v-model -->
<!-- <template>
	<div>
		<p>{{message}}</p>
		<input type="text" v-model="message">
	</div>
</template> -->




<!-- v-if 与 v-show -->
<!-- <template>
	<div>
		<p>hello world!</p>
		<p v-if="yes">yes</p>
		<p v-if="no">no</p>
		<p v-if="age >= 25">age:{{age}}</p>
		<p v-if="name.indexOf('jack') >= 0">name:{{name}}</p>
	</div>
</template> -->
<!-- <template>
	<div>
		<p>hello world!</p>
		<p v-show="yes">yes</p>
		<p v-show="no">no</p>
		<p v-show="age >= 25">age:{{age}}</p>
		<p v-show="name.indexOf('jack') >= 0">name:{{name}}</p>
	</div>
</template>
<script type="text/javascript">
	export default {
		data(){
			return{
				yes:true,
				no:false,
				age:28,
				name:'jennifer'
			}
		}
	}
</script> -->


<!-- v-else 指令 -->
<!-- <template>
	<p v-if="age">age:{{age}}</p>
	<p v-else>name:{{name}}</p>
	<hr>
	<p v-show="name.indexOf('keep') >= 0">name:{{name}}</p>
	<p v-else>sex:{{sex}}</p>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				age:20,
				name:'jennifer',
				sex:'male'
			}
		}
	}
</script> -->


<!-- v-for 基于一个数组渲染一个列表 -->
<!-- <template>
	<div class="table-striped">
		<table>
			<tr>
				<th>name</th>
				<th>age</th>
				<th>sex</th>
			</tr>
			<tr v-for="it in people">
				<td>{{it.name}}</td>
				<td>{{it.age}}</td>
				<td>{{it.sex}}</td>
			</tr>
		</table>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
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
		}
	}
</script> -->


<!-- v-bind指令 -->
<!-- <template>
	<ul class="pagination">
		<li v-for="n in pageCount">
			<a href="javascript:void(0)" :class="activeNumber === n+1 ? 'active' : '' ">{{n+ 1}}</a>
		</li>
	</ul>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				activeNumber: 5,
				pageCount: 10
			}
		}
	}
</script>
<style type="text/css">
	.pagination {
		display: inline-block;
		padding-left: 0;
		margin: 21px 0;
		border-radius: 3px;
	}

	.pagination > li {
		display: inline;
	}

	.pagination > li > a {
		position: relative;
		float: left;
		padding: 6px 12px;
		line-height: 1.5;
		text-decoration: none;
		color: #009a61;
		background-color: #fff;
		border: 1px solid #ddd;
		margin-left: -1px;
		list-style: none;
	}

	.pagination > li > a:hover {
		background-color: #eee;
	}

	.pagination .active {
		color: #fff;
		background-color: #009a61;
		border-left: none;
		border-right: none;
	}

	.pagination .active:hover {
		background: #009a61;
		cursor: default;
	}

	.pagination > li:first-child > a .p {
		border-bottom-left-radius: 3px;
		border-top-left-radius: 3px;
	}

	.pagination > li:last-child > a {
		border-bottom-right-radius: 3px;
		border-top-right-radius: 3px;
	}
</style> -->


<!-- v-on 指令 -->
<!-- <template>
	<div>
		<p><input type="text" v-model="message"></p>
		<p><button @click="greet">greet</button></p>
		<p><button @click="say('hi')">hi</button></p>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				message:"hello vue"
			}
		},
		methods:{
			greet(){
				alert(this.message);
			},
			say(msg){
				alert(msg)
			}
		}
	}
</script> -->

<!-- 增加删除 -->
<!-- <template>
	<div>
		<ul>
			<li v-for="it in texts" track-by>
				{{it}}
				<button @click="deleteText($index)">X</button>
			</li>
		</ul>

		<input type="text" v-model="newText" v-on:keyup.enter="addText">
		
	</div>
</template>

<script type="text/javascript">
	export default{
		data(){
			return{
				newText:'',
				texts:[]
			}
		},
		methods:{
			addText(){
				this.texts.push(this.newText);
				this.newText = '';
			},
			deleteText(index){
				this.texts.splice(index,1);
			}
		}
	}
</script> -->

<!-- ***************************************************************************************** -->


<!-- 下拉 -->
<!-- <template>
	<select v-model="selected">
		<option selected>A</option>
		<option>B</option>
		<option>C</option>
	</select>
	<br>
	<p>selected : {{selected | json}}</p>
</template> -->


<!-- ***************************************************************************************** -->

<!-- <template>
	<p>{{*message}}</p>
	<input type="text" v-model="message">
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				message:"hellow world"
			}
		}
	}
</script> -->

<!-- ***************************************************************************************** -->

<!-- <template>
	
	<div style="text-align:center;">
		<h2>添加书籍</h2>
		<div style="margin-bottom: 20px;">
			书名：<input type="text" v-model="book.name">
		</div>
		<div style="margin-bottom: 20px;">
			作者：<input type="text" v-model="book.author">
		</div>
		<div style="margin-bottom: 20px;">
			价格：<input type="text" v-model="book.price">
		</div>
		<div style="margin-bottom: 20px;"><button @click="addBook">添加</button></div>
	</div>

	<div class="table-striped">
		<table>
			<tr>
				<th>序号</th>
				<th>书名</th>
				<th>作者</th>
				<th>价格</th>
				<th>删除</th>
			</tr>
			<tr v-for="item in books">
				<td>{{item.id}}</td>
				<td>{{item.author}}</td>
				<td>{{item.name}}</td>
				<td>{{item.price}}</td>
				<td v-if="item.id% == 0"><button class="btn-red">删除</button></td>
				<td v-else><button class="btn-green">删除</button></td>
			</tr>
		</table>
	</div>

</template>

<style lang="sass">
.btn-red{
	background: red;
    border: 0;
    border-radius: 4px;
    color: #fff;
    padding: 4px 10px;
}
.btn-green{
	background: green;
    border: 0;
    border-radius: 4px;
    color: #fff;
    padding: 4px 10px;
}
	
</style>

<script type="text/javascript">
	export default{
		data(){
			return{
				book: {
	                id: 0,
	                author: '',
	                name: '',
	                price: ''
	            },
	            books: [{
	                id: 1,
	                author: '曹雪芹',
	                name: '红楼梦',
	                price: 32.0
	            }, {
	                id: 2,
	                author: '施耐庵',
	                name: '水浒传',
	                price: 30.0
	            }, {
	                id: '3',
	                author: '罗贯中',
	                name: '三国演义',
	                price: 24.0
	            }, {
	                id: 4,
	                author: '吴承恩',
	                name: '西游记',
	                price: 20.0
	            }]
			}
		},
		methods:{
			// 添加
			addBook(){
				this.book.id = this.books.length + 1
				this.books.push(this.book)
				this.book = ''
			},
			// 删除
			removeBook(book){
				this.books.$remove(book)
			}

		}
	}
</script> -->


<!-- ***************************************************************************************** -->


<template>
    <div>
      	<input type='checkbox' v-on:click='checkedAll'>全选
      	<template v-for='checkb in checkboxData'>
         	<input type='checkbox' v-model='checkboxModel' value='{{checkb.id}}'>{{checkb.value}}
      	</template>
    </div>
</template>

<script>
	export default {
		data () {
	  		return {
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
  			checkedAll() {
    			var _this = this;

				// console.log(_this.checkboxModel);

    			if (this.checked) {//实现反选
      				_this.checkboxModel = [];
    			}else{//实现全选
      				_this.checkboxModel = [];
  					
	      			_this.checkboxData.forEach(item => {
	        			_this.checkboxModel.push(item.id);
	      			});
   				}
  			}
		},
		watch: {//深度 watcher
	  		'checkboxModel': {
	    		handler(val, oldVal) { 

	      			if (this.checkboxModel.length === this.checkboxData.length) {
	        			this.checked=true;
	      			}else{
	        			this.checked=false;
	      			}
	    		}
	  		}
		}
		
	}
</script>

<!-- <template>
	<div class="m100">
		<input type="checkbox">全选
		<hr/>
		<ul class="all">
			<li v-for="item in list"><input type="checkbox" v-model="checkboxModel" value="{{item.id}}">{{item.name}}{{item.id}}</li>
		</ul>

		<br/><br/><br/><br/>

		


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
				checkboxModel:[],
				checked:''
				list:[
					{
						id:"1",
						name:"苹果"
					},
					{
						id:"2",
						name:"梨"
					},
					{
						id:"3",
						name:"香蕉"
					},
					{
						id:"4",
						name:"葡萄"
					},
					{
						id:"5",
						name:"西瓜"
					},
					{
						id:"6",
						name:"椰子"
					}
				]
			}
		},
		methods:{
			allChecked(){
				if(this.checked){
					
				}
			}
		}
	}
</script> -->