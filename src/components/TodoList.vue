<template>
  <div class="todo-tasks-wrapper">
    <span>这是待完成tasks</span>
    <ul class="todo-tasks">
      <li v-for="(item) in todoTasks" :key="item.id">

        <!-- key值为index时在toggle过程中出现bug，不理解-->
        <input type="checkbox" v-bind:checked="item.done" v-on:change="handleChange(item)">
        <input type="text"
               :value="item.value"
               @input="updateInput(item,$event.target.value)"
               :disabled="item.isDisabled"
               @keyup.enter="handleCompletedEditInputEnter(item,$event.target.value)"
        >
        <button @click="editCompletedTask(item)"> edit </button>
        <button @click="handleCompletedDeleteTask(item)"> delete </button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "todo-list",
  computed:{
    todoTasks(){
      return this.$store.getters.todoTasks
    } ,
  },
  methods:{
    handleChange:function(item){
      this.$store.commit('handleTaskState',item)
    },
    updateInput:function(item,value){
      this.$store.commit('handleInputValueUpdate',{item,value})
    },
    handleCompletedEditInputEnter(item,value){
      this.$store.commit('handleEditInputEnter',{item,value})
    },
    editCompletedTask(item){
      this.$store.commit('editTask',item)
    },
    handleCompletedDeleteTask(item){
      this.$store.commit('handleDeleteTask',item)
    }

  }
};
</script>

<style lang="scss" scoped>
</style>
