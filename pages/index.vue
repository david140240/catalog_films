<template>
	<div class="app">
		<h1 class="header">Каталог фильмов</h1>
		<div class="group">
			<input placeholder="Поищем..." v-model="field" class="input" />
		</div>
		<CatalogList v-if="movies" :field="field" :actualList="movies" />

		<div class="btn-group">
			<button class="btn" @click="getMovies(p)" v-for="p in 5">{{ p }}</button>
		</div>

		<CatalogModal v-if="userStore.visible" />
	</div>
</template>

<script lang="ts" setup>
const userStore = useUserStore();
const field = ref('');
let page = ref(1);

const getMovies = async (page: number) => {
	await userStore.getFilms(page);
};
getMovies(page.value);

const movies = computed(() =>
	userStore.listMovies.data
		? searchedField(userStore.listMovies.data.items, field.value)
		: []
);
</script>

<style scoped lang="scss">
@import '@/assets/variables.scss';
.app {
	color: $font-color;
	font-family: $main-font;
	display: grid;
	width: 100%;
	padding: 0 0 10rem 0;
	margin: 0;
	background: rgb(98, 98, 98);
	background: $main-bg;

	.input {
		outline: none;
		width: 20rem;
		height: 2rem;
		font-size: 1rem;
		border-radius: 0.5rem;
		line-height: 0;
		border: 0;
		padding: 0 0.5rem;
	}

	.header {
		color: $header-font-color;
		text-align: center;
		margin-top: 2rem;
		margin-bottom: 4rem;
	}

	.btn-group {
		margin-top: 10rem;
		display: flex;
		justify-content: center;
		gap: 0.3rem;
	}

	.btn {
		padding: 1rem 2rem;
		border-radius: 0.5rem;
		cursor: pointer;
		color: $font-color;
		background-color: rgb(68, 68, 68);
	}

	.btn:hover {
		background-color: rgb(42, 42, 42);
	}

	.group {
		display: flex;
		justify-content: space-between;
		padding: 0 7rem 0 7rem;
	}
}
</style>
