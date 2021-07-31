<template>
  <div>
    <Siderbar />
    <PostContent :post="article" />
    <Bottom />
  </div>
</template>

<script>

  export default {
    async asyncData({ $content, params }) {
      const article = await $content('articles', params.slug).fetch()

      return { article }
    },
    head() {
      const title = this.article.title + " | TianDev"
      const description = this.article.description
      return {
        title,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          // Open Graph
          {
            hid: 'og:title',
            property: 'og:title',
            content: title
          },
          {
            hid: 'og:description',
            property: 'og:description',
            content: description
          },
          // // Twitter Card
          {
            hid: 'twitter:title',
            name: 'twitter:title',
            content: title
          },
          {
            hid: 'twitter:description',
            name: 'twitter:description',
            content: description
          }
        ]
      }
    }
  }
</script>