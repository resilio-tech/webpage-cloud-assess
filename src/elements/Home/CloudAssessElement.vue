<template>
	<div class="cloud-assess container">
		<div class="content">
			<h1><span class="black-text">Cloud</span>Assess, c'est quoi ?</h1>
			<div class="card-container">
				<CardList :title="'L’empreinte de vos services ...'" :list="firstList"/>
				<CardList :title="'... facilement ...'" :list="secondList"/>
				<CardList :title="'... ouverte et conforme.'" :list="thirdList"/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';

const firstList: string[] = [
	'À l’heure, au jour, au mois, ...',
	'Aligné aux <b>besoins de conformité</b> de vos clients et clientes',
	'À intégrer dans vos <b>factures</b>, rapports, dashboards <b>GreenOps</b>, ...'
]

const secondList: string[] = [
	'Votre <b>instance <span class="orange-text">Cloud</span>Assess</b> en Image Docker, self-hosted ou managée',
	'<b>Certification</b> optionnelle',
	'<b>Support premium',
	'<b>Notice méthodologique</b> à partager'
]

const thirdList: string[] = [
	'Conforme aux normes de l’<b>Analyse de Cycle de Vie (ISO 14040/14044, PEF, RCP Cloud)</b>',
	'Méthodologie <b>ouverte et transparente</b>',
	'Outil <b>automatisé</b>',
	'Bibliothèques de <b>modèles conformes</b>'
]
</script>

<style scoped lang="scss">
.cloud-assess {
	background: $primary-orange-light;
	justify-content: center;

	.content h1 {
		color: white;
		text-align: center;
		font-weight: 600;
	}

	.card-container {
		display: flex;
		justify-content: space-around;
	}
}
@media screen and (max-width: 768px) {
	.cloud-assess {
		.content h1 {
			font-size: 28px;
		}

		.card-container {
			flex-direction: column;
			padding: 0 $xlarge-padding;
			gap: $xlarge-gap;
		}
	}
}

</style>