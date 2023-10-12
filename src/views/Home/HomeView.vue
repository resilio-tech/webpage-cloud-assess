<template>
	<section class="home-view">
		<LandingElement/>
		<CloudAssessElement/>
		<CSRDElement/>
		<CorpsElement/>
		<CustomerCaseElement/>
		<CertificationElement/>
	</section>
</template>

<script setup lang="ts">
import LandingElement from '@/elements/Home/LandingElement.vue';
import CloudAssessElement from '@/elements/Home/CloudAssessElement.vue';
import CSRDElement from '@/elements/Home/CSRDElement.vue';
import CorpsElement from '@/elements/Home/CorpsElement.vue';
import CustomerCaseElement from '@/elements/Home/CustomerCaseElement.vue';
import CertificationElement from '@/elements/Home/CertificationElement.vue';
</script>

<style scoped lang="scss">
.home-view {
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	height: 100%;
}
</style>
