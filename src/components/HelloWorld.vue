<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="inCrement">count is: {{ count }}</button>
</template>

<script lang="ts" setup>
import { defineProps, computed, onMounted } from 'vue';
import { useTestStore } from '@src/store/test';
// 定义props的数据类型
type Props = {
  msg: string
}

defineProps<Props>();
// 获取test模块的状态机
const store = useTestStore();
// 获取状态机中的count
const count = computed(() => {
  return store.count;
});
const inCrement = () => {
  // 改变状态机中的count
  store.increment();
};
// mounted生命周期
onMounted(() => {
  // 使用action设置state中的accessToken
  store.setToken('666');
});

</script>

<style lang="scss" scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
