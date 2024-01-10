<template>
	<div class="cloud-assess container">
		<div class="content">
			<h1><VNodeRenderer :node="title"/></h1>
			<div class="card-container">
				<CardList
					v-for="(list, index) in lists"
					:key="index"
					:title="cardListTitles[index]"
					:list="list"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';
import { translate } from '@/translation/translate';
import { changes } from '@/translation/changes';
import { VNodeRenderer } from '@/components/VNodeRenderer';
import { TranslatedStringList } from '@/types/TranslatedStringList';

const title = translate('cloudAssess.whatIsIt', changes);

const cardListTitles: TranslatedStringList = [
	translate('cloudAssess.what.footprintServices.step1.title') as string,
	translate('cloudAssess.what.footprintServices.step2.title') as string,
	translate('cloudAssess.what.footprintServices.step3.title') as string,
]
const firstList: TranslatedStringList = [
	translate('cloudAssess.what.footprintServices.step1.point1') as string,
	translate('cloudAssess.what.footprintServices.step1.point2', changes),
	translate('cloudAssess.what.footprintServices.step1.point3', changes),
]

const secondList: TranslatedStringList = [
	translate('cloudAssess.what.footprintServices.step2.point1', changes),
	translate('cloudAssess.what.footprintServices.step2.point2', changes),
	translate('cloudAssess.what.footprintServices.step2.point3', changes),
	translate('cloudAssess.what.footprintServices.step2.point4', changes),
]

const thirdList: TranslatedStringList = [
	translate('cloudAssess.what.footprintServices.step3.point1', changes),
	translate('cloudAssess.what.footprintServices.step3.point2', changes),
	translate('cloudAssess.what.footprintServices.step3.point3', changes),
	translate('cloudAssess.what.footprintServices.step3.point4', changes),
]

const lists = [firstList, secondList, thirdList];
</script>

<style scoped lang="scss">
.cloud-assess {
	background: $primary-orange-light;
	justify-content: center;

	.content h1 {
		color: white;
		text-align: center;
		font-weight: 600;
	}

	.card-container {
		display: flex;
		justify-content: space-around;
	}
}
@media screen and (max-width: 768px) {
	.cloud-assess {
		.content h1 {
			font-size: 28px;
		}

		.card-container {
			flex-direction: column;
			padding: 0 $xlarge-padding;
			gap: $xlarge-gap;
		}
	}
}

</style>