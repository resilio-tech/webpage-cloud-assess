<template>
	<div class="stats container">
		<p>{{ translate('cloudAssess.info.company') }}</p>
		<p>{{ translate('cloudAssess.info.team') }}</p>
		<VNodeRenderer :node="translate('cloudAssess.githubRepository', changes)" />
	</div>
</template>

<script setup lang="ts">
import { VNodeRenderer } from '@/components/VNodeRenderer';
import { translate } from '@/translation/translate';
import { changes } from '@/translation/changes';

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