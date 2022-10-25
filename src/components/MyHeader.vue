<template>
  <div class="header">
    <input type="text" placeholder="请添加任务，完成后按回车" v-model="addInputValue" @keyup.enter="handleEnter">
  </div>
</template>

<script>
export default {
  name: "my-header",
  props: ["addTask"],
  data() {
    return {
      addInputValue:'',
    };
  },
  methods:{
    handleEnter:function(){
      this.addTask(this.addInputValue);
      this.addInputValue='';
    }
  }
};

</script>

<style lang="scss" scoped>
.header{
  width: 100%;
  background-color: aqua;
  height:40px;
input{
  width:220px;
  margin-top: 10px;
}
}
</style>
