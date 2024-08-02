import { defineStore } from "pinia";



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
            
        }
    }

});