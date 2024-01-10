import { defineComponent, VNode } from 'vue';

export const VNodeRenderer = defineComponent({
	props: {
		node: {
			type: Object as () => VNode,
			required: true
		}
	},
	render() {
		return this.node;
	}
});