<template>
  <div>
    son.vue <br />
    <button @click="minus">-</button>
    <!-- 3.0子组件使用接收来的属性（数据） -->
    <input type="text" v-model="abc">
    <button @click="plus">+</button>
  </div>
</template>

<script>
export default {
	props: ['abc'], // 2.0子组件接收父组件传递来的属性
	methods: {
		minus() {
			this.abc--; // 单独修改传过来的子组件属性会报错，因为数据从父组件到子组件是：单向数据流动
		},
		plus() {
      this.abc++; // 单独修改传过来的子组件属性会报错，因为数据从父组件到子组件是：单向数据流动
      // 如果真要修改abc的话，把abc赋值给子组件自己的属性再修改就好
		}
	}
};
</script>

<style>
input {
	width: 30px;
}
</style>
