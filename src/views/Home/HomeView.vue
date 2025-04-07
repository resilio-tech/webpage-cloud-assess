<template>
	<section class="home-view">
		<LandingElement/>
		<CloudAssessElement/>
		<CSRDElement/>
		<CorpsElement/>
		<StatsElement/>
		<CustomerCaseElement/>
		<CertificationElement/>
	</section>
</template>

<script setup lang="ts">
import LandingElement from '@/sections/Home/LandingElement.vue';
import CloudAssessElement from '@/sections/Home/CloudAssessElement.vue';
import CSRDElement from '@/sections/Home/CSRDElement.vue';
import CorpsElement from '@/sections/Home/CorpsElement.vue';
import CustomerCaseElement from '@/sections/Home/CustomerCaseElement.vue';
import CertificationElement from '@/sections/Home/CertificationElement.vue';
import StatsElement from '@/sections/Home/StatsElement.vue';
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
