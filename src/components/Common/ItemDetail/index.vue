<template src="./template.html">

</template>

<script>
    export default {
        name: "ItemDetail",
        props: {
            data: Object,
            active: Boolean
        },
        // created(){

        // },
        computed: {
            dataDetail() {
                return this.data
            },
            activeComponent() {
                return this.active
            }
        },
        // data(){
        //     return{

        //     }
        // },
        methods: {
            closeDetail() {
                this.$emit("close-detail", false)
            }
        }
    }
</script>

<style lang="scss">
    @import "./item-detail.scss";
</style>