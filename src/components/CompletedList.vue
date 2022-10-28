<template>
  <div class="completed-tasks-wrapper">
    <span>这是已完成tasks</span>
    <ul class="completed-tasks">
      <li v-for="(item) in completedTasks" :key="item.id">
        <!-- key值为index时在toggle过程中出现bug，不理解-->
        <input type="checkbox" v-bind:checked="item.done" v-on:change="handleChange(item)">
        <input type="text"
               v-bind:value="item.value"
               @input="updateInput(item,$event.target.value)"
               :disabled="item.isDisabled"
               @keyup.enter="handleTodoEditInputEnter(item,$event.target.value)">
        <button @click="editTodoTask(item)"> edit </button>
        <button @click="handleTodoDeleteTask(item)"> delete </button>
      </li>
    </ul>
  </div>

</template>

<script>

export default {
  name: "completed-list",
  computed:{
    completedTasks(){return this.$store.getters.completedTasks}
  },
  methods:{
    handleChange:function(item){
      this.$store.commit('handleTaskState',item)
    },
    updateInput:function(item,value){
      this.$store.commit('handleInputValueUpdate',{item,value})
    },
    handleTodoEditInputEnter(item,value){
      this.$store.commit('handleEditInputEnter',{item,value})
    },
    editTodoTask(item){
      this.$store.commit('editTask',item)
    },
    handleTodoDeleteTask(item){
      this.$store.commit('handleDeleteTask',item)
    }

  }

};
</script>

<style lang="scss" scoped>

</style>

