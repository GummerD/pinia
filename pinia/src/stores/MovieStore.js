import { defineStore } from "pinia";

export const useMovieStore = defineStore('movieStore', {
    state: () => ({
        movies: [
            {
                id: 1,
                title: 'Movie_1',
                original_title: 'Some description origina ltitle 1',
                overview: 'Some description 1',
                poster_path: '/gh4cZbhZxyTbgxQPxD0dOudNPTn.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
            {
                id: 2,
                title: 'Movie_2',
                original_title: 'Some description origina ltitle 2',
                overview: 'Some description 2',
                poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                release_date: '2000-01-01',
                isWatched: true,
            },
            {
                id: 3,
                title: 'Movie_3',
                original_title: 'Some description origina ltitle 3',
                overview: 'Some description 3',
                poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                release_date: '2000-01-01',
                isWatched: true,
            },
            {
                id: 4,
                title: 'Movie_4',
                original_title: 'Some description origina ltitle 4',
                overview: 'Some description 4',
                poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
            {
                id: 5,
                title: 'Movie_5',
                original_title: 'Some description origina ltitle 5',
                overview: 'Some description 5',
                poster_path: '/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
        ],
        activeTab: 1,
    }),
    getters: {
        watchedMovies(){
            return this.movies.filter(el => el.isWatched)
        },
        counterMovies(){ 
           return this.movies.length
        }
    },
    actions: {
        activeTabs(number){
            this.activeTab = number;
        },
        changeIsWatchad(id){
            let idx = this.movies.findIndex(el => el.id === id);
            this.movies[idx].isWatched = !this.movies[idx].isWatched;
        },
        deleteMovie(id){
            this.movies = this.movies.filter(el => el.id != id)
        }
    }
});