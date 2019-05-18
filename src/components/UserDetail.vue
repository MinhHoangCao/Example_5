<template>
    <div>
        <h1>Thông tin chi tiết</h1><br/><br/>
        <h3>Tên: {{user.username}}</h3>
        <br/><v-divider></v-divider><br/>
        <UserForm :user="{...user}" @findUserDetail="findUserDetail">
            <template #activator="{on}">
                <v-btn v-on="on" color="primary">Sửa</v-btn>
            </template>
        </UserForm>
        <v-btn color="error" @click="deleteUser">Xóa</v-btn>
    </div>
</template>

<script>
    import axios from 'axios';
    import UserForm from "./UserForm";

    export default {
        name: "UserDetail",
        components: {UserForm},
        data(){
            return {
                user: {
                    id: 0,
                    username: ""
                }
            }
        },
        props: {
            id: {
                type: Number,
                default: function () {
                    return 0;
                }
            }
        },
        mounted(){
            this.findUserDetail();
            console.log(this.user);
        },
        methods: {
            findUserDetail(){
                const url = `http://localhost:8080/users/${this.id}`;
                const method = 'GET';
                axios({
                    url: url,
                    method: method,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    proxy: {
                        port: 8080
                    }
                }).then(
                    response => {
                        this.user = response.data;
                    }
                ).catch(
                    err => console.log(err)
                )
            },
            deleteUser(){
                const url = `http://localhost:8080/users/${this.id}`;
                const method = 'DELETE';
                axios({
                    url: url,
                    method: method,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    proxy: {
                        port: 8080
                    }
                }).then(
                    () => {
                        this.$router.push("/users");
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