<template src="./template.html">

</template>

<script>
    export default {
        name: "ModalConfirm",
        props: {
            active: Boolean,
            id: Number,
            title: String,
            activeinput: Boolean,
            contentComment: String
        },
        created() {
            this.$nextTick(() => {
                this.getContent();
            })
        },
        mounted() {
            this.$nextTick(() => {
                this.content = this.contentComment
                this.getContent();
            })
        },
        // computed:{
        //     contentComputed(){
        //         return this.content;
        //     }
        // },
        data() {
            return {
                content: ""
            }
        },
        methods: {
            getContent() {
                this.content = this.contentComment
            },
            close() {
                this.$emit("close-modal", false)
            },
            remove(val) {
                const data = {
                    closeModal: false,
                    id: val
                }
                this.$emit("remove-data", data)
            },
            change(val) {
                const data = {
                    closeModal: false,
                    id: val,
                    contents: this.content
                }
                this.$emit("change-comment", data)
            }
        },
        watch: {
          contentComment(newVal, oldVal){
             console.log(newVal, oldVal);
             this.content = newVal;
          }
        }
    }
</script>

<style lang="scss">
    @import "./modal-confirm.scss";
</style>
