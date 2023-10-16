<template>
	<div class="stats container">
		<p>26 collaborateurs</p>
		<p>+25% des effectifs en R&D</p>
		<a href="https://github.com/kleis-technology/cloud-assess">Github Repository</a>
	</div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">

.stats {
	display: flex;
	width: 100%;
	justify-content: center;
	background: $primary-orange-light;
	padding: $xlarge-padding;
	gap: 100px;

	p, a {
		font-size: 18px;
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
	.stats {
		flex-direction: column;
		justify-content: space-around;
		gap: $large-gap;
		padding: $medium-padding;
	}
}
</style>