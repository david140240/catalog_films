<template>
	<div class="list-movies">
		<CatalogCard
			@click="showModal(movie)"
			v-for="(movie, index) in actualList"
			:info="movie"
			:id="index"
		/>
	</div>
</template>

<script lang="ts" setup>
const props = defineProps(['actualList']);
const userStore = useUserStore();
const visible = computed(() => userStore.visible);

const showModal = (movie: object) => {
	userStore.visible = true;
	userStore.currentCard = movie;
};
</script>

<style lang="scss" scoped>
.list-movies {
	margin-top: 5rem;
	width: 100%;
	height: 100%;
	display: grid;
	align-items: center;
	justify-items: center;
	justify-content: center;
	grid-template-columns: 20rem 20rem 20rem 20rem;
	grid-template-rows: auto;
	grid-gap: 1.5rem;
}
</style>
