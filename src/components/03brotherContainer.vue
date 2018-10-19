<template>
  <div>
  	<b>兄弟组件传参</b><br />
    <One />
    <hr />
    <Two />
  </div>
</template>

<script>
import One from '@/components/03one.vue';
import Two from '@/components/03two.vue';
export default {
  components: {
    One,
    Two
  }
};
</script>

<style>

</style>
