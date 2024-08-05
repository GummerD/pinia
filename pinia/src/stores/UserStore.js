import { defineStore } from "pinia";
import { ref, computed, watch } from "vue";

/*
export const useUserStore = defineStore('userStore', {
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
        usersInLocalStorage: localStorage.getItem('users'),
    }),
    getters: {
        beFriend(){
            return this.users.filter(el => el.isWatched)
        },
        counterMovies(){ 
           return this.users.length
        },
        changeUsersInLocalStorage(){
            return this.usersInLocalStorage
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
        },
        existsLocalStorag(){
            if(this.usersInLocalStorage){
                console.log(JSON.parse(this.usersInLocalStorage))
            }
        }
    },

});
*/

export const useUserStore = defineStore('userStore', () => {
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

    const usersInLocalStorage = localStorage.getItem('users');

    if (usersInLocalStorage){
        users.value = JSON.parse(usersInLocalStorage)._value
        console.log(JSON.parse(usersInLocalStorage))
    }

    const beFriend = computed( ()=>{
        return users.value.filter(el => el.isWatched);
    });

    const counterMovies = computed(()=>{ 
        return users.value.length;
    });

    const activeTabs = (number) => {
        activeTab.value = number;
    }

    const beFriends = (id) =>{
        let idx = users.value.findIndex(el => el.id === id);
        users.value[idx].isWatched = !users.value[idx].isWatched;
    }

    const deleteFriend = (id) =>{
        users.value = users.value.filter(el => el.id != id)
    }

    watch(
        ()=>users,
        (state)=>{
            localStorage.setItem('users', JSON.stringify(state))
        },
        {deep: true}
    )

    return{
        users,
        activeTab,
        beFriend,
        counterMovies,
        activeTabs,
        beFriends ,
        deleteFriend,
    }
})
