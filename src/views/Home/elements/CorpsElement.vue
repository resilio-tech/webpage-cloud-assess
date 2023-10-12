<template>
	<div class="corps container">
		<hr class="horizontal-line"/>
		<div class="corps-logo">
			<img src="@/assets/media/resilio-logo.svg" alt="logo" class="logo"/>
			<p>X</p>
			<img src="@/assets/media/kleis-logo.svg" alt="logo" class="logo"/>
		</div>
		<div class="content">
			<p>
				<b><span class="orange-text">CloudAssess</span></b> est issu d’une joint venture de <b>Resilio</b>, spécialiste de l’empreinte environnementale de l’IT, et de <b>Kleis Technology</b>, pionnier du LCA-as-Code.
			</p>
		</div>
		<div class="stats">
			<p>XXX collaborateurs</p>
			<p>+ XX% des effectifs en R&D</p>
			<a>Github Repository</a>
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
		width: 50%;
		height: 1px;
		border: none;
		background: $primary-orange-light;
	}

	.corps-logo {
		display: flex;
		justify-content: center;
		align-items: center;

		.logo {
			width: 25%;
			height: 100px;
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

	.stats {
		display: flex;
		width: 100%;
		justify-content: center;
		background: $primary-orange-light;
		padding: $xlarge-padding;
		gap: $medium-gap;

		p, a {
			text-align: center;
			color: white;
			font-weight: bold;
		}

		a {
			text-decoration: underline;
			cursor: pointer;
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

		.stats {
			flex-direction: column;
			padding: $medium-padding;
		}
	}
}
</style>