<template>
  <div class="home">
  </div>
</template>

<script setup lang="ts">
import { getDictList } from "@/api/common";
import { onMounted } from "vue";
onMounted(() => {
  getDictList().then((res) => {
    console.log(res, 123321);
  });
});
</script>

<style lang="less" scoped>
.home {
  color: white;
}
</style>
