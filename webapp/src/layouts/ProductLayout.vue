<template>
    <div class=" max-w-screen-xl mx-auto">
        <the-navbar/>
        <slot></slot>
    </div>
</template>

<script>
import TheNavbar from '../components/layouts/TheNavbar.vue';
export default {
    components: {TheNavbar}

}
</script>

<style>

</style>