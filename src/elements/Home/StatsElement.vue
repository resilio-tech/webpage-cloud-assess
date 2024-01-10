<template>
	<div class="stats container">
		<p><TranslateRenderer :translate-key="'cloudAssess.info.company'"/></p>
		<p><TranslateRenderer :translate-key="'cloudAssess.info.team'"/></p>
		<TranslateRenderer :translate-key="'cloudAssess.githubRepository'"/>
	</div>
</template>

<script setup lang="ts">
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';
</script>

<style scoped lang="scss">

.stats {
	display: flex;
	width: 100%;
	justify-content: center;
	background: $primary-orange-light;
	padding: $xlarge-padding;
	gap: 100px;

	p, a {
		font-size: 18px;
		text-align: center;
		color: white;
		font-weight: bold;
	}

	a {
		text-decoration: underline;
		cursor: pointer;
	}
}

@media screen and (max-width: 768px) {
	.stats {
		flex-direction: column;
		justify-content: space-around;
		gap: $large-gap;
		padding: $medium-padding;
	}
}
</style>