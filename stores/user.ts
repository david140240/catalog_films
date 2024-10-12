import axios from 'axios';
import { defineStore } from 'pinia';
import type { Item, Welcome } from '~/types';

export const useUserStore = defineStore('user', () => {
	let listMovies = reactive({ data: null as Welcome | null });
	let visible = ref(false);
	let currentCard = reactive({} as Item);

	const getFilms = async (page: number) => {
		try {
			const response = await axios.get<Welcome>(
				`https://kinopoiskapiunofficial.tech/api/v2.2/films?page=${page}`,
				{
					headers: {
						'X-API-KEY': '2f1f40cf-068e-4c7a-b8b7-839b52dba40b',
						'Content-Type': 'application/json',
					},
				}
			);
			window.scrollTo(0, 0);
			console.log(response);
			listMovies.data = response.data;
		} catch (error) {
			console.log(error);
		}
	};
	return {
		listMovies,
		getFilms,
		visible,
		currentCard,
	};
});
