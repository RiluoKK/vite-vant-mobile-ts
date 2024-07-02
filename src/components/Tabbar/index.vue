<template>
  <!-- tabbar -->
  <van-tabbar v-model="active" active-color="#1CC88A" @change="onTabbarChange">
    <van-tabbar-item
      v-for="(v, i) in tabbarList"
      replace
      :to="v.path"
      :key="v.meta?.menuCode"
      :name="v.meta?.title"
    >
      {{ v.meta?.title }}
      <template #icon="props">
        <van-icon v-if="!props.active" :name="v.meta?.normalIcon" />
        <van-icon v-if="props.active" :name="v.meta?.activeIcon" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { ref } from "vue";
import { RouteRecordRaw, useRouter, useRoute } from "vue-router";
import { localStorage } from "@/utils/local-storage";

const active = ref("");
const router = useRouter();
const tabbarList = ref<RouteRecordRaw[]>([]);
onMounted(() => {
  active.value = localStorage.get("activeRoute");
  router.getRoutes().map((item) => {
    tabbarList.value.push(item);
  });
});
const onTabbarChange = (v: string) => {
  localStorage.set("activeRoute", v);
};
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
