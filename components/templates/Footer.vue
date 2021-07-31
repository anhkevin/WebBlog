<template>
    <footer class="d-flex w-100 justify-content-center">
        <div class="d-flex justify-content-between align-items-center">
            <div class="footer-center">
            <p class="mb-0"> © 2021 - <a :href="baseUrl">{{ namePage }}</a></p>
            </div>
        </div>
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