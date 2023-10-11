<template>
	<div class="cloud-assess container">
		<div class="content">
			<h1>CloudAssess, c'est quoi ?</h1>
			<CardList :list="firstList"/>
			<CardList :list="secondList"/>
			<CardList :list="thirdList" :backgroundColor="'#F77B0B'" :color="'white'"/>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';

const firstList: string[] = [
	'L’<b>empreinte</b> de votre service à l’heure, au jour, au mois,...',
	'Aligné aux <b>besoins de conformité</b> de vos clients et clientes',
	'À intégrer dans vos <b>factures</b>, rapports, dashboards <b>GreenOps</b>,...'
]

const secondList: string[] = [
	'Votre <b>instance <span style="color: #F77B0B">CloudAssess</span></b> en Image Docker, self-hosted ou managée',
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

	.content h1 {
		color: white;
		text-align: center;
		font-weight: normal;
	}
}
</style>