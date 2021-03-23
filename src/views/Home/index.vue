<template src="./template.html"></template>
<script>
    import Carousel from "@/components/Layout/Carousel"
    export default {
        name: "Home",
        components: {
            Carousel
        },
        data() {
            return {
                selection: 1,
                services: [{
                    id: 1,
                    title: "Massage Tinh dầu",
                    info: "Từng cái chạm ấm nóng từ đôi bàn tay, cùng hương tinh dầu được chọn tuỳ theo tâm trạng, sở thích cá nhân của từng Khách.",
                    image: "https://saspa.vn/wp-content/uploads/2021/03/IMG_2563_print.jpg"
                }, {
                    id: 2,
                    title: "Massage toàn thân Valmont",
                    info: "Liệu trình Chăm sóc cơ thể toàn diện – Skin Scrub, Massage body cùng dòng mỹ phẩm cao cấp Valmont đến từ đất nước Thụy Sĩ xinh đẹp.",
                    image: "https://saspa.vn/wp-content/uploads/2021/03/A230EA7C-CDBE-4E8F-8148-23DAB193D7CF.jpeg"
                }, {
                    id: 3,
                    title: "Chăm sóc da mặt Dermalogica",
                    info: "Phương Tây có câu “Old but Gold” – những gì được trải nghiệm qua thời gian thì càng hoàn thiện hơn. Giới làm đẹp cũng không ngoại lệ!",
                    image: "https://saspa.vn/wp-content/uploads/2021/03/IMG_2763_print.jpg"
                }]
            }
        }
    }
</script>
<style lang="scss">
    @import "./home.scss";
</style>