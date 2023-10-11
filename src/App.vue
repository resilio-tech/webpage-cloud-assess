<template>
	<HeaderBar/>
	<router-view/>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/HeaderBar.vue';
</script>

<style lang="scss">
#app {
	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	font-weight: normal;
	overflow-x: hidden;
	overflow-y: auto;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: bottom;
}
</style>