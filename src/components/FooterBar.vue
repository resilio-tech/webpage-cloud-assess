<template>
	<section class="footer">
		<div class="footer-content">
			<p class="subtitle" v-for="(subtitle, index) in subtitles" :key="subtitle">
				{{ subtitle }} :
				<br/>
				<span class="subtitle-content" v-html="content[index]"/>
			</p>
			<div class="footer-logo">
				<img src="@/assets/media/flag-switzerland.svg" alt="flag" class="flag"/>
				<p>Made in Switzerland</p>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const subtitles: string[] = [
	'Adresse',
	'Contactez-nous',
	'Crédits'
]

const content: string[] = [
	'Resilio - EPFL Innovation Park, Bâtiment C, 1015 Lausanne, Suisse <br/> Kleis Technology Sarl, Rue Mauborget 1, 1003 Lausanne, Suisse',
	'Email : contact@resilio.tech',
	'UX Design: Marie Husson <br/> Developpement: <a style="text-decoration: underline; cursor:pointer;" href="https://github.com/Bima42">Tanguy Pauvret</a> <br/> Icones: Font Awesome, Freepik'
]
</script>

<style scoped lang="scss">
.footer {
	display: flex;
	padding: $large-padding $xlarge-padding $large-padding $xlarge-padding;
	background: $gray-light;
	border-top: $primary-orange-light solid 1px;
	font-size: 12px;

	.footer-content {
		display: flex;
		flex-wrap: wrap;
		gap: $medium-gap;
		justify-content: space-between;
		width: 100%;

		.subtitle {
			font-weight: bold;
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