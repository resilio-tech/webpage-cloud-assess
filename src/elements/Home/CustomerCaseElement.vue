<template>
	<div class="customer-case container">
		<div class="content">
			<h1 id="customer-case">Cas client</h1>
			<div class="customer">
				<img src="@/assets/media/exoscale-logo.svg" alt="customer" class="customer-img"/>
				<p>{{ translate('customerCase.exoscale.resume')}}</p>
				<div class="customer-infos">
					<CardList :list="list" :width="!isMobile ? '50%' : ''" :padding="!isMobile ? '' : '15px'"/>
					<p><TranslateRenderer :translate-key="'customerCase.exoscale.toCome'"/></p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';
import { translate } from '@/translation/translate';
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';

const isMobile = window.innerWidth < 768;
const list: string[] = [
	'customerCase.exoscale.point1',
	'customerCase.exoscale.point2',
	'customerCase.exoscale.point3'
]
</script>

<style scoped lang="scss">
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 40px;
	}

	.customer {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: $medium-gap;

		img {
			height: 100px;
		}
		p {
			text-align: center;
			font-weight: bold;
			padding: $large-padding $xlarge-padding;
		}

		.customer-infos {
			display: flex;
			justify-content: space-between;

			p {
				width: 50%;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.customer {
			width: 100%;

			.customer-infos {
				flex-direction: column;

				p {
					width: 100%;
				}
			}

			p {
				padding: 0;
			}
		}
	}
}
</style>