<template>
	<section class="container">
		<div class="switch">
			<input id="language-toggle" class="check-toggle check-toggle-round-flat" type="checkbox" v-model="isEnglish">
			<label for="language-toggle"></label>
			<span class="on">FR</span>
			<span class="off">EN</span>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';

const currentLanguage = ref('');
const isEnglish = ref(false);

const setLanguage = (lang: string) => {
	if (currentLanguage.value !== lang) {
		currentLanguage.value = lang;
		localStorage.setItem('language', lang);
		isEnglish.value = lang === 'en';

		// Only reload if the language actually changes
		window.location.reload();
	}
};

onMounted(() => {
	const storedLanguage = localStorage.getItem('language');
	if (storedLanguage) {
		currentLanguage.value = storedLanguage;
		isEnglish.value = storedLanguage === 'en';
	} else {
		const browserLanguage = navigator.language.split('-')[0];
		setLanguage(browserLanguage === 'en' ? 'en' : 'fr');
	}
});

watch(isEnglish, (newValue) => {
	setLanguage(newValue ? 'en' : 'fr');
});
</script>

<style scoped lang="scss">
.container {
	display: flex;
	width: auto;
	justify-content: center;
	align-items: center;
	padding: 0;
}
.switch {
	position: relative;
	display: inline-block;
	margin: 0 5px;
}

.switch > span {
	position: absolute;
	top: 14px;
	pointer-events: none;
	font-family: 'Helvetica', Arial, sans-serif;
	font-weight: bold;
	font-size: 12px;
	text-transform: uppercase;
	text-shadow: 0 1px 0 rgba(0, 0, 0, .06);
	width: 50%;
	text-align: center;
}

input.check-toggle-round-flat:checked ~ .off {
	color: #F36F25;
}

input.check-toggle-round-flat:checked ~ .on {
	color: #fff;
}

.switch > span.on {
	left: 0;
	padding-left: 2px;
	color: #F36F25;
}

.switch > span.off {
	right: 0;
	padding-right: 4px;
	color: #fff;
}

.check-toggle {
	position: absolute;
	margin-left: -9999px;
	visibility: hidden;
}
.check-toggle + label {
	display: block;
	position: relative;
	cursor: pointer;
	outline: none;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

input.check-toggle-round-flat + label {
	padding: 2px;
	width: 97px;
	height: 35px;
	background-color: #F36F25;
	-webkit-border-radius: 60px;
	-moz-border-radius: 60px;
	border-radius: 60px;
}
input.check-toggle-round-flat + label:before, input.check-toggle-round-flat + label:after {
	display: block;
	position: absolute;
	content: "";
}

input.check-toggle-round-flat + label:before {
	top: 2px;
	left: 2px;
	bottom: 2px;
	right: 2px;
	background-color: #F36F25;
	-webkit-border-radius: 60px;
	-moz-border-radius: 60px;
	border-radius: 60px;
}
input.check-toggle-round-flat + label:after {
	top: 4px;
	left: 4px;
	bottom: 4px;
	width: 48px;
	background-color: #fff;
	-webkit-border-radius: 52px;
	-moz-border-radius: 52px;
	border-radius: 52px;
	-webkit-transition: margin 0.2s;
	-moz-transition: margin 0.2s;
	-o-transition: margin 0.2s;
	transition: margin 0.2s;
}

input.check-toggle-round-flat:checked + label {
}

input.check-toggle-round-flat:checked + label:after {
	margin-left: 44px;
}
</style>