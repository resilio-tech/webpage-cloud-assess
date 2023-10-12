<template>
	<div class="customer-case container">
		<div class="content">
			<h1>Cas client</h1>
			<div class="customer">
				<img src="@/assets/media/exoscale-logo.svg" alt="customer" class="customer-img"/>
				<p>Fournisseur Cloud basé en Suisse, 70 personnes- 7 zones</p>
				<div class="customer-infos">
					<CardList :list="cardData"/>
					<p>
						Janvier 2024: <br/><br/>
						Les clients et clientes verront leur empreinte sur leur facture !
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';

const cardData = [
	'Une instance <span class="orange-text"><b>CloudAssess</b></span> est déployée sur l’infra.',
	'Les rapports d’empreinte sont retournés dans le data lake.'
]
</script>

<style scoped lang="scss">
.content {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.customer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: $large-gap;

		p {
			text-align: center;
			font-weight: bold;
		}

		.customer-infos {
			display: flex;
			flex-wrap: wrap;
		}
	}
}
</style>