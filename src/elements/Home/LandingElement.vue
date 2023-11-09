<template>
	<div class="background-container container">
		<div class="content">
			<p class="subtitle">IaaS, PaaS, SaaS</p>
			<h1 class="title" id="solution">Vous méritez mieux que du greenwashing !</h1>
			<p><b>Cloud<span class="orange-text">Assess</span></b>, un <b style="color: #F77B0B">outil open source</b> pour évaluer automatiquement <b>votre empreinte environnementale</b> en tant que fournisseur de services cloud.</p>
			<div class="actions">
				<button @click="redirectRepository" aria-label="Code source">Code source</button>
				<button @click="redirectResilio" aria-label="Réserver une démo">Réserver votre démo !</button>
			</div>
		</div>
		<div class="image">
			<img class="icons-background" src="@/assets/media/landing-icons-background.svg" alt="icons-background"/>
		</div>
	</div>
</template>

<script setup lang="ts">
const redirectResilio = () => {
	window.location.href = 'https://resilio-solutions.com/fr/contact/';
}
const redirectRepository = () => {
	window.location.href = 'https://github.com/kleis-technology/cloud-assess';
}
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