<template>
  <div>
    <b>father.vue父组件给子组件传参</b><br />
    <!-- 修改父组件数据不仅不会报错，还会把数据同步给子组件，从父到子：数据单向流动 -->
    <button @click="num++">+</button>
    <!-- 1.0 父组件把数据num传递给子组件的属性abc -->
    <son :abc="num" />
    <son :abc="num " />
    <!-- 数据单向流动：是为了防止多个子组件更改数据，导致数据冲突 -->
  </div>
</template>

<script>
// 引入子组件
import son from '@/components/01son.vue';
export default {
  data() {
    return {
      num: 2
    };
  },
  // 注册组件
  components: {
    son
  }
};
</script>
<style>
</style>
