import { defineStore } from "pinia";
const useAppStore = defineStore("app", () => {
  const appName = "monitor";
  return {
    appName
  };
});
export default useAppStore;
