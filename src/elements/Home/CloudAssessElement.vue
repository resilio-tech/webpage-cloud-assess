<template>
	<div class="cloud-assess container">
		<div class="content">
			<h1><TranslateRenderer :translate-key="'cloudAssess.whatIsIt'"/></h1>
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
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';

const cardListTitles: string[] = [
	'cloudAssess.what.footprintServices.step1.title',
	'cloudAssess.what.footprintServices.step2.title',
	'cloudAssess.what.footprintServices.step3.title',
]
const firstList: string[] = [
	'cloudAssess.what.footprintServices.step1.point1',
	'cloudAssess.what.footprintServices.step1.point2',
	'cloudAssess.what.footprintServices.step1.point3',
]

const secondList: string[] = [
	'cloudAssess.what.footprintServices.step2.point1',
	'cloudAssess.what.footprintServices.step2.point2',
	'cloudAssess.what.footprintServices.step2.point3',
	'cloudAssess.what.footprintServices.step2.point4',
]

const thirdList: string[] = [
	'cloudAssess.what.footprintServices.step3.point1',
	'cloudAssess.what.footprintServices.step3.point2',
	'cloudAssess.what.footprintServices.step3.point3',
	'cloudAssess.what.footprintServices.step3.point4',
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