<template>
  <div id="app">
        <MyHeader  />
    <div class="content-body">
        <LeftNav />
      <div class="right-content">
        <RightContent/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import LeftNav from "@/components/LeftNav";
import RightContent from "@/components/RightContent";
export default {
  name: 'App',
  components: {RightContent, LeftNav, MyHeader},

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
