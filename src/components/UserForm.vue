<template>
    <div>
        <v-dialog v-model="dialog" max-width="1000" class="elevation-5">
            <template #activator="{on}">
                <slot name="activator" :on="on"></slot>
            </template>
            <v-card>
                <v-card-title>
                    <h1>Tạo mới người dùng</h1>
                </v-card-title>
                <v-card-text>
                    <v-text-field v-model="editUser.username"></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-btn @click="saveUser" color="success">Lưu</v-btn>
                    <v-btn @click="dialog = false" color="error">Bỏ</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: "UserForm",
        data() {
            return {
                dialog: false,
            }
        },
        props: {
            user: {
                type: Object,
                default: function () {
                    return {
                        id: 0,
                        username: ""
                    }
                }
            }
        },
        computed: {
            editUser: {
                get: function () {
                    return this.user;
                },
                set: function (value) {
                    this.editUser = value;
                }
            }
        },
        methods: {
            saveUser(){
                const url = `http://localhost:8080/users/${this.user.id === 0 ? '' : this.user.id}`;
                const method = this.user.id === 0 ? 'POST' : 'PUT';
                const user = {...this.user};
                axios({
                    url: url,
                    method: method,
                    data: user,
                    headers: {
                        'Access-Control-Allow-Origin': '*',
                    },
                    proxy: {
                        port: 8080
                    }
                }).then(
                    () => {
                        this.dialog = false;
                        if(method === 'POST'){
                            this.$emit('getUsers');
                        } else {
                            this.$emit('findUserDetail');
                        }
                    }
                ).catch(
                    err => console.log(err)
                );

            }
        }
    }
</script>

<style scoped>

</style>