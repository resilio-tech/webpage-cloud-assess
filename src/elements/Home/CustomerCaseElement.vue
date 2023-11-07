<template>
	<div class="customer-case container">
		<div class="content">
			<h1 id="customer-case">Cas client</h1>
			<div class="customer">
				<img src="@/assets/media/exoscale-logo.svg" alt="customer" class="customer-img"/>
				<p>Fournisseur Cloud basé en Suisse, 70 personnes - 7 zones</p>
				<div class="customer-infos">
					<CardList :list="cardData" :width="!isMobile ? '50%' : ''" :padding="!isMobile ? '' : '15px'"/>
					<p>
						Janvier 2024 : <br/><br/>
						Les clients et clientes verront leur empreinte sur leur facture !
					</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import CardList from '@/components/CardList.vue';

const isMobile = window.innerWidth < 768;
const cardData = [
	'Une instance <b>Cloud<span class="orange-text">Assess</span></b> est déployée sur l’infrastrucure Exoscale.',
	'Le flux de données d’usage pour la facturation est copié vers <b>Cloud<span class="orange-text">Assess</span></b>.',
	'Les rapports d’empreinte sont retournés dans le data lake.'
]
</script>

<style scoped lang="scss">
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h1 {
		font-size: 40px;
	}

	.customer {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: $medium-gap;

		img {
			height: 100px;
		}
		p {
			text-align: center;
			font-weight: bold;
			padding: $large-padding $xlarge-padding;
		}

		.customer-infos {
			display: flex;
			justify-content: space-between;

			p {
				width: 50%;
			}
		}
	}

	@media screen and (max-width: 768px) {
		.customer {
			width: 100%;

			.customer-infos {
				flex-direction: column;

				p {
					width: 100%;
				}
			}

			p {
				padding: 0;
			}
		}
	}
}
</style>