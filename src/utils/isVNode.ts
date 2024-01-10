import { VNode } from 'vue';

export const isVNode = (item: any): item is VNode => item && item.__v_isVNode;