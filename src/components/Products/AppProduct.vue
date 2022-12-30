<template>
    <div class="card">
        {{ product.nome }} - R$: {{ product.preco }}<br>
        <button @click="addItemCart()">+</button>
        <button @click="removeItemCart()">-</button>
    </div>
</template>
<script>
    export default{
        props: { product: Object },
        methods:{
            addItemCart(){
                this.$store.commit('addCart',this.product)
            },
            removeItemCart(){
                this.$store.commit('removeCart',this.product.id)
            },
        }
    }
</script>
<style>
    .card{
        padding: 5px;
        background: rgb(168, 221, 223);
        margin-bottom: 5px;
    }
</style>