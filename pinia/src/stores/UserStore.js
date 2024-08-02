import { defineStore } from "pinia";

export const useUserStore = defineStore('movieStore', {
    state: () => ({
        users: [
            {
                id: 1,
                email: 'email_1',
                first_name: 'First_name 1',
                last_name: 'Last_name 1',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
            {
                id: 2,
                email: 'email_2',
                first_name: 'First_name 2',
                last_name: 'Last_name 2',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: true,
            },
            {
                id: 3,
                email: 'email_3',
                first_name: 'First_name 3',
                last_name: 'Last_name 3',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: true,
            },
            {
                id: 4,
                email: 'email_4',
                first_name: 'First_name 4',
                last_name: 'Last_name 4',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
            {
                id: 5,
                email: 'email_5',
                first_name: 'First_name 5',
                last_name: 'Last_name 5',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: false,
            },
        ],
        activeTab: 1,
    }),
    getters: {
        watchedMovies(){
            return this.users.filter(el => el.isWatched)
        },
        counterMovies(){ 
           return this.users.length
        }
    },
    actions: {
        activeTabs(number){
            this.activeTab = number;
        },
        beFriends(id){
            let idx = this.users.findIndex(el => el.id === id);
            this.users[idx].isWatched = !this.users[idx].isWatched;
        },
        deleteFriend(id){
            this.users = this.users.filter(el => el.id != id)
        }
    }
});