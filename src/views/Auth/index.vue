<template src="./template.html"></template>
<script>
    import EventBus from "../../EventBus";
    import {
        mapActions,
        mapGetters
    } from "vuex";
    export default {
        name: "Author",
        data() {
            return {
                active: true,
                show4: false,
                userInfo: {
                    password: '123456',
                    username: "kentruong",
                },
                rules: {
                    required: value => !!value || 'Required.',
                    min: v => v.length >= 8 || 'Min 8 characters',
                    emailMatch: () => (`The email and password you entered don't match`),
                },

            }
        },
        created() {
            EventBus.$on(
                "showLogin",
                val => (this.active = val)
            );
        },
        computed: {
            ...mapGetters(['getInfoUser']),
            myData() {
                console.log(this.getInfoUser)
                return this.getInfoUser
            }
        },
        methods: {
            ...mapActions({
                demoLogin: "demoLogin"
            }),
            login() {
                this.demoLogin(this.userInfo);
            }
        },
    }
</script>
<style lang="scss">
    @import "./author.scss";
</style>