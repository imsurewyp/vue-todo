<template>
  <div >
    <TodoList :todoTasks="todoTasks" :editTask="editTask"
              :handleEditInputEnter="handleEditInputEnter"
              :handleDeleteTask="handleDeleteTask"></TodoList>
    <CompletedList :completedTasks="completedTasks" :editTask="editTask"
                   :handleEditInputEnter="handleEditInputEnter"
                   :handleDeleteTask="handleDeleteTask"></CompletedList>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import CompletedList from "@/components/CompletedList";
export default {
  name: "right-content",
  props:['todoTasks','completedTasks','editTask','handleEditInputEnter','handleDeleteTask'],
  components: { CompletedList, TodoList},
};
</script>

<style lang="scss" scoped>

</style>
