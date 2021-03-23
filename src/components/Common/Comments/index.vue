<template src="./template.html">

</template>

<script>
    import ModalConfirm from "../../Common/ModalConfirm"
    export default {
        name: "Comments",
        components: {
            "modal-confirm": ModalConfirm
        },
        props: {
            data: Array,
        },
        created() {
            this.dataComments = this.data;
        },
        computed: {
            listComments() {
                return this.dataComments;
            }
        },
        data() {
            return {
                activeModal: false,
                activeinput: false,
                id: 0,
                dataComments: [],
                contentComment: "",
                title: ""
            }
        },
        methods: {
            handleEditComment(id) {
                this.activeModal = true;
                this.title = "Edit Comments ?";
                this.id = id;
                this.activeinput = true;
                console.log('Edit', id);
                this.dataComments.forEach(element => {
                    if (element.commentAuth.id_cmt === id) {
                        this.contentComment = element.commentAuth.content
                        console.log('this.contentComment', this.contentComment);
                    }
                });
                // const indexcmt = this.dataComments.findIndex(element => element.commentAuth.id_cmt === val.id);
                // if(indexcmt > -1){
                //     this.dataComments.splice(indexcmt, 1);
                // }
            },
            editComment(val) {
                console.log('val', val);
                this.activeModal = val.closeModal;
                this.dataComments.forEach(element => {
                    if (element.commentAuth.id_cmt === val.id) {
                        element.commentAuth.content = val.contents
                    }
                });
            },
            handleDeleteComment(id) {
                this.title = "Bạn có chắc muốn xóa comment này ?";
                this.activeinput = false;
                this.activeModal = true;
                this.id = id
                console.log('Delete', id);
            },
            closeModal(val) {
                this.activeModal = val;
            },
            deleteComment(val) {
                this.activeModal = val.closeModal;
                const indexcmt = this.dataComments.findIndex(element => element.commentAuth.id_cmt === val.id);
                if (indexcmt > -1) {
                    this.dataComments.splice(indexcmt, 1);
                }
            },
            handlePostComment() {
                if (this.contentComment) {
                    this.$emit("data-post-comment", this.contentComment);
                    this.contentComment = "";
                }
            }
        }
    }
</script>

<style lang="scss">
    @import "./comments.scss";
</style>