import { defineStore } from "pinia";
import { useUserStore } from "./UserStore";

import { ref } from "vue";

let usersUrl = `https://reqres.in/api/users?page=`;

//Сравнение Option API и Composition API:

/* // Options API:
export const useSearchUsersStores = defineStore( 'searchUsersStore', {;
    state: () => ({;
        users: [],;
        loader: false,;
    }),;
    actions: {;
        async getAllUsers(page){;
            this.loader = true;
            const response = await fetch(`${usersUrl}${page}`);
            const data = await response.json();
            //console.log(data.data);
            setTimeout(() => {;
                this.users = data.data;
                this.loader = false;
            }, 1000);
            
        },;
        addToUsers(object){;
            const userStore = useUserStore();
            //console.log(object);
            //object.id = crypto.randomUUID();
            //object.isWatched = false;
            userStore.users.push({...object, isWatched: false, id: crypto.randomUUID()  });
            //console.log(userStore.users);
            userStore.activeTab = 1;
        };
    };

});
*/

//Composition API:
export const useSearchUsersStores = defineStore('searchUsersStores', () => {
    const loader = ref(false);
    const users = ref([]);

    const getAllUsers = async(search) => {
        loader.value = true;
        const response = await fetch(`${usersUrl}${search}`);
        const data = await response.json();
        //console.log(data.data);
        setTimeout(() => {;
            users.value = data.data;
            loader.value = false;
        }, 1000);
    }

    const addUser = (oject) => {;
        const userStore = useUserStore();
        //console.log(object);
        //object.id = crypto.randomUUID();
        //object.isWatched = false;
        userStore.users.push({...oject, isWatched: false, id: crypto.randomUUID()});
        //console.log(userStore.users);
        userStore.activeTab = 1;
    };

    return {
        loader, 
        users,
        getAllUsers,
        addUser
    }
})