<template src="./template.html">

</template>

<script>
    import EventBus from '../../../events/EventBus';
    import ItemDetail from "../ItemDetail"
    export default {
        name: "Items",
        components: {
            "item-detail": ItemDetail
        },
        props: {
            initData: Array,
            title: String
        },
        created() {
            console.log('this.infoDetail', this.infoDetail);
        },
        computed: {
            elements() {
                return this.initData
            }
        },
        data() {
            return {
                infoDetail: {},
                activeDetail: false,
            }
        },
        methods: {
            handleViewDetail(id) {
                this.initData.filter(item => {
                    if (item.countryInfo._id === id) {
                        this.infoDetail = item
                    }
                });
                this.activeDetail = true
            },
            closeDetail(val) {
                this.activeDetail = val
            },
            refeshData() {
                EventBus.$emit('refesh-data');
            }
        },
        watch: {
            infoDetail(val) {
                this.infoDetail = val
                console.log('message changed', val)
            }
        }
    }
</script>

<style lang="scss">
    @import "./items.scss";
</style>