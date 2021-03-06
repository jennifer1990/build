export default function (Vue,router){
    router.map({

    '/':{
        router_type:'root',
        name:'root',
        component: function(resolve){
            require(['./views/app.vue'],resolve)
        },
        subRoutes:{

            // 会员主页
            '/home':{
                name:'home',
                title:'主页',
                component: function(resolve){
                    require(['./views/home/index.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 按钮
            '/button':{
                name:'button',
                title:'按钮',
                component: function(resolve){
                    require(['./views/button/button.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab导航（边框）
            '/tab-bor':{
                name:'tab-bor',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bor.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab导航（背景）
            '/tab-bg':{
                name:'tab-bg',
                title:'tab导航',
                component: function(resolve){
                    require(['./views/tab/tab-bg.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // table（隔行添加背景色）
            '/table-striped':{
                name:'table-striped',
                title:'table',
                component: function(resolve){
                    require(['./views/table/table-striped.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 分页
            '/paging':{
                name:'paging',
                title:'paging',
                component: function(resolve){
                    require(['./views/paging/paging.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 提示框
            '/toast':{
                name:'toast',
                title:'提示框',
                component: function(resolve){
                    require(['./views/toast/toast.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 弹框
            // 内容弹框
            '/dialog-content':{
                name:'dialog-content',
                title:'内容弹框',
                component: function(resolve){
                    require(['./views/dialog/dialog-content.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 图标弹框
            '/dialog-icon':{
                name:'dialog-icon',
                title:'内容弹框',
                component: function(resolve){
                    require(['./views/dialog/dialog-icon.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 日期
            '/date':{
                name:'date',
                title:'日期',
                component: function(resolve){
                    require(['./views/date/date.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 单选
            '/radio':{
                name:'radio',
                title:'单选',
                component: function(resolve){
                    require(['./views/radio/radio.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 多选
            '/checkbox':{
                name:'checkbox',
                title:'多选',
                component: function(resolve){
                    require(['./views/checkbox/checkbox.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 开关
            '/switch':{
                name:'switch',
                title:'开关',
                component: function(resolve){
                    require(['./views/switch/switch.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 查看图片组件
            '/image':{
                name:'image',
                title:'查看图片组件',
                component: function(resolve){
                    require(['./views/image/image.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 点点点加载动画
            '/animation-loading':{
                name:'animation-loading',
                title:'点点点加载动画',
                component: function(resolve){
                    require(['./views/animation-loading/animation-loading.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // vue 练习
            '/exercise':{
                name:'exercise',
                title:'点点点加载动画',
                component: function(resolve){
                    require(['./views/learn-vue/exercise.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },
            // vue 练习(添加与删除)
            '/add-and-delete':{
                name:'add-and-delete',
                title:'添加与删除',
                component: function(resolve){
                    require(['./views/learn-vue/add-and-delete.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },
            // vue 练习(增删改查)
            '/curd':{
                name:'curd',
                title:'增删改查',
                component: function(resolve){
                    require(['./views/learn-vue/curd.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tally
            '/tally':{
                name:'tally',
                title:'标签',
                component: function(resolve){
                    require(['./views/select/tally.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // quanxian
            '/quanxian':{
                name:'quanxian',
                title:'标签',
                component: function(resolve){
                    require(['./views/quanxian/quanxian.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // *****************************************************************************************************

            // vue 学习
            '/vue实例':{
                name:'vue实例',
                title:'标签',
                component: function(resolve){
                    require(['./views/learn-vue/vue实例.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // vue 学习练习
            '/vue实例练习':{
                name:'vue实例练习',
                title:'标签',
                component: function(resolve){
                    require(['./views/learn-vue/vue实例练习.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 仿qq个性名片标签
            '/仿qq个性名片标签':{
                name:'仿qq个性名片标签',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/仿qq个性名片标签.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 选择门店
            '/选择门店':{
                name:'选择门店',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/选择门店.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 列表的增删改查
            '/列表的增删改查':{
                name:'列表的增删改查',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/列表的增删改查.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // vue实现展开收起效果
            '/vue实现展开收起效果':{
                name:'vue实现展开收起效果',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/vue实现展开收起效果.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // tab切换展示内容
            '/tab切换展示内容':{
                name:'tab切换展示内容',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/tab切换展示内容.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },

            // 各类下拉列表
            '/各类下拉列表':{
                name:'各类下拉列表',
                title:'标签',
                component: function(resolve){
                    require(['./views/shili/各类下拉列表.vue'], (res)=> {
                        resolve(res)
                    })
                }
            },


        

        }
    }

    })


    router.beforeEach(transition =>{
        if(transition.to.name == 'root') {
            router.go({ name: 'home'})
        }
        transition.next()
    })
    
    router.afterEach(transition =>{
        setTimeout(()=>{
            
            Array.prototype.slice.call(document.querySelectorAll('pre code')).forEach(val=>{
                if(val.className === 'html'){
                    val.innerHTML = val.innerHTML.replace(/</g,'&lt;').replace(/>/g,'&gt;')
                }
                hljs.highlightBlock(val)
            })
        })
        
    })
}