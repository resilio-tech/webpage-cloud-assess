<template>
	<div class="certification container">
		<div class="content">
			<div class="icon-container">
				<img src="@/assets/media/customer-case-icon.svg" alt="customer-icon" class="customer-icon"/>
			</div>
			<h2 id="certification" class="orange-text">{{ translate('getCertified') }}</h2>
			<p><VNodeRenderer :node="translate('certification.resume', changes)"/></p>
		</div>
	</div>
</template>

<script setup lang="ts">

import { translate } from '@/translation/translate.ts';
import { VNodeRenderer } from '@/components/VNodeRenderer';
import { changes } from '@/translation/changes';
</script>

<style scoped lang="scss">
.certification {
	display: flex;
	justify-content: center;
	align-items: center;

	.content {
		padding: 0 0 $xlarge-padding 0;

		.icon-container {
			display: flex;
			justify-content: center;
		}

		h2 {
			text-align: center;
		}
	}

}

</style>