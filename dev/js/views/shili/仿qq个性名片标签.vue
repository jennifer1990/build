<template>
	<div>
		<div id="impression">
			<div class="main-img">
				<!-- <img id="center" class="center" src="../../../img/u7828.jpg"> -->
			</div>
			<ul class="impress-tag" id="single_tags" style="position: relative;">
				<li v-for="(index,item) in list">{{item}}</li>
			</ul>
		</div>
	</div>
</template>

<style>
	#impression{
		width: 800px;
		height:600px;
		position: relative;
		margin:0 auto;
		border: 2px solid #C2BABA;
	}
	.main-img .center{
		position: absolute;
		left:50%;
		top:50%;
		border-radius: 50%;
		transform:translate(-50%,-50%);
	}
	.main-img img{
		/*width:200px;
		height:200px;*/
	}
	
	.impress-tag li{
		list-style: none;
		position:absolute;
		background-color: rgba(204, 153, 153, 1);
		color:white;
		box-sizing: border-box;
		font-size: 14px;
		font-family: "微软雅黑";
		/*border:1px solid rgb(162,162,162);*/
		text-align: center;
        line-height:1.1em;
		box-sizing: border-box;
		padding:0 10px;
		padding: 5px 10px;
		border-radius: 12.5px;
	}
	</style>
<script type="text/javascript">

	export default{
		data(){
			return{
				list:["女","24岁","白羊座","一星会员","兴趣爱好：运动","营销敏感度低","常去上海商圈消费","消费喜好：美食、服饰","忠诚度低","消费能力低","喜欢晚上消费","本月共消费3次，金额为300元"]
			}
		},
		methods:{
			//原生js实现环形菜单创建
			circleLayout(para){
			    var count=para.targetElement.length; // targetElement 指的是 ul 中 li 

			    // 没有传入参数 提示语
			    if(!count||!para.pointElement){
			        throw new Error("请传入布局元素参数targetElement和pointElement ！");
			        return false;
			    }

			    var beginAngle=para.beginAngle; // 开始角度
			    var endAngle=para.endAngle;     // 结束角度

			    	if(count > 10 ){
				    	beginAngle = 0, // 开始角度
				    	endAngle= 360  // 结束角度
				    }else if(count <= 10 && count >= 5){
				    		beginAngle=30, // 开始角度
					    	endAngle=-230  // 结束角度
				    }
				    else{
			    		beginAngle= -30, // 开始角度
			    		endAngle= -190  // 结束角度
			    	}


			    var validAngle=endAngle-beginAngle;
			    var angle=validAngle/count;    // 每个li所占的角度
			    var X,Y,
			    pointLeft = typeof para.pointElement==="string"?parseInt(para.pointElement.split(",")[0]):(para.pointElement.offsetLeft+para.pointElement.offsetWidth/2),
			    pointTop = typeof para.pointElement==="string"?parseInt(para.pointElement.split(",")[1]):(para.pointElement.offsetTop+para.pointElement.offsetHeight/2);
			    for(var i =0;i<count ;i++){
			    	var thisElement=para.targetElement[i];
			        X=parseInt(Math.cos((angle*i+beginAngle)*Math.PI/180)*para.radius+pointLeft);
			        Y=parseInt(Math.sin((angle*i+beginAngle)*Math.PI/180)*para.radius+pointTop);
			        thisElement.style.position="absolute";
			        thisElement.style.left=X-thisElement.offsetWidth/2+"px";
			        thisElement.style.top=Y-thisElement.offsetHeight/2+"px";
			    }

			    
			},

			//jq印象tag飘动动画实现
			smoothMove(){
				var target={};
				// var li=$(".impress-tag li");
				var arr = document.getElementById("single_tags").getElementsByTagName("li");
				// console.log(li)

				for(var i=0; i<arr.length; i++) {
					target[i]=arr[i].offsetLeft+","+arr[i].offsetTop;
				}

				// Array.prototype.forEach.call(li, function(item){
		  //         var 
		          
		  //       });

				// li.forEach(item=>{

				// 	// target[item]=thisLi.position().left+","+thisLi.position().top;
				// 	console.log(item)
				// })

				// li.each(function(i,n){
				// 	var thisLi=$(n);
				// 	target[i]=thisLi.position().left+","+thisLi.position().top;
				// });

				function move(){

					var arr = document.getElementById("single_tags").getElementsByTagName("li");

					for(var i=0; i<arr.length; i++) {

						var multiplier=[1,-1];
						var targetLeft=multiplier[parseInt(Math.random()*2)]*Math.random()*20+parseInt(target[i].split(",")[0]);
						var targetTop=multiplier[parseInt(Math.random()*2)]*Math.random()*20+parseInt(target[i].split(",")[1]);
						// if(!arr[i].hasClass("stop")){
							// arr[i].style.left = targetLeft+"px"
							// arr[i].style.top = targetTop+"px"
							// arr[i].style.transition = 3000 
							console.log(arr[i])

							arr[i].animate({
								left:targetLeft+"px",
								top:targetTop+"px"
							},3000,move);
						// }
					}

					// li.each(function(i,n){
					// 	var thisLi=$(n);
					// 	var multiplier=[1,-1];
					// 	var targetLeft=multiplier[parseInt(Math.random()*2)]*Math.random()*20+parseInt(target[i].split(",")[0]);
					// 	var targetTop=multiplier[parseInt(Math.random()*2)]*Math.random()*20+parseInt(target[i].split(",")[1]);
					// 	if(!$(n).hasClass("stop")){
					// 		thisLi.stop().animate({
					// 			left:targetLeft+"px",
					// 			top:targetTop+"px"
					// 		},3000,move);
					// 	}
					// });
				}
				move();
			}

		},
		ready(){
			this.circleLayout({
			    pointElement:"400,300",//document.getElementById("center"),
			    targetElement:document.getElementById("single_tags").getElementsByTagName("li"),
			    radius:250,   // 中间圆半径

			    beginAngle:0, // 开始角度
			    endAngle:360  // 结束角度
			});
			this.smoothMove();

		}
	}
		
</script>