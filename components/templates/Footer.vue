<template>
    <footer class="footer text-center py-4">
        <small class="copyright">Copyright © 2021 - <a :href="baseUrl" target="_blank">{{ namePage }}</a></small>
    </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    baseUrl() {
      return process.env.baseUrl
    },
    namePage() {
      return process.env.namePage
    }
  }
}
</script>