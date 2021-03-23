<template src="./template.html"></template>
<script>
    export default {
        name: "Carousel",
        data() {
            return {
                items: [{
                    src: 'https://www.tymyspa.com/FileStorage/Slide/Thumbnail/1.jpg',
                }, {
                    src: 'https://hd1.hotdeal.vn/images/uploads/2016/Thang%2010/05/298544/298544-massage-body-da-nong-mien-phi-xong-hoi-linh-anh-spa-body-1.jpg',
                }, {
                    src: 'https://vimed.org/wp-content/uploads/2020/06/spa-cham-soc-da-mat-uy-tin-o-ha-noi-1.jpg',
                }, {
                    src: 'https://image.thanhnien.vn/1080/uploaded/hongky.qc/mai-han/december/28-12/mh-1/mh-spa-1_bghw.png',
                }, ]
            }
        },
    }
</script>
<style lang="scss">
    @import "./carousel.scss";
</style>