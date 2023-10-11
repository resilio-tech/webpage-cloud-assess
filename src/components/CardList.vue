<template>
	<div class="card" :style="updateCardStyle">
		<ul>
			<li :style="updateListItemStyle" v-for="item in props.list" :key="item" v-html="item"/>
		</ul>
	</div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

const props = defineProps<{
	list: string[];
	backgroundColor?: string;
	color?: string;
}>()

const updateCardStyle = computed(() => ({
	backgroundColor: props.backgroundColor || 'white',
}))

const updateListItemStyle = computed(() => ({
	color: props.color || 'black',
}))
</script>

<style scoped lang="scss">
.card {
	border-radius: 10px;
	padding: $medium-padding $xlarge-padding;

	ul {
		list-style-type: disc;

		li {
			padding-top: 15px;
		}
	}
}
</style>