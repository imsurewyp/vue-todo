<template>
  <div id="app">
    <MyHeader :addTask="addTask" />
    <div class="content-body">
      <LeftNav />
      <div class="right-content">
        <RightContent :todoTasks="todoTasks" :completedTasks="completedTasks"
                      :editTask="editTask" :handleEditInputEnter="handleEditInputEnter"
                      :handleDeleteTask="handleDeleteTask"/>
      </div>
    </div>
  </div>
</template>

<script>
import { nanoid } from "nanoid";
import MyHeader from "@/components/MyHeader";
import LeftNav from "@/components/LeftNav";
import RightContent from "@/components/RightContent";
export default {
  name: 'App',
  components: {RightContent, LeftNav, MyHeader},
  data:function(){
    return {
      tasksArr: [
        { id:'1', value: "001", done: false,isDisabled:true},
        { id:'2', value: "002", done: false,isDisabled:true},
        { id:'3', value: "003", done: true,isDisabled:true },
      ],
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

  .content-body{
    display: flex;
    flex-direction: row;
    height: 600px;
    .right-content{
      padding-left: 200px;
      flex: 1;
      background-color: silver;
    }
  }
}

</style>
