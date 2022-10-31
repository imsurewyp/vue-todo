<template>
  <div id="app">
    <MyHeader  />
    <div class="content-body">
      <LeftNav >
        <span>通过点击查看todo或completed列表</span>
      </LeftNav>
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
$content-height: 600px;
$padding: 100px;

@mixin display-style($display:flex,$direction:column){
  display: $display;
  flex-direction: $direction;
  @content;
}

#app{
  @include display-style;

  .content-body{
    @include display-style($direction:row){
      height: $content-height;
    };
    .right-content{
      padding-left: $padding;
      flex: 1;
      background-color: silver;
    }
  }
}

</style>
