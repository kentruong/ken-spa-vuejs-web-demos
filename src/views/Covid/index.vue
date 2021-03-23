<template src="./template.html">

</template>

<script>
    import EventBus from '../../events/EventBus'
    import {
        mapActions,
        mapGetters
    } from "vuex";
    import Items from "../../components/Common/Items";
    export default {
        name: "Home",
        components: {
            Items
        },
        created() {
            EventBus.$on('refesh-data', () => {
                this.loading = true;
                this.fetchData();
            })
            this.fetchData();
        },
        computed: {
            ...mapGetters("covid", ["getData"]),
            datas() {
                return this.getData;
            },
            checkdata() {
                return !!this.getData && !!this.loading
            }
        },
        mounted() {
            this.interval = setInterval(() => {
                if (this.value === 100) {
                    return (this.value = 0)
                }
                this.value += 10
            }, 200);
        },
        data() {
            return {
                user: {},
                interval: {},
                value: 0,
                loading: true
            }
        },
        beforeDestroy() {
            clearInterval(this.interval)
        },
        methods: {
            ...mapActions("covid", ["setInfo"]),
            fetchData() {
                setTimeout(() => {
                    this.loading = false
                }, 1500)
                this.setInfo();
            }
        }
    }
</script>

<style lang="scss">
    @import "./covid.scss";
</style>