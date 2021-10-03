<template>
    <div class="flex items-center justify-between h-20 text-sm">
        <div>
            <Logo />
        </div>
        <div class="divide-x-custom divide-grey-400">
            <router-link class="pr-4 hover:bg-gray-200" to="/contact-sales">
                Contact sales</router-link
            >
            <router-link class="pl-4 hover:bg-gray-200" to="/login"> Log in</router-link>
            <router-link
                class="divide-x-skip p-3 ml-4 bg-secondary hover:bg-secondary-hover rounded text-white border-b-color"
                to="/signup"
            >
                Try Notion free</router-link
            >
        </div>
    </div>
</template>

<script>
import Logo from "./Logo.vue";
export default {
    components: { Logo },
};
</script>

<style></style>
