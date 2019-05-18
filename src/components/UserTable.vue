<template>
    <div>
        <UserForm @getUsers="getUsers">
            <template #activator="{on}">
                <v-btn v-on="on" color="primary">Tạo mới người dùng</v-btn>
            </template>
        </UserForm>
        <v-btn @click="getUsers" color="primary">Tải lại</v-btn>
        <v-data-table :items="users" :headers="headers" class="elevation-1">
            <template #items="props">
                <router-link tag="tr" :to="`/users/${props.item.id}`">
                    <td class="text-xs-left">{{props.item.id}}</td>
                    <td class="text-xs-left">{{props.item.username}}</td>
                </router-link>
            </template>
        </v-data-table>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserForm from "./UserForm";

    export default {
        name: "UserTable",
        components: {UserForm},
        data() {
            return {
                users: [],
                headers: [
                    {
                        text: "id",
                        value: "id"
                    },
                    {
                        text: "username",
                        value: "username"
                    }
                ]
            }
        },
        mounted() {
            this.getUsers();
        },
        methods: {
            getUsers() {
                axios({
                    method: 'GET',
                    url: 'http://localhost:8080/users',
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    proxy: {
                        port: 8080
                    }
                }).then(
                    response => {
                        this.users = response.data;
                    }
                ).catch(
                    err => console.log(err)
                )
            }
        }
    }
</script>

<style scoped>

</style>