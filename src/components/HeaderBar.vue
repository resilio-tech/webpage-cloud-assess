<template>
	<section class="header">
		<img src="@/assets/media/logo-ca.svg" alt="logo" class="logo"/>
		<button @click="toggleMenu" aria-label="menu" class="button-menu" v-if="isMobile">
			<font-awesome-icon icon="fa-x" class="menu" v-if="isMenuOpen"/>
			<font-awesome-icon icon="fa-bars" class="menu" v-else/>
		</button>
		<ul class="header-titles" v-else>
			<li class="header-title" v-for="title in titles" :key="title">
				<a href="#" class="nav-link">{{ title }}</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const titles: string[] = ['Notre Solution', 'Conformité CRSD', 'Qui sommes-nous ?', 'Cas client', 'Certification'];
const isMobile = window.innerWidth < window.innerHeight;
const isMenuOpen = ref(false);

const toggleMenu = () => {
	isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background: $gray-light;
	width: 100%;
	height: 130px;
	padding: 10px;
	border-bottom: $primary-orange-light solid 1px;

	img {
		height: 40%;
		object-fit: contain;
	}

	.button-menu {
		border: none;
		background: none;
		cursor: pointer;

		.menu {
			color: $primary-orange-light;
			width: 30px;
			height: 30px;
		}
	}

	.header-titles {
		display: flex;
		gap: $large-gap;
	}
}
</style>