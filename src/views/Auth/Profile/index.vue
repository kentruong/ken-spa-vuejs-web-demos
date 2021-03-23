<template src="./template.html">

</template>

<script>
    import {
        mapGetters
    } from 'vuex';
    import UserInfo from "./UserInfo";
    import EventBus from '../../../events/EventBus.js';
    export default {
        name: "Profile",
        components: {
            "user-info": UserInfo
        },
        created() {
            this.isLogin();
            EventBus.$on(
                "logout", () => (this.isLogin())
            );
            EventBus.$on(
                "change-avater", () => (this.changeAvatar++)
            );
        },
        computed: {
            ...mapGetters("auth", ["user"]),
            getInfo() {
                return this.user;
            }
        },
        data() {
            return {
                username: "",
                avartar: "https://i.pravatar.cc/150?img=",
                changeAvatar: 9
            }
        },
        methods: {
            isLogin() {
                localStorage.getItem("username") ? console.log("true") : this.login();
            },

            login() {
                EventBus.$emit('active-login', true);
                this.$router.push('/')
            }
        },
        watch: {
            // username(val) {
            //     this.username = val
            // }
        }
    }
</script>

<style lang="scss">
    @import "./profile.scss";
</style>