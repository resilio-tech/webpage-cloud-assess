<template>
	<div class="card" :style="updateCardStyle">
		<h4 v-if="props.title"><TranslateRenderer :translate-key="props.title"/></h4>
		<ul>
			<li v-for="(item, index) in props.list" :key="index" :style="updateListItemStyle">
				<TranslateRenderer :translate-key="item"/>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';

const isMobile = window.innerWidth < 768;

const props = defineProps<{
	title?: string;
	list: string[];
	backgroundColor?: string;
	color?: string;
	width?: string;
	padding?: string;
}>()

const updateCardStyle = computed(() => ({
	backgroundColor: props.backgroundColor || 'white',
	width: props.width ? props.width : isMobile ? '100%' : '20%',
	padding: props.padding || '30px 50px 20px 50px',
}))

const updateListItemStyle = computed(() => ({
	color: props.color || 'black',
}))
</script>

<style scoped lang="scss">
.card {
	border-radius: 10px;

	h4 {
		font-family: 'Roboto', sans-serif;
		font-weight: bold;
	}

	ul {
		list-style-type: disc;

		li {
			padding-top: 15px;
		}
	}
}

@media screen and (max-width: 768px) {
	.card {
		padding: $medium-padding;
	}
}
</style>