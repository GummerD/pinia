import { defineStore } from "pinia";
import { useUserStore } from "./UserStore";



let usersUrl = `https://reqres.in/api/users?page=`;

export const useSearchUsersStores = defineStore( 'searchUsersStore', {
    state: () => ({
        users: [],
        loader: false,
    }),
    actions: {
        async getAllUsers(page){
            this.loader = true;
            const response = await fetch(`${usersUrl}${page}`);
            const data = await response.json();
            //console.log(data.data);
            setTimeout(() => {
                this.users = data.data;
                this.loader = false;
            }, 1000);
            
        },
        addToUsers(object){
            const userStore = useUserStore();
            //console.log(object)
            //object.id = crypto.randomUUID();
            //object.isWatched = false;
            userStore.users.push({...object, isWatched: false, id: crypto.randomUUID()  });
            //console.log(userStore.users);
            userStore.activeTab = 1;
        }
    }

});