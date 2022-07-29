<template>
  <div class="info">
    <div class="mobile-box">
      <div class="mobile">
        <div class="mobile-header">
          <span>活动主题功能测试</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
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