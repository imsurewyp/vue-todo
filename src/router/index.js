
import Vue from 'vue'
import Router from 'vue-router'
import TodoList from "@/components/TodoList";
import CompletedList from "@/components/CompletedList";

Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path:'/',
            name:'init',
            component:TodoList
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
