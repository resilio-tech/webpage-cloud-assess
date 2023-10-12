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
import LandingElement from '@/views/Home/elements/LandingElement.vue';
import CloudAssessElement from '@/views/Home/elements/CloudAssessElement.vue';
import CSRDElement from '@/views/Home/elements/CSRDElement.vue';
import CorpsElement from '@/views/Home/elements/CorpsElement.vue';
import CustomerCaseElement from '@/views/Home/elements/CustomerCaseElement.vue';
import CertificationElement from '@/views/Home/elements/CertificationElement.vue';
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
