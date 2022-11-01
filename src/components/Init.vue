<template>
  <div>
   <el-table
      :data="tableData"
      stripe
      style="width: 500px">
    <el-table-column
        prop="id"
        label="编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="value"
        label="task名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="done"
        label="是否完成"
        width="180">
      <template v-slot="{row}">
        <el-tag
            :type="row.done === true ? 'primary' : 'success'"
            disable-transitions>{{row.done}}</el-tag>
      </template>
    </el-table-column>
  </el-table>

  </div>
</template>

<script>


export default {
  name:'init-page',
  data() {
    return {
      tableData: this.$store.state.tasksArr,
    }
  },
}
</script>
