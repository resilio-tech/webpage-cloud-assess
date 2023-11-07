<template>
	<div class="certification container">
		<div class="content">
			<div class="icon-container">
				<img src="@/assets/media/customer-case-icon.svg" alt="customer-icon" class="customer-icon"/>
			</div>
			<h2 id="certification" class="orange-text">Faites-vous certifier !</h2>
			<p>
				Besoin d’appuyer la <b>fiabilité</b> de votre affichage environnemental ?
				<br/>Faites appel à <b>Cloud<span class="orange-text">Assess</span></b> directement, via ses partenaires <a href="https://kleis.ch">Kleis</a> et <a href="https://resilio-solutions.com">Resilio</a>.
			</p>
		</div>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.certification {
	display: flex;
	justify-content: center;
	align-items: center;

	.content {
		padding: 0 0 $xlarge-padding 0;

		.icon-container {
			display: flex;
			justify-content: center;
		}

		h2 {
			text-align: center;
		}
	}

}

</style>