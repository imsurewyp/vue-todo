import Vue from 'vue';
import Vuex from 'vuex';
import {nanoid} from "nanoid";
import {filter, findIndex} from "lodash";


Vue.use(Vuex);

export  const store = new Vuex.Store({
    state:{
        tasksArr: [
            { id:'1', value: "001", done: false,isDisabled:true},
            { id:'2', value: "002", done: false,isDisabled:true},
            { id:'3', value: "003", done: true,isDisabled:true },
        ]
    },
    getters:{
        completedTasks(state){
            return filter(state.tasksArr, ['done', true])
        },
        todoTasks(state){
            return filter(state.tasksArr, ['done', false])

        },
    },
    mutations:{
        addTask:function(state,value){
            const newTodo = {id:nanoid(),value,done:false,isDisabled:true};
            state.tasksArr.push(newTodo);
        },
        editTask:function (state,item){
            const index = findIndex(state.tasksArr, item)
            state.tasksArr[index].isDisabled=false;
        },
        handleEditInputEnter:function(state,payload){
            const index = findIndex(state.tasksArr, payload.item);
            state.tasksArr[index].isDisabled=true;
        },
        handleDeleteTask:function(state,item){
            const index = findIndex(state.tasksArr, item);
            state.tasksArr.splice(index,1);
            //为啥这种页面不能自动渲染呢
            // remove(state.tasksArr,item)
            console.log(state.tasksArr)
        },
        handleTaskState:function(state,item){
            const index = findIndex(state.tasksArr, item);
            state.tasksArr[index].done=!state.tasksArr[index].done;
        },
        handleInputValueUpdate:function(state,payload){
            const index = findIndex(state.tasksArr, payload.item);
            state.tasksArr[index].value=payload.value;
        }
    }
})
