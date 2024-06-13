export interface Movie {
	rank: number;
	title: string;
	description: string;
	image: string;
	big_image: string;
	genre: Array<string>;
	thumbnail: string;
	rating: string;
	id: string;
	year: number;
	imdbid: string;
	imdb_link: string;
}

export interface Welcome {
	total: number;
	totalPages: number;
	items: Item[];
}

export interface Item {
	kinopoiskId: number;
	imdbId: string;
	nameRu: string;
	nameEn: string;
	nameOriginal: string;
	countries: Country[];
	genres: Genre[];
	ratingKinopoisk: number;
	ratingImdb: number;
	year: number;
	type: string;
	posterUrl: string;
	posterUrlPreview: string;
}

export interface Country {
	country: string;
}

export interface Genre {
	genre: string;
}

export interface Config {
	PerPage?: Ref<number>;
	movies: ComputedRef<Item>;
	page: Ref<number>;
}
