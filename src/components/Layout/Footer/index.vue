<template src="./template.html"></template>

<script>
    export default {
        name: "Footer",
        data() {
            return {
                menus: [{
                    icon: "home-search-outline",
                    title: "40B - 40D Phạm Ngọc Thạch, quận 3, Tp. Hồ Chí Minh"
                }, {
                    icon: "cellphone-iphone",
                    title: "028 3521 0670"
                }, {
                    icon: "email-outline",
                    title: "info@saspa.vn"
                }, {
                    icon: "clock-time-two-outline",
                    title: "Thứ Hai - Chủ Nhật 9.00 - 21.00"
                }, ]
            }
        }
    }
</script>
<style lang="scss">
    @import "./footer.scss";
</style>