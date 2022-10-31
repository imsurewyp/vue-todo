<template>
  <div class="left-nav">
    <slot></slot>
    <button>todo</button>
    <button>completed</button>
  </div>
</template>

<script>
export default {
  name: "left-nav",
};
</script>

<style lang="scss" scoped>
.left-nav{
  padding-top: 20px;
  width: 180px;
  background-color: darkcyan;
  display: flex;
  flex-direction: column;
}
</style>
