<template>
    <form @submit.prevent="searchUsersStore.getAllUsers(page)">
        <input 
            type="number" 
            class="search-input" 
            placeholder="input users" 
            v-model="page"
        >
    </form>

    <Loader v-if="searchUsersStore.loader == true" />

    <div v-if="searchUsersStore.users.length > 0">
        <div>
            Список пользователей: {{ searchUsersStore.users.length }}
        </div>
        
        <div 
            v-for="user of searchUsersStore.users" 
            :key="user.id">
            <User
                :user="user"
                :isSearch="isSearch"
            />
        </div>
    </div>

    <div v-else style="color: red;">Список пользовтелей пуст</div>


</template>

<script setup>
import { ref } from 'vue';
import { useSearchUsersStores } from '../stores/SearchUsersStores';
import User from './User.vue';
import Loader from './Loader.vue';

const page = ref('');
const searchUsersStore = useSearchUsersStores();
let isSearch = true;
</script>

<style lang="css" scoped>
.search-input {
    border: 1px solid #e7e7e7;
    width: 100%;
    height: 40px;
    padding: 0 10px;
    margin-bottom: 20px;
    border-radius: 10px;
}
</style>