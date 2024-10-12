<template>
	<div class="dialog-wrapper">
		<div class="overlay" @click="closeModal"></div>
		<div class="content" @click.stop>
			<header class="header">
				{{ info.nameRu ? info.nameRu : info.nameOriginal }}
			</header>
			<img class="poster" :src="info.posterUrlPreview" />
			<section class="details">
				<div class="detail">
					<p class="key">Оригинальное название</p>
					<p class="value">
						{{ info.nameOriginal ? info.nameOriginal : '*отсутствуте*' }}
					</p>
				</div>
				<div class="detail">
					<p class="key">Страна</p>
					<p v-for="country in info.countries">
						{{ country.country ? country.country : '*отсутствует*' }}
					</p>
				</div>
				<div class="detail">
					<p class="key">Жанры</p>
					<div v-for="genre in info.genres">
						{{ genre.genre ? genre.genre : '*отсутствует*' }}
					</div>
				</div>
				<div class="detail">
					<p class="key">Рейтинг на КиноПоиске</p>
					<p class="value">
						{{ info.ratingKinopoisk ? info.ratingKinopoisk : '*отсутствует*' }}
					</p>
				</div>
				<div class="detail">
					<p class="key">Рейтинг на IMDB</p>
					<p class="value">
						{{ info.ratingImdb ? info.ratingImdb : '*отсутствует*' }}
					</p>
				</div>

				<div class="detail">
					<p class="key">ID на IMDB</p>
					<p class="value">{{ info.imdbId ? info.imdbId : '*отсутствует*' }}</p>
				</div>
			</section>
		</div>
	</div>
</template>

<script setup lang="ts">
const userStore = useUserStore();

const info = computed(() => userStore.currentCard);
const closeModal = () => (userStore.visible = false);

document.addEventListener('keydown', event => {
	if (event.key === 'Escape' || event.key === 'Esc') {
		closeModal();
	}
});
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.dialog-wrapper {
	position: fixed;
	z-index: 40;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;

	.overlay {
		background: black;
		opacity: 60%;
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 20;
	}

	.content {
		display: grid;
		grid-template-columns: 2;
		color: white;
		position: absolute;
		z-index: 30;
		padding: 1.5rem 1.5rem 1.5rem 1.5rem;
		background-color: #1d1d1d;
		border-radius: 0.5rem;
		font-family: $main-font;
	}

	.header {
		font-size: 2rem;
		grid-column: span 2;
		margin-bottom: 0.5rem;
		color: yellow;
	}

	.poster {
		border-radius: 0.5rem;
		margin-right: 0.5rem;
	}

	.details {
		font-size: 1.5rem;
	}

	.array_details {
		display: flex;
	}

	.detail {
		display: flex;
		gap: 1rem;
		align-items: end;
		margin-bottom: 1rem;
	}

	.key {
		background-color: yellow;
		border-radius: 0.4rem;
		padding: 0.3rem 0.3rem;
		color: black;
	}
}
</style>
