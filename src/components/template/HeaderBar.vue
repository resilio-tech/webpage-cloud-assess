<template>
	<MobileMenu v-if="isMobile && isMenuOpen" :titles="titles" :toggleMenu="toggleMenu"/>
	<section class="header">
		<img src="../../assets/media/logo-ca.svg" alt="logo" class="logo"/>
		<div class="wrapper">
			<button @click="toggleMenu" aria-label="menu" class="button-menu" v-if="isMobile">
				<font-awesome-icon icon="fa-x" class="menu" v-if="isMenuOpen"/>
				<font-awesome-icon icon="fa-bars" class="menu" v-else/>
			</button>
			<ul class="header-titles" v-else>
				<li class="header-title" v-for="item in titles" :key="item.title">
					<a :href="'#' + item.key" class="nav-link">{{ item.title }}</a>
				</li>
			</ul>
			<SwitchLanguageButton v-if="!isMobile"/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import MobileMenu from '@/components/MobileMenu.vue';
import { translate } from '@/translation/translate';
import SwitchLanguageButton from '@/components/SwitchLanguageButton.vue';

const titles: { key: string; title: string; }[] = [
	{ key: 'solution', title: translate('header.title.solution') as string },
	{ key: 'crsd', title: translate('header.title.csrd') as string },
	{ key: 'about-us', title: translate('header.title.whoAreWe') as string },
	{ key: 'customer-case', title: translate('header.title.caseStudies') as string },
	{ key: 'certification', title: translate('header.title.certification') as string }
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
	height: 100px;
	padding: 20px;
	border-bottom: $primary-orange-light solid 1px;

	a {
		font-family: $font-family-lexend;
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
			font-weight: 500;
		}
	}

	.wrapper {
		display: flex;
		align-items: center;
		gap: $large-gap;
	}

	@media screen and (max-width: 768px) {
		img {
			height: 60%;
		}
	}
}
</style>