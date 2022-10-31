
import Vue from 'vue'
import Router from 'vue-router'
import TodoList from "@/components/TodoList";
import CompletedList from "@/components/CompletedList";
import Init from "@/components/Init";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'init',
            component:Init
        },
        {
            path:'/todo',
            name:'todo',
            component:TodoList
        },
        {
            path:'/completed',
            name:'completed',
            component:CompletedList
        },
    ]
})
