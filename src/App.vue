<template>
  <div id="app">
    <div class="header">
      <input type="text" placeholder="请添加任务，完成后按回车" v-model="addInputValue" @keyup.enter="addTask($event.target.value)">
      <span>{{addInputValue}}</span>
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
            <li v-for="(item,index) in todoTasks" :key="index">
              <input type="checkbox" >
              {{ item.value}}
            </li>
          </ul>
        </div>
        <div class="completed-tasks-wrapper">
          <span>这是已完成tasks</span>
          <ul class="completed-tasks">
            <li v-for="(item,index) in completedTasks" :key="index">
              <input type="checkbox" checked>
              {{ item.value }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data:()=>{
    return {
      tasksArr: [
        {  value: "001", done: false },
        {  value: "002", done: false },
        {  value: "003", done: true },
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
      const newTodo = {value,done:false};
      this.todoTasks.push(newTodo);
      this.addInputValue='';
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
