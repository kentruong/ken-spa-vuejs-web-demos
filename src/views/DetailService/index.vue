<template src="./template.html"></template>
<script>
    import comments from "../../components/Common/Comments";
    export default {
        name: "DetailService",
        components: {
            comments
        },
        created() {
            this.initData();
        },
        data() {
            return {
                title: "",
                id: 0,
                prices: [],
                images: [],
                contents: "",
                dataComment: [{
                    commentAuth: {
                        id_cmt: 1,
                        name: "Bé Na",
                        content: "Trải nghiệm tốt",
                        img: "https://i.pravatar.cc/150?img=20",
                        date: "20/03/2021"
                    },
                    commentItems: [{
                        id: 1,
                        name: "Donald Trump",
                        content: "Giá cả có phù hợp với dịch vụ không bạn ?",
                        img: "https://i.pravatar.cc/150?img=21",
                        date: "23/02/2021"
                    }, {
                        id: 2,
                        name: "Putin",
                        content: "Giá cả hợp lý và phục vụ nhiệt tình",
                        img: "https://i.pravatar.cc/150?img=39",
                        date: "30/12/2020"
                    }, {
                        id: 3,
                        name: "Obama",
                        content: "Giá cả hợp lý và phục vụ nhiệt tình",
                        img: "https://i.pravatar.cc/150?img=10",
                        date: "1/12/2020"
                    }, {
                        id: 4,
                        name: "Kim jong-un",
                        content: "Cám ơn bạn",
                        img: "https://i.pravatar.cc/150?img=21",
                        date: "23/03/2021"
                    }, ]
                }, {
                    commentAuth: {
                        id_cmt: 2,
                        name: "Sun Life",
                        content: "Tuyệt vời",
                        img: "https://i.pravatar.cc/150?img=30",
                        date: "19/03/2021"
                    },
                    commentItems: [{
                        id: 1,
                        name: "Victorya",
                        content: "Giá cả có phù hợp với dịch vụ không bạn ?",
                        img: "https://i.pravatar.cc/150?img=33",
                        date: "8/01/2020"
                    }, {
                        id: 2,
                        name: "Lê hữu Tín",
                        content: "Giá cả hợp lý và phục vụ nhiệt tình",
                        img: "https://i.pravatar.cc/150?img=54",
                        date: "17/07/2020"
                    }, {
                        id: 3,
                        name: "Nguyễn Thanh Hải",
                        content: "Giá cả hợp lý và phục vụ nhiệt tình",
                        img: "https://i.pravatar.cc/150?img=55",
                        date: "9/09/2020"
                    }, {
                        id: 4,
                        name: "Nguyễn Song Tài",
                        content: "Cám ơn bạn",
                        img: "https://i.pravatar.cc/150?img=11",
                        date: "23/03/2021"
                    }, ]
                }, ],
            }
        },
        methods: {
            initData() {
                this.title = this.$route.params.title;
                this.id = this.$route.params.id;
                console.log(this.id)
                if (this.id == 1) {
                    this.prices = [
                        'Giá tham khảo cho liệu trình:',
                        'Gói 60 phút giá 450,000 VND',
                        'Gói 90 phút giá 650,000 VND'
                    ];
                    this.images = [
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_0765_Original-scaled.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_5194.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_5197.jpg"
                    ];
                    this.contents = "Trong rất nhiều liệu trình Massage thì Massage Oil Blend – Massage bằng tinh dầu của Sả luôn là liệu trình mang lại những cảm xúc thăng hoa cho người dùng. Từng cái chạm ấm nóng từ đôi bàn tay, cùng hương tinh dầu được chọn tuỳ theo tâm trạng, sở thích cá nhân của từng Khách, liệu trình này chắc chắn sẽ xua tan căng thẳng, mệt mỏi, giúp bạn có một giấc ngủ sâu hơn nhờ việc lưu thông đồng đều máu huyết, đồng thời thư giãn toàn bộ cơ bắp sau một ngày dài."
                    return
                }
                if (this.id == 2) {
                    this.prices = [
                        'Giá dịch vụ Skin Scrub – Body Valmont toàn diện: 1,450,000 VND',
                        'Thời gian của liệu trình: 135 phút'
                    ];
                    this.images = [
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3196.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3189.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3240-scaled.jpg"
                    ];
                    this.contents = "Cuối cùng, liệu trình được hoàn thiện bằng việc thoa kem dưỡng toàn thân MODELAGE CREAM. Bạn hãy tưởng tượng da sau khi được Massage như được phết một lớp bơ mềm thơm phưng phức, bảo vệ da khỏi những tác hại xấu từ môi trường và duy trì độ căng mướt.Không điều gì khiến cho phụ nữ vui vẻ hơn việc sở hữu một làn da khỏe đẹp. Nếu bạn không có quá nhiều thời gian cho việc chăm sóc da cơ thể hoặc quá biếng lười, ngại xức đủ thứ kem dưỡng lỉnh kỉnh khó nhớ. Chỉ cần book ngay không cần suy nghĩ GÓI CHĂM SÓC BODY TOÀN DIỆN này và tận hưởng từng khoảnh khắc. Một tuần/ 1 lần thôi cũng đừng nhiều hơn. Mình cùng nhau đồng hành trên chặng đường chăm da đẹp mãi thách thức thời gian, bạn nhé!"
                    return
                }
                if (this.id == 3) {
                    this.prices = [
                        'GIÁ THAM KHẢO:',
                        'Gói chăm sóc da mặt cơ bản với Dermalogica: 550,000 VND cho 60 phút',
                        'Gói chăm sóc da mặt nâng cao với Dermalogica: 750,000 VND cho 90 phút.'
                    ];
                    this.images = [
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3186.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3194-scaled.jpg",
                        "https://sa.teekayleo.com/wp-content/uploads/2020/12/IMG_3217-scaled.jpg"
                    ];
                    this.contents = "Với những người yêu thích skincare và có quan tâm chút ít đến mỹ phẩm thì cái tên Dermalogica đã quá xá quen thuộc rồi. Ấn tượng của Sả khi lần đầu thấy dòng skincare này cách đây nhiều năm là: Mỹ phẩm gì mà trông…nghiêm túc quá! Thân trắng, chữ xám, không một chút…hấp dẫn, thậm chí giống như tuýp thuốc vừa mang ra từ phòng thí nghiệm. Nhưng đó chính xác là những gì Dermalogica muốn người tiêu dùng “định nghĩa” mình trong thế giới mỹ phẩm bao la và có phần phù phiếm này rằng: Tôi là dược mỹ phẩm (Dermalogica được ra đời từ phòng thí nghiệm của Học viện Nghiên cứu Da Quốc tế (IDI), Mỹ). Tôi giản đơn (loại trừ triệt để các thành phần gây kích ứng bao gồm alcohol, lanolin, dầu khoáng, màu và mùi nhân tạo). Tôi đặc trị (với các dòng mỹ phẩm chuyên biệt dành cho da thường, da hỗn hợp, da khô hay da mụn)."
                    return
                }
            },
            postComment(val) {
                let length = this.dataComment.length;
                let random = Math.floor(Math.random() * 11);
                let today = new Date();
                console.log('random', random);
                const comment = {
                    commentAuth: {
                        id_cmt: length + random,
                        name: "Anonymous",
                        content: val,
                        img: "https://i.pravatar.cc/150?img=" + random,
                        date: today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear()
                    },
                    commentItems: []
                }
                this.dataComment.push(comment);
            }

        },
    }
</script>
<style lang="scss">
    @import "./deatail-service.scss";
</style>