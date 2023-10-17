<template>
	<div class="corps container">
		<hr class="horizontal-line"/>
		<div id="about-us" class="corps-logo">
			<img src="@/assets/media/resilio-logo.svg" alt="logo" class="logo"/>
			<p>X</p>
			<img src="@/assets/media/kleis-logo.svg" alt="logo" class="logo"/>
		</div>
		<div class="content">
			<p>
				<b>Cloud<span class="orange-text">Assess</span></b> est issu d’une joint venture de <b>Resilio</b>, spécialiste de l’empreinte environnementale de l’IT, et de <b>Kleis Technology</b>, pionnier du LCA-as-Code.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">

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
		justify-content: center;
		align-items: center;
		margin-top: $medium-padding;

		.logo {
			width: 25%;
			height: 130px;
		}

		p {
			font-size: 25px;
			padding: 0 20px;
		}
	}

	.content {
		width: 80%;

		p {
			width: 70%;
			align-self: center;
		}
	}


	@media screen and (max-width: 768px) {
		.corps-logo {
			flex-direction: column;

			.logo {
				width: 140px;
				height: 100px;
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