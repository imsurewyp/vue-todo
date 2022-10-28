<template>
  <div >
    <TodoList></TodoList>
    <CompletedList ></CompletedList>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList";
import CompletedList from "@/components/CompletedList";
export default {
  name: "right-content",
  components: { CompletedList, TodoList},
};
</script>

<style lang="scss" scoped>

</style>
