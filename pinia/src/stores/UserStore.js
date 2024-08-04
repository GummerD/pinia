import { defineStore } from "pinia";

import { ref, computed, onUpdated } from "vue";

/*
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
                isWatched: false,
            },
            {
                id: 3,
                email: 'email_3',
                first_name: 'First_name 3',
                last_name: 'Last_name 3',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: false,
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

*/

// Composition API:
export const useUserStore = defineStore( 'userStore', ()=>{ 

    const users = ref([
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
                isWatched: false,
            },
            {
                id: 3,
                email: 'email_3',
                first_name: 'First_name 3',
                last_name: 'Last_name 3',
                avatar: '/src/img/uncknow.jpg',
                release_date: '2000-01-01',
                isWatched: false,
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
        ]);

    const activeTab = ref(1);

    

    // getters оборачиваются в computed свойство:

    const friendsList = computed(() => {// вероятно здесь уже что-то поvенялось, это свойство не работает
       users.value.filter((el) => el.isWatched)
    });

    const counterMovies = computed(()=>{ 
        users.value.length
    });

    const activeTabs = (number) =>{
        activeTab.value = number;
    };

    const beFriends = (id) => {
        console.log(id);
        let idx = users.value.findIndex(el => el.id === id);
        console.log(idx);
        console.log(users.value[idx]);
        users.value[idx].isWatched = !users.value[idx].isWatched;
    };

    const deleteFriend = (id)=>{
        users.value = users.value.filter(el => el.id != id)
    };


    return {
        users,
        activeTab,
        friendsList,
        counterMovies,
        activeTabs,
        beFriends,
        deleteFriend,
    };
})