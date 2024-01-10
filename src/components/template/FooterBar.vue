<template>
	<section class="footer">
		<div class="footer-content">
			<p class="subtitle" v-for="(subtitle, index) in subtitles" :key="subtitle">
				<b>{{ subtitle }} :</b>
				<br/>
				<template v-if="isVNode(content[index])">
					<VNodeRenderer :node="content[index]" />
				</template>
				<span v-else v-html="content[index]"></span>
			</p>
			<div class="footer-logo">
				<img src="../../assets/media/flag-switzerland.svg" alt="flag" class="flag"/>
				<p>Made in Switzerland</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { TranslatedStringList } from '@/types/TranslatedStringList';
import { translate } from '@/translation/translate';
import { changes } from '@/translation/changes';
import { VNodeRenderer } from '@/components/VNodeRenderer';
import { isVNode } from '@/utils/isVNode.ts';

const subtitles: TranslatedStringList = [
	translate('address') as string,
	translate('contactUs') as string,
	translate('credits') as string,
]

const content: TranslatedStringList = [
	translate('footer.cloudAssess.addresses', changes),
	'Email : contact@resilio.tech',
	translate('footer.cloudAssess.credits', changes),
]
</script>

<style scoped lang="scss">
.footer {
	display: flex;
	padding: $large-padding $xlarge-padding $large-padding $xlarge-padding;
	background: $gray-light;
	border-top: $primary-orange-light solid 1px;
	font-size: 12px;

	a {
		text-decoration: underline;
		cursor:pointer;
	}

	.footer-content {
		display: flex;
		flex-wrap: wrap;
		gap: $medium-gap;
		justify-content: space-between;
		width: 100%;

		.subtitle {
			padding-top: $medium-padding;
			max-width: 20%;

			.subtitle-content {
				font-weight: normal;
			}
		}

		.footer-logo {
			display: flex;
			align-items: center;
			gap: $small-gap;
			padding-top: $medium-padding;
		}
	}
}

@media screen and (max-width: 768px) {
	.footer {
		padding: $large-padding;

		.footer-content {
			flex-direction: column;

			.subtitle {
				max-width: 100%;
			}
		}
	}
}
</style>