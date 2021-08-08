<template>
  <div>
    <Siderbar />
    <HomeMain :articles="articles" :total="totalArticles" :perPage="perPage" />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, route }) {
      const currentPage = route.query.page ? parseInt(route.query.page) : 1;
      const perPage = 9;
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
        .only(['title', 'description', 'date', 'slug', 'tags'])
        .sortBy('date', 'desc')
        .limit(perPage)
        .skip(skipNumber())
        .fetch()

      return {
        perPage,
        articles,
        totalArticles
      }
    }
  }
</script>