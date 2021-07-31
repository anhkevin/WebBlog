<template>
  <div>
    <Siderbar />
    <HomeMain :articles="articles" :total="totalArticles" />
    <Bottom />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content }) {
      const currentPage = $nuxt.$route.query.page ? parseInt($nuxt.$route.query.page) : 1;
      const perPage = 10;
      const allArticles = await $content("articles").fetch();
      const totalArticles = allArticles.length;

      // use Math.ceil to round up to the nearest whole number
      const lastPage = Math.ceil(totalArticles / perPage);

      // use the % (modulus) operator to get a whole remainder
      const lastPageCount = totalArticles % perPage;

      const skipNumber = () => {
        if (currentPage === 1) {
          return 0;
        }
        if (currentPage === lastPage) {
          return totalArticles - lastPageCount;
        }
        return (currentPage - 1) * perPage;
      };

      const articles = await $content('articles')
        .only(['title', 'description', 'date', 'slug'])
        .sortBy('date', 'desc')
        .limit(perPage)
        .skip(skipNumber())
        .fetch()

      return {
        articles,
        totalArticles
      }
    }
  }
</script>