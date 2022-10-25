<template>
  <div id="app">
    <div class="header">
      <input type="text" placeholder="请添加任务，完成后按回车" v-model="addInputValue" @keyup.enter="addTask($event.target.value)">
    </div>
    <div class="content-body">
      <div class="left-nav">
        <button>todo</button>
        <button>completed</button>
      </div>
      <div class="right-content">
        <div class="todo-tasks-wrapper">
          <span>这是待完成tasks</span>
          <ul class="todo-tasks">
            <li v-for="(item) in todoTasks" :key="item.id">
              <!-- key值为index时在toggle过程中出现bug，不理解-->
              <input type="checkbox" v-model="item.done">
              <input type="text" v-model = item.value :disabled="item.isDisabled"
                     @keyup.enter="handleEditInputEnter(item,$event.target.value)">
              <button @click="editTask(item)"> edit </button>
              <button @click="handleDeleteTask(item)"> delete </button>
            </li>
          </ul>
        </div>
        <div class="completed-tasks-wrapper">
          <span>这是已完成tasks</span>
          <ul class="completed-tasks">
            <li v-for="(item) in completedTasks" :key="item.id">
              <input type="checkbox" v-model="item.done">
              <input type="text" v-model = item.value  :disabled="item.isDisabled"
                     @keyup.enter="handleEditInputEnter(item,$event.target.value)">
              <button @click="editTask(item)"> edit </button>
              <button @click="handleDeleteTask(item)"> delete </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
export default {
  name: 'App',
  data:function(){
    return {
      tasksArr: [
        { id:'1', value: "001", done: false,isDisabled:true},
        { id:'2', value: "002", done: false,isDisabled:true},
        { id:'3', value: "003", done: true,isDisabled:true },
      ],
      addInputValue:'',
    }
  },
  computed:{
    todoTasks:function(){
      return this.tasksArr.filter((task) =>(task.done===false))
    },
    completedTasks:function(){
      return this.tasksArr.filter(task=>task.done===true)
    },
  },
  methods:{
    addTask:function(value){
      const newTodo = {id:nanoid(),value,done:false,isDisabled:true};
      this.tasksArr.push(newTodo);
      this.addInputValue='';
    },
    editTask:function (item){
     const index = this.tasksArr.indexOf(item);
     this.tasksArr[index].isDisabled=false;
    },
    handleEditInputEnter:function(item,value){
      const index = this.tasksArr.indexOf(item);
      this.tasksArr[index].value=value;
      this.tasksArr[index].isDisabled=true;
    },
    handleDeleteTask:function(item){
      const index = this.tasksArr.indexOf(item);
      this.tasksArr.splice(index,1)
    }
  }

}
</script>

<style lang="scss" scoped>
#app{
  display: flex;
  flex-direction: column;
  .header{
    width: 100%;
    background-color: aqua;
    height:40px;
    input{
      width:220px;
      margin-top: 10px;
    }
  }
  .content-body{
    display: flex;
    flex-direction: row;
    height: 600px;
    .left-nav{
      padding-top: 20px;
      width: 180px;
      background-color: salmon;
      display: flex;
      flex-direction: column;
    }
    .right-content{
      padding-left: 200px;
      flex: 1;
      background-color: bisque;
    }
  }
}

</style>
