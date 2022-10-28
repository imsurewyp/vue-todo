<template>
  <div class="header">
    <input type="text" placeholder="请添加任务，完成后按回车" v-model="addInputValue" @keyup.enter="handleEnter">
  </div>
</template>

<script>
import {nanoid} from "nanoid";

export default {
  name: "my-header",
  data() {
    return {
      addInputValue:'',
    };
  },
  methods:{
    addTask:function(value){
      const newTodo = {id:nanoid(),value,done:false,isDisabled:true};
      this.$store.state.tasksArr.push(newTodo);
    },
    handleEnter:function(){
      this.addTask(this.addInputValue);
      this.addInputValue='';
    }
  }
};

</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background-color: aqua;
  height:40px;
input{
  width:220px;
  margin-top: 10px;
}
}
</style>
