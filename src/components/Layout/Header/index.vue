<template src="./template.html">

</template>

<script>
    import EventBus from '../../../events/EventBus.js';
    import {
        mapGetters,
        mapActions
    } from "vuex";

    export default {
        name: "Header",
        components: {
            // Sigin,
        },
        computed: {
            ...mapGetters("auth", ["user"]),
            userInfo() {
                return this.user;
            },
        },
        mounted() {

        },
        data() {
            return {
                active: 1,
                items: [{
                    icon: "account-music-outline",
                    title: "Profile",
                    path: "profile"
                }, {
                    icon: "",
                    title: "Logout",
                    path: "logout"
                }, ]
            }
        },
        methods: {
            ...mapActions("auth", [""]),
            login() {
                console.log('ok');
                EventBus.$emit('active-login', true);
            },
            logout() {
                localStorage.removeItem('username');
                EventBus.$emit("logout")
            }
        },
        watch: {

        }
    }
</script>

<style lang="scss">
    @import "header.scss";
</style>