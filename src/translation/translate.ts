import { h, VNode } from "vue";
import { en } from './languages/en';
import { fr } from './languages/fr';

export type Language = { [key: string]: string };
export type TranslateChange = { [key: string]: string | ((sequence: string) => string | VNode) }

const devMode = process.env.NODE_ENV === 'development';

export function translate(index: string, change?: TranslateChange | string, lang?: string): string | VNode {
	const currentLang = 'en';

	lang = typeof change === 'string' ? change : lang || currentLang;
	const translateChange = (typeof change === 'string' ? {} : change) || {};

	let language;
	switch (lang) {
		case 'fr':
			language = fr;
			break;
		default:
			language = en;
	}

	if (language) {
		let translate = language[index];
		if (!translate) {
			if (devMode) console.error(`Translate for '${index}' in '${lang}' missing`);
			translate = en[index];
			if (!translate && devMode) console.error(`Translate for '${index}' in 'en' missing`);
		} else if (change) {
			const sequences = translate.split(/(&\S+\([^()]*\))/g);
			const list = sequences.map(seq => {
				for (const itr in translateChange) {
					const match = seq.match(new RegExp(`&${itr}[(]([^()]*)[)]`));
					if (match) {
						const c = translateChange[itr];
						return typeof c === 'string' ? c : c(match[1]);
					}
				}
				return seq.replace(/&\S+\((.*)\)/, '$1');
			});

			return h('div', {}, list); // Wrap the list in a div or a fragment
		}

		return translate.replace(/&\S+\(([^()]*)\)/, '$1') ?? index;
	}
	return index;
}