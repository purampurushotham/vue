<template>
    <div>
        <p>{{msg}}</p>
        <input type="text" :value="msg" @input="changedMessage">
        <p>{{message}}</p>
    </div>
</template>
<script>
    export default{
        props: ['msg'],
        data(){
            return{
                message : ""
            }
        },
        methods:{
            changedMessage:function (event) {
                this.message=event.target.value;
                this.$emit("messageChanged",this.message)
            }
        }
    }
</script>