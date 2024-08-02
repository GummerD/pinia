<template>
    <div class="movie">
        <img class="movie-img" :src="user.avatar"
            :alt="user.first_name">
        <div class="movie-name">
            {{ user.first_name }} ({{ user.release_date }})
        </div>
        <span class="movie-overview">{{ user.last_name }}</span>
        <div class="movie-buttons" v-if="!isSearch">
            <button 
                class="btn movie-buttons-watched" 
                @click="userStore.beFriends(user.id)">
                    <span v-if="!user.isWatched">Дружить</span>
                    <span v-else>Недружить</span>
            </button>
            <button 
                class="btn movie-buttons-delete"
                @click="userStore.deleteFriend(user.id)">
                    Удалить друга
            </button>
        </div>
        <div class="movie-buttons" v-else>
            <button 
                class="btn movie-buttons-watched" 
                @click="searchUserStore.addToUsers(user)"
                >
                <span>Добавить друга</span>
                   
            </button>
        </div>
    </div>
</template>

<script setup>

import { useUserStore } from '../stores/UserStore';
import { useSearchUsersStores } from '../stores/SearchUsersStores';

const userStore = useUserStore();
const searchUserStore = useSearchUsersStores();

const props = defineProps({
    user: {
        type: Object,
        required: true,
        default: () => { }
    },
    isSearch: {
        type: Boolean,
        required: false,
        default: false
    }
})

</script>

<style lang="css">
.movie {
    display: grid;
    grid-template-columns: 200px 1fr;
    column-gap: 30px;
    margin-bottom: 20px;
    border: 2px solid #efefef;
    padding: 10px;
    border-radius: 10px;
}

.movie-accept {
    margin-right: 10px;
}

.movie-img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
}

.movie-name {
    display: flex;
    align-items: center;
    font-size: 20px;
    margin-bottom: 20px;
}

.movie-overview {
    display: block;
    margin-bottom: 20px;
}

.movie-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
}

.movie-buttons-watched {
    color: #fff;
    background: #1eb4c3 !important;
}

.movie-buttons-watched__icon {
    width: 15px;
    margin-left: 10px;
}

.movie-buttons-delete {
    color: #fff;
    background: #ff2a2a !important;
}
</style>