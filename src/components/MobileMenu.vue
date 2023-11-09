<template>
	<section class="mobile-menu">
		<ul class="titles">
			<li class="title" v-for="item in props.titles" :key="item.key">
				<a @click="toggleMenu" :href="'#' + item.key" class="nav-link">{{ item.title }}</a>
			</li>
		</ul>
	</section>
</template>

<script setup lang="ts">
const props = defineProps<{
	titles: { key: string; title: string; }[];
	toggleMenu: () => void;
}>()
</script>

<style scoped lang="scss">
.mobile-menu {
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: $gray-light;
	width: 50vw;
	height: auto;
	padding: 120px 20px 20px 20px;

	position: fixed;
	top: 0;
	right: 0;
	z-index: 10;

	ul {
		display: flex;
		flex-direction: column;
		width: 100%;

		li {
			padding: $medium-padding;
			text-align: center;

			&:not(:last-child) {
				border-bottom: 1px solid $primary-orange-light;
			}

			a {
				text-decoration: none;
			}
		}

	}
}
</style>