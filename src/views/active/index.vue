<template>
  <div>
    <el-tabs tab-position="left" style="height: 100%" class="demo-tabs">
      <el-tab-pane label="活动页面">
        <active-main></active-main>
      </el-tab-pane>
      <el-tab-pane label="中奖页面">

      </el-tab-pane>
      <el-tab-pane label="未中奖页">

      </el-tab-pane>
      <el-tab-pane label="分享效果">

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script lang='ts'>
import ActiveMain from './components/ActiveMain.vue'
export default {
  components: {
    ActiveMain
  },
  setup() {
    
  },
};
</script>
<style lang="scss" scoped>
</style>