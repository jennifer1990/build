<template>
    <!-- <div>
        <pre>
        <code class="html">
            var a = 'sss';
            console.log(a)
        </code>
        </pre>
        <pre>
        <code class="javascript">
            var a = 'sss';
            console.log(a)
        </code>
        </pre>

          <pre>
        <code class="html">
            <div>
                 <div>
                      <span></span>
                  </div> 
              </div>  
        </code>
        </pre>
    </div> -->
    <div style="padding:20px 100px;">
        <br>
        <a class="h3" v-link="{name:'button'}">button（按钮）</a><br>
        <!-- <a class="h3" v-link="{name:'layout'}">layout</a><br> -->
        <!-- <a class="h3" v-link="{name:'form'}">form</a><br> -->
        <!-- <a class="h3" v-link="{name:'components'}">components</a><br> -->
        <!-- <a class="h3" v-link="{name:'icons'}">icons</a><br> -->
        <!-- <a class="h3" v-link="{name:'svg'}">svg</a><br> -->
        <!-- <a class="h3" v-link="{name:'collapse'}">collapse</a><br> -->
        <!-- <a class="h3" v-link="{name:'dropdown'}">dropdown</a><br> -->
        <!-- <a class="h3" v-link="{name:'validatorradio'}">validatorradio</a><br> -->
        <!-- <a class="h3" v-link="{name:'validatorex1'}">validatorex1</a><br> -->
        <!-- <a class="h3" v-link="{name:'form-unit'}">form-unit</a><br> -->
        
        <!-- <a class="h3" v-link="{name:'search-condition'}">search-condition</a><br> -->
        <a class="h3" v-link="{name:'tab-bor'}">tab-bor（tab导航——边框）</a><br>
        <a class="h3" v-link="{name:'tab-bg'}">tab-bg（tab导航——背景）</a><br>
        <a class="h3" v-link="{name:'table-striped'}">table-striped（表格-隔行添加背景色）</a><br>
        <!-- <a class="h3" v-link="{name:'rules-introduce'}">rules-introduce</a><br> -->
        <!-- <a class="h3" v-link="{name:'upload-input'}">upload-input</a><br> -->
        <a class="h3" v-link="{name:'paging'}">paging(分页)</a><br>
        <a class="h3" v-link="{name:'toast'}">toast(提示框)</a><br>
        <a class="h3" v-link="{name:'dialog-content'}">dialog-content(内容弹出框)</a><br>
        <a class="h3" v-link="{name:'dialog-icon'}">dialog-icon(图标弹出框)</a><br>
        <a class="h3" v-link="{name:'date'}">date(日期)</a><br>
        <a class="h3" v-link="{name:'radio'}">radio(单选)</a><br>
        <a class="h3" v-link="{name:'checkbox'}">checkbox(多选)</a><br>
        <a class="h3" v-link="{name:'switch'}">switch(开关)</a><br>
        <a class="h3" v-link="{name:'animation-loading'}">animation-loading(点点点加载动画)</a><br>
        <a class="h3" v-link="{name:'exercise'}">exercise(vue练习)</a><br>
        <a class="h3" v-link="{name:'add-and-delete'}">add-and-delete(vue练习——添加与删除)</a><br>
        <a class="h3" v-link="{name:'curd'}">curd(vue练习——增删改查)</a><br>
        <a class="h3" v-link="{name:'tally'}">tally(标签)</a><br>
        <a class="h3" v-link="{name:'quanxian'}">quanxian(权限组件)</a><br>
        <a class="h3" v-link="{name:'vue实例'}">vue实例(所有实例)</a><br>
        <a class="h3" v-link="{name:'vue实例练习'}">vue实例练习(练习页面)</a><br>
        <a class="h3" v-link="{name:'image'}">查看图片组件</a><br>
        <a class="h3" v-link="{name:'仿qq个性名片标签'}">仿qq个性名片标签</a><br>
        <a class="h3" v-link="{name:'选择门店'}">选择门店</a><br>
        <a class="h3" v-link="{name:'列表的增删改查'}">列表的增删改查</a><br>

        
       

    </div>


</template>

<style lang="sass">
    dt, dd {
        display: inline;
        margin: 0;
    }

    dd {
        font-weight: 600;
    }

    dd + dt::before {
        content: "\A";
        white-space: pre;
    }

    dd + dd::before {
        content: ', ';
        font-weight: normal;
        margin-left: -.25em;
    }
    a:visited{
        background: green;
    }
</style>
<script >
    export default {
        data (){
            return {

            }
        },
        ready (){
        }
    }
</script>