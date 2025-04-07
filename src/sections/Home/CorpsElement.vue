<template>
	<div class="corps container">
		<hr class="horizontal-line"/>
		<div id="about-us" class="corps-logo">
			<a href="https://resilio-solutions.com">
				<img src="@/assets/media/resilio-logo.svg" alt="logo" class="logo"/>
			</a>
			<p>X</p>
			<a href="https://kleis.ch">
				<img src="@/assets/media/kleis-logo.svg" alt="logo" class="logo"/>
			</a>
		</div>
		<div class="content">
			<p><TranslateRenderer :translate-key="'cloudAssess.corps'"/></p>
		</div>
	</div>
</template>

<script setup lang="ts">
import TranslateRenderer from '@/components/translate/TranslateRenderer.vue';
</script>

<style scoped lang="scss">
.corps {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	.horizontal-line {
		width: 70%;
		height: 1px;
		border: none;
		background: $primary-orange-light;
	}

	.corps-logo {
		display: flex;
		padding: $xlarge-padding;
		width: 70%;
		justify-content: center;
		align-items: center;

		a {
			width: 100%;
			height: 100%;
			border: none;
			background: none;

			img {
				width: 100%;
				height: 100%;
			}
		}

		p {
			font-size: 25px;
			padding: 0 20px;
		}
	}

	.content {
		width: 80%;
		padding: $medium-padding $medium-padding $xlarge-padding $medium-padding;

		p {
			width: 85%;
			align-self: center;
		}

		a {
			font-weight: bold;
		}
	}


	@media screen and (max-width: 768px) {
		.corps-logo {
			flex-direction: column;
			width: 100%;
			padding: $medium-padding;

			.logo {
				width: 140px;
				height: 100px;
			}

			a {
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.content {
			width: 100%;

			p {
				width: 100%;
			}
		}
	}
}
</style>