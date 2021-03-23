<template src="./template.html"></template>
<script>
    import EventBus from '@/events/EventBus.js';
    export default {
        name: "UserInfo",
        props: {
            textbutton: String
        },
        methods: {
            changeAvater() {
                EventBus.$emit("change-avater")
            }
        },
    }
</script>
<style lang="scss">

</style>