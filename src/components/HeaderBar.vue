<template>
	<section class="header-bar">
		<img src="@/assets/media/logo-ca.svg" alt="logo" class="logo"/>
		<font-awesome-icon icon="fa-bars" class="menu" v-if="isMobile"/>
		<ul class="header-titles" v-else>
			<li class="header-title" v-for="title in titles" :key="title">
				<a href="#" class="nav-link">{{ title }}</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
const isMobile = window.innerWidth < window.innerHeight;
const titles: string[] = ['Notre Solution', 'Conformité CRSD', 'Qui sommes-nous ?', 'Cas client', 'Certification'];
</script>

<style scoped lang="scss">
.header-bar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 130px;
	padding: 10px;
	background: $gray-light;

	img {
		height: 40%;
		object-fit: contain;
	}

	.menu {
		color: $primary-orange-light;
		width: 30px;
		height: 30px;
	}

	.header-titles {
		display: flex;
		gap: $large-gap;
	}
}
</style>