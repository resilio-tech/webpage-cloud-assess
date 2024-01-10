<template>
	<section class="footer">
		<div class="footer-content">
			<p class="subtitle" v-for="(subtitle, index) in subtitles" :key="index">
				<b>{{ subtitle }} :</b>
				<br/>
				<TranslateRenderer :translateKey="content[index]"/>
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
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';

const subtitles: TranslatedStringList = [
	translate('address') as string,
	translate('contactUs') as string,
	translate('credits') as string,
]

const content: string[] = [
	'footer.cloudAssess.addresses',
	'footer.email',
	'footer.cloudAssess.credits',
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