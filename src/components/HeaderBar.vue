<template>
	<MobileMenu v-if="isMobile && isMenuOpen" :titles="titles" :toggleMenu="toggleMenu"/>
	<section class="header">
		<img src="@/assets/media/logo-ca.svg" alt="logo" class="logo"/>
		<button @click="toggleMenu" aria-label="menu" class="button-menu" v-if="isMobile">
			<font-awesome-icon icon="fa-x" class="menu" v-if="isMenuOpen"/>
			<font-awesome-icon icon="fa-bars" class="menu" v-else/>
		</button>
		<ul class="header-titles" v-else>
			<li class="header-title" v-for="item in titles" :key="item.title">
				<a :href="'#' + item.key" class="nav-link">{{ item.title }}</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MobileMenu from '@/components/MobileMenu.vue';

const titles: { key: string; title: string; }[] = [
	{ key: 'solution', title: 'Notre Solution' },
	{ key: 'crsd', title: 'Conformité CRSD' },
	{ key: 'about-us', title: 'Qui sommes-nous ?' },
	{ key: 'customer-case', title: 'Cas client' },
	{ key: 'certification', title: 'Certification' }
];
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

	a {
		font-family: 'Lexend', sans-serif;
		text-decoration: none;
	}

	img {
		height: 100%;
		object-fit: contain;
	}

	.button-menu {
		border: none;
		background: none;
		cursor: pointer;
		z-index: 100;

		.menu {
			color: $primary-orange-light;
			width: 30px;
			height: 30px;
		}
	}

	.header-titles {
		display: flex;
		gap: $large-gap;

		a {
			font-size: 20px;
		}
	}

	@media screen and (max-width: 768px) {
		img {
			height: 60%;
		}
	}
}
</style>