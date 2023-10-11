<template>
	<section class="home-view">
		<LandingElement/>
	</section>
</template>

<script setup lang="ts">
import LandingElement from '@/views/Home/elements/LandingElement.vue';
</script>

<style scoped lang="scss">
.home-view {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
	border-top: $primary-orange-light solid 1px;
}
</style>
