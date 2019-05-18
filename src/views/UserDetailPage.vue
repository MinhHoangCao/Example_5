<template>
    <div>
        <v-btn @click="goBack" color="primary">Trở về</v-btn><br/><br/>
        <UserDetail :id="id"></UserDetail>
    </div>
</template>

<script>
    import UserDetail from "../components/UserDetail";

    export default {
        name: "UserDetailPage",
        components: {UserDetail},
        data(){
            return {
                id: Number.parseInt(this.$route.params.id)
            }
        },
        methods: {
            goBack(){
                this.$router.push("/users");
            }
        }
    }
</script>

<style scoped>

</style>