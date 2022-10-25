<template>
  <div class="completed-tasks-wrapper">
    <span>这是已完成tasks</span>
    <ul class="completed-tasks">
      <li v-for="(item) in completedTasks" :key="item.id">
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
  name: "completed-list",
  props:['completedTasks','editTask','handleEditInputEnter','handleDeleteTask']
};
</script>

<style lang="scss" scoped>

</style>

