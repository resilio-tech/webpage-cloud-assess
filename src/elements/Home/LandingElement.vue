<template>
	<div class="background-container container">
		<div class="content">
			<p class="subtitle">{{ subtitle }}</p>
			<h1 class="title" id="solution">{{ title }}</h1>
			<p><VNodeRenderer :node="description" /></p>
			<div class="actions">
				<button @click="redirectRepository" aria-label="Code source">{{ sourceCode }}</button>
				<button @click="redirectResilio" aria-label="Réserver votre démo">{{ bookDemo }}</button>
			</div>
		</div>
		<div class="image">
			<img class="icons-background" src="@/assets/media/landing-icons-background.svg" alt="icons-background"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { translate } from '../../translation/translate';
import { changes } from '../../translation/changes';
import { VNodeRenderer } from '../../components/VNodeRenderer';

const redirectResilio = () => {
	window.location.href = 'https://resilio-solutions.com/fr/contact/';
}
const redirectRepository = () => {
	window.location.href = 'https://github.com/kleis-technology/cloud-assess';
}

const subtitle = translate('landing.title.iaas');
const title = translate('landing.title.greenwashing');
const description = translate('landing.description', changes);
const sourceCode = translate('button.sourceCode');
const bookDemo = translate('button.bookDemo');
</script>

<style scoped lang="scss">
.background-container {
	background-image: url('@/assets/media/cloud-background.svg');
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;

	display: flex;
	height: 100%;

	h1 {
		color: $primary-orange-light;
	}

	.image .icons-background {
			width: 100%;
	}

	.subtitle {
		font-weight: bold;
		font-size: 30px;
	}

	.actions {
		display: flex;
		justify-content: center;
		gap: $large-gap;
	}
}

@media screen and (max-width: 768px) {
	.background-container {
		background-position-y: 180px;
		background-position-x: -560px;
		flex-direction: column;

		.content {
			font-size: 15px;
		}

		.subtitle {
			font-size: 20px;
		}
	}
}
</style>