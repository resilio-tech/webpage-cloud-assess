<template>
	<div class="csrd container">
		<div class="content">
			<h1 id="crsd">Corporate Sustainability Reporting Directive (CSRD)
				<br/>
				Prenez de l’avance !
			</h1>
			<p>
				A partir de <b>2025</b>, les <b>grandes entreprises européennes</b> devront évaluer l'<b>empreinte des services cloud</b> qu'ils utilisent.
				Pour permettre à leurs clients et clientes de respecter cette norme, les fournisseurs de services cloud vont devoir afficher les impacts environnementaux associés aux services proposés.
			</p>
			<p>
				<b>CloudAssess</b> a pour but d’afficher les impacts environnementaux des services cloud sur la base d'<b>une méthodologie commune, cohérente et transparente</b>.
			</p>
			<button @click="redirectResilio" class="contact-us" aria-label="Contactez nous">Contactez nous</button>

		</div>
	</div>
</template>

<script setup lang="ts">
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
			width: 70%;
			align-self: center;
		}
	}

	@media screen and (max-width: 768px) {
		.content {
			width: 100%;

			p {
				width: 100%;
			}
		}
	}
}
</style>