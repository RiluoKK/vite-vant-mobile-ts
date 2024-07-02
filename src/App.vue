<template>
  <div id="app">
    <div class="app-container">
      <router-view></router-view>
    </div>
    <!-- tabbar -->
    <div class="tabbar" v-if="tabbarVisible">
      <Tabbar></Tabbar>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const tabbarVisible = ref<boolean>(true);
onMounted(() => {
  tabbarVisible.value = router.currentRoute.value.meta.isTabbarPage;
});
</script>
<style lang="less" scoped>
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  .app-container {
    flex: 1;
  }
  .tabbar {
    height: var(--van-tabbar-height);
    background: white;
  }
}
</style>
