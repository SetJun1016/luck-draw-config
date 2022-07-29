<template>
  <div class="info">
    <div class="mobile-box">
      <div class="mobile">
        <div class="mobile-header">
          <span>活动主题功能测试</span>
        </div>
      </div>
    </div>
    <div class="mobile-config">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">基本信息</el-menu-item>
        <el-menu-item index="2">规则配置 </el-menu-item>
      </el-menu>
      <div v-show="activeIndex == 1">
          <basic-info></basic-info>
      </div>
      <div v-show="activeIndex == 2">asddasdadadaasdasda</div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
import BasicInfo from './components/BasicInfo.vue'
export default {
  components: {
    BasicInfo
  },
  setup() {
    let activeIndex = ref('1')
    const handleSelect = (key: string, keyPath: string[]) => {
      console.log(key, keyPath)
      activeIndex = ref(key)
    }
    return {
      activeIndex,
      handleSelect
    }
  },
};
</script>
<style lang="scss" scoped>
  .info {
    display: flex;
    justify-content: space-between;
  }

  .mobile-box {
    width: 40%;
    height: 780px;
    padding-top: 25px;
    background: #ddd;

    .mobile {
      width: 90%;
      height: 730px;
      margin: 0 auto;
      border: 2px solid #aaa;

      &-header {
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        background: #F2F2F2;
        font-size: 18px;
      }
    }
  }

  .mobile-config {
    width: 58%;
    background: #fff;
    height: 780px;
  }
</style>