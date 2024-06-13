<template>
	<div class="card">
		<img
			:src="info.posterUrlPreview"
			alt=""
			width="200rem"
			height="300rem"
			class="img"
		/>
		<span class="name-ru">
			{{ info.nameRu ? info.nameRu : info.nameOriginal }}, {{ info.year }}
		</span>
		<span class="genre">{{ info.genre }}</span>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps(['info']);
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.card {
	border-radius: 1rem;
	font-size: 1rem;
	padding: 0.3rem;
	color: white;
	font-family: $main-font;
	display: flex;
	flex-direction: column;
	align-items: center;
	cursor: pointer;

	.card:hover {
		opacity: 70%;
		transition: 0.5s;
	}

	.img {
		border-radius: 0.5rem;
	}
}
</style>
