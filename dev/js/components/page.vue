<!-- <template>
    <ul class="KsPage">
        <li>&lt;</li>
        <li :class="{'active': page_current == item}" v-for="item in pages_array">{{item}}</li>
        <li>&gt;</li>
    </ul>
</template>

<script type="text/javascript">
    export default{
        props:{
            // 总条数
            total:{type:Number, default:0},
            // 展示分页个数
            pages:{type:Number, default:0},
            // 当前选中的页数
            page_current:{type:Number, default:1},
            // 每页展示条数
            page_size:{type:Number, default:10}
        },
        data(){
            return{
                pages_array:[1,2,3,4,5,6,7,8,9]
            }
        },
        methods:{
            init (){
                if(!this.total) return
                this.pages_array = this.get_page_array()  
            },
            // 总页数
            get_page_array(){
                debugger
                this.pages = this.total / this.page_size
                var x =''
                for(i>0; i<=this.pages; i++){
                    x = i
                }
                return x.split(',');
            }
        },
        created (){
            this init ();
        }
    }
</script> -->


<template>

    <ul v-show="total" class="KsPage" cid="KsPage" @click="click_page_mian($event)">
        <li :class="{'disabled':page_current == 1}">&lt;</li>
        <li v-for="i in pages_array"
            track-by="$index"
            :class="{'active':page_current == i}" v-text="i"></li>
        <li :class="{'disabled':page_current == total_count}">&gt;</li>
    </ul>

</template>
<script type="text/javascript">
    /**
     * <li class="frist">&lt;</li>
     * className不合理 ，目的表达不可点击状态 ，'disabled' 相关比较合理
     */
    
    export default {
        props: {
            // 总条数
            total: {type:Number, default:0 }, 
            // 展示分页个数
            pages: {type:Number, default:7 }, 
            // 当前选中的页数
            page_current: {type:Number, default:1 }, 
            // 每页展示条数
            page_size: {type:Number, default:10 } 
        },
        data (){
            
            return {
                pages_array : [],
                pages_count : this.pages
            }
        },
        
        methods: {
            init (){
                if(!this.total) return // 如果没有数据，直接跳出
                if(this.pages%2==0) { // 如果分页展示个数为偶数
                    this.pages = this.pages - 1 // 则展示分页个数-1
                    console.error('分页中的参数 pages 请传入奇数 , 自动转为：'+this.pages)
                }
                this.total_count = this.get_total_count(this.total,this.page_size) // total_count总页数
                this.pages_array = this.get_page_array(1,this.pages,this.total_count) // pages_array 分页页数形成的数组
            },
            // 总页数
            get_total_count (total,page_size){ // total：数据总条数，page_size：每页展示多少条
                var mod = total % page_size  // 总条数%每页展示条数，取余，如果大于0，那就说明最后一页有数据且比每页展示条数少
                return  (total-mod)/page_size + (mod && 1) // (mod && 1):意思是如果mod为true，则return 1；总条数/每页展示=总页数，取余不为0时要+1
            },
                
            // 最大页数
            get_cur_count (cur,total){ // cur:选中的页,total：总页数
                return  cur > total ? total : cur // 当选中的页>总页数时，显示总页数，否则，显示选中页
            },
            // 纯净 当前数组
            get_pure_array (page_cur,pages,total_count){ // page_cur:选中的页,pages：每页显示几个分页,total_count：总共有多少页
                var arr = [],len,cur_show_max // len:数组的长度，cur_show_max：显示的最大页数

                if(pages > total_count){ // 显示的分页数大于总页数
                    pages = total_count  // 让显示的分页数与总页数相等，即有几页显示几页
                    cur_show_max = total_count //显示的最大页数==总页数
                    len = total_count-1  //长度是总页数-1，因为数组从0开始
                }else{ //显示的分页数比总页数小
                    len = pages - 1 //长度是显示分页的个数-1
                    var cur_show_max = page_cur + len/2
                    page_cur <= len/2  && (cur_show_max = pages) // 选中的页如果小于等于数组的一半长度，让最大页码等于分页显示的页数
                    cur_show_max > total_count && (cur_show_max = total_count) // 如果最大显示页大于总页数，让最大页数等于总页数
                }
                    
                
                for (var i = len ; i>=0; i--){
                    arr.push(cur_show_max - i)
                }
                return arr
            },
            // 折叠，添加省略号
            has_fold (max,arr){
                var last = arr.length-1

                arr = [].concat(arr)
                if(arr[0] > 1){
                    arr[0] = 1
                    arr[1] = '···'
                }
                if(arr[last] < max){
                    arr[last] = max
                    arr[last -1] = '···'
                }
                return arr
            },
            // 点击分页主体
            click_page_mian (event){

                var value = event.target.innerHTML.trim()

                switch(true){
                    // left
                    case '&lt;' === value :
                        --this.page_current
                        this.page_current < 1 && (this.page_current = 1)
                    break;
                    // right
                    case '&gt;' === value :
                        ++this.page_current
                        this.page_current = this.get_cur_count(this.page_current,this.total_count)
                    break;
                    case '···' === value :break;
                    case !isNaN(value):
                        this.page_current = +value
                    break;
                }


            },
            
            get_page_array (page_cur,pages,total_count) { // 初始值(1,this.pages,this.total_count)
                var arr 
                arr = this.get_pure_array(page_cur,pages,total_count)    
                arr = this.has_fold(total_count,arr) // 折叠，添加省略号
                return arr
                
            }
        },
        watch: {
            'page_size'(){
                this.page_current = 1
            },
            'total+page_size+pages'(){
                this.init()
            },
            'page_current' (val){
                this.$emit('current_change',val)
                this.pages_array = this.get_page_array(val,this.pages,this.total_count)
            }
        },
        created (){
            this.init()
        }
    }
</script>