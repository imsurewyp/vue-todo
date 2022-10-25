<template>
  <div class="todo-tasks-wrapper">
    <span>这是待完成tasks</span>
    <ul class="todo-tasks">
      <li v-for="(item) in todoTasks" :key="item.id">
        <!-- key值为index时在toggle过程中出现bug，不理解-->
        <input type="checkbox" v-model="item.done">
        <input type="text" v-model="item.value" :disabled="item.isDisabled"
               @keyup.enter="handleEditInputEnter(item,$event.target.value)">
        <button @click="editTask(item)"> edit </button>
        <button @click="handleDeleteTask(item)"> delete </button>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  name: "todo-list",
  props:['todoTasks','editTask','handleEditInputEnter','handleDeleteTask']
};
</script>

<style lang="scss" scoped>

</style>
