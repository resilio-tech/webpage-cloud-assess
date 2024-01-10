<template>
	<main>
		<HeaderBar/>
		<div class="body">
			<router-view/>
		</div>
		<FooterBar/>
	</main>
</template>

<script setup lang="ts">
import HeaderBar from '@/components/template/HeaderBar.vue';
import FooterBar from '@/components/template/FooterBar.vue';
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

main {
	display: flex;
	flex-direction: column;
	width: 100%;
	height: 100%;
}
</style>