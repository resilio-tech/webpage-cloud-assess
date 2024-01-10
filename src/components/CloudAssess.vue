<template>
	<b v-if="blackOrange">Cloud<span class="orange-text">Assess</span></b>
	<b v-else-if="blackWhite"><span class="black-text">Cloud</span>Assess</b>
</template>

<script setup lang="ts">
const props = defineProps<{
	format: "blackWhite" | "blackOrange";
}>()

const blackWhite = props.format === "blackWhite";
const blackOrange = props.format === "blackOrange";
</script>