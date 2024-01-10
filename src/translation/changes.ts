import { h } from 'vue';
import CloudAssess from '../components/CloudAssess.vue';

export const changes = {
	break: () => h('br'),
	bold: (text: string) => h('b', {}, text),
	boldOrange: (text: string) => h('b', { style: 'color: #F77B0B' }, text),
	cloudAssessBlackOrange: () => h(CloudAssess, { format: "blackOrange" }),
	cloudAssessBlackWhite: () => h(CloudAssess, { format: "blackWhite" }),
	linkResilio: (text: string) => h('a', { href: 'https://resilio-solutions.com' }, text),
	linkKleis: (text: string) => h('a', { href: 'https://kleis.ch' }, text)
};