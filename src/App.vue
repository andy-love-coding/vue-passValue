<template>
  <div id="app">
  	<ul>
  		<li><a href="#/fts">父组件给子组件传参</a></li>
  		<li><a href="#/stf">子组件给父组件传参</a></li>
  		<li><a href="#/brother">兄弟组件传参</a></li>
  	</ul>
  	<hr /><hr />
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
</style>
