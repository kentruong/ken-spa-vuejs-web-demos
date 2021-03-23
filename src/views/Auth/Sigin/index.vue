<template src="./template.html">

</template>

<script>
    import EventBus from '../../../events/EventBus.js';
    import {
        mapActions
    } from "vuex"
    export default {
        name: "Sigin",
        created() {
            EventBus.$on('active-login', val => {
                this.active = val
            });
        },
        data() {
            return {
                active: false,
                user: {
                    username: "kentruong",
                    password: "123456"
                },
                show4: false,
                password: 'Password',
            }
        },
        methods: {
            ...mapActions("auth", ["login"]),

            handleLogin() {
                this.login(this.user);
                setTimeout(() => {
                    this.active = false
                }, 1000);
            }
        }
    }
</script>

<style lang="scss">
    @import "./sigin.scss";
</style>