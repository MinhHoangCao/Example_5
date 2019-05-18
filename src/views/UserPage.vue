<template>
    <div>
        <v-app>
            <UserTable></UserTable>
        </v-app>
    </div>
</template>

<script>
    import UserTable from "../components/UserTable";
    import UserForm from "../components/UserForm";

    export default {
        name: "UserPage",
        components: {UserForm, UserTable},
        methods: {

        }
    }
</script>

<style scoped>

</style>