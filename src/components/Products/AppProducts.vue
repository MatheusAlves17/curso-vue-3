<template>
    <div>
        <AppProduct
            v-for="product in $store.state.products"
            :key="product.id"
            :product="product"
        >
        </AppProduct>
    </div>
    <pre>
        {{ $store.state.cart }}
    </pre>
</template>
<script>
import AppProduct from './AppProduct.vue';

    export default{
    components: { AppProduct },
}
</script>