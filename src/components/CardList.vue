<template>
	<div class="card" :style="updateCardStyle">
		<h4 v-if="props.title">{{ props.title }}</h4>
		<ul>
			<li v-for="(item, index) in props.list" :key="index" :style="updateListItemStyle">
				<template v-if="isVNode(item)">
					<VNodeRenderer :node="item" />
				</template>
				<span v-else v-html="item"></span>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { computed, VNode } from 'vue';
import { VNodeRenderer } from '@/components/VNodeRenderer';
import { TranslatedString, TranslatedStringList } from '@/types/TranslatedStringList';

const isMobile = window.innerWidth < 768;

const props = defineProps<{
	title?: TranslatedString;
	list: TranslatedStringList;
	backgroundColor?: string;
	color?: string;
	width?: string;
	padding?: string;
}>()

const isVNode = (item: any): item is VNode => item && item.__v_isVNode;

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