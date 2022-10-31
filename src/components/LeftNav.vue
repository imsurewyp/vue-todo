<template>
  <div class="left-nav">
    <slot></slot>
    <router-link to="/todo">todo</router-link>
    <router-link to="/completed">completed</router-link>
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
