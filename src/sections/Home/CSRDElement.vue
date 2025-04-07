<template>
	<div class="csrd container">
		<div class="content">
			<h1 id="crsd">Corporate Sustainability Reporting Directive (CSRD)
				<br/>
				{{ translate('getAhead') }}
			</h1>
			<p><TranslateRenderer :translate-key="'csrd.resume'"/></p>
			<p><TranslateRenderer :translate-key="'csrd.cloudAssess'"/></p>

			<button @click="redirectResilio" class="contact-us" aria-label="Contactez nous">{{ translate('button.contactUs') }}</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import { translate } from '@/translation/translate';
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';

const redirectResilio = () => {
	window.location.href = 'https://resilio-solutions.com/fr/contact/';
}
</script>

<style scoped lang="scss">
.csrd {
	display: flex;
	justify-content: center;

	h1 {
		text-align: center;
	}

	.content {
		width: 80%;

		p {
			width: 80%;
			align-self: center;
		}

		.contact-us {
			width: 30%;
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			width: 100%;

			p {
				width: 100%;
			}

			.contact-us {
				width: 40%;
			}
		}
	}
}

@media screen and (min-width: 768px) {
	.csrd {
		background-image: url('@/assets/media/csrd-background.svg');
		background-size: 110% auto;
		background-position: center;
		background-repeat: no-repeat;
	}
}
</style>