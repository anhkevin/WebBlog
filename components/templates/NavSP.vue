<template>
    <div>
        <i id="sidebar-trigger" class="fas fa-bars fa-fw" @click="clickMenu"></i>
        <div id="topbar-title">{{ name_site }}</div>
        <i id="search-trigger" class="fas fa-search fa-fw"></i>
    </div>
</template>

<script>
export default {
    name: 'NavSP',
    methods: {
        clickMenu() {
            if (this.$store.state.menu) {
                this.$store.commit('setMenu', false)
                console.log("true");
            } else {
                this.$store.commit('setMenu', true)
                console.log("false");
            }
        }
    },
    computed: {
        name_site() {
            return process.env.namePage
        },
    }
}
</script>