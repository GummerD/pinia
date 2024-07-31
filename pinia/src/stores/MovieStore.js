import { defineStore } from "pinia";

export const useMovieStore = defineStore(
    'movieStore',
    {
        state: () => ({
            movies: [
                {
                    id: 1,
                    id: 'Movie_1',
                    original_title: 'Some description origina ltitle 1',
                    overview: 'Some description 1',
                    poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
                    release_date: '2000-01-01',
                    isWatched: false,
                },
                {
                    id: 2,
                    id: 'Movie_2',
                    original_title: 'Some description origina ltitle 2',
                    overview: 'Some description 2',
                    poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                    release_date: '2000-01-01',
                    isWatched: true,
                },
            ]
        })
});