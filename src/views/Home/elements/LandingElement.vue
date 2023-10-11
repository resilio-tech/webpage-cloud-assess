<template>
	<div class="background-container container">
		<div class="content">
			<p style="font-weight: bold">IaaS, PaaS, SaaS</p>
			<h1 class="title">Vous méritez mieux que du greenwashing !</h1>
			<p><span style="color: #F77B0B"><b>CloudAssess</b>, un <b>outil open source</b></span> pour évaluer automatiquement <b>votre empreinte environnementale</b> en temps que fournisseur de services cloud.</p>
			<button @click="redirectDemo" aria-label="Réserver une démo">Réserver votre démo !</button>
		</div>
		<div class="image">
			<img class="icons-background" src="@/assets/media/landing-icons-background.svg" alt="icons-background"/>
		</div>
	</div>
</template>

<script setup lang="ts">
const redirectDemo = () => window.location.href = 'https://calendly.com/resilio-tech/demo-cloudassess';
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
}

@media screen and (max-width: 768px) {
	// Styles for mobile screens
	.background-container {
		background-position-y: 180px;
		background-position-x: -560px;
		flex-direction: column;
	}
}
</style>