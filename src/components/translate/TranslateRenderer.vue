<template>
	<template v-if="isVNode(translateResult)">
		<VNodeRenderer :node="translateResult"/>
	</template>
	<template v-else>
		{{ translateResult }}
	</template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { translate } from '@/translation/translate';
import { changes } from '@/translation/changes';
import { isVNode } from '@/utils/isVNode';
import { VNodeRenderer } from '@/components/translate/VNodeRenderer';

const props = defineProps<{
	translateKey: string
}>();

const translateResult = computed(() => translate(props.translateKey, changes));
</script>