<template>
  <div>
    <Siderbar />
    <HomeTopbar :pageName="tagName" :showHome="true" :linkbre="linkbre" />
    <div id="main-wrapper">
        <div id="main" :class="isHideMain == true?'hidden':''">
            <div class="row">
                <div class="col-12 col-lg-11 col-xl-8">
                    <div id="page" class="post pb-5 pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4 mb-md-4">
                        <div id="page-tag">
                            <h1 class="pl-lg-2"> <i class="fa fa-tag fa-fw text-muted"></i> {{ tagName }} <span class="lead text-muted pl-2">{{ totalArticles }}</span></h1>
                            <ul class="post-content pl-0">
                                <li v-for="article of articles" :key="article.slug" class="d-flex justify-content-between pl-md-3 pr-md-3"> 
                                    <a :href="article.path.replace('/articles', '')">{{ article.title }}</a> 
                                    <span class="dash flex-grow-1"></span> 
                                    <span class="text-muted small">{{ formatDateByLocale(article.date) }}</span>
                                </li>
                            </ul>
                        </div>
                        <Pagination
                                :current-page="currentPage"
                                :total="totalArticles"
                                v-if="lastPage > 1" />
                    </div>
                </div>
                <NavRight />
            </div>
            <Footer />
        </div>
    </div>
    <Bottom />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params }) {
        const tagName = params.slug
        const linkbre = [
            {
                "name": "Tags",
                "link": "/tags"
            }
        ]

        const currentPage = $nuxt.$route.query.page ? parseInt($nuxt.$route.query.page) : 1;
        const perPage = 20;
        const allArticles = await $content("articles")
        .where({
          'tags': {
            $regex: [params.slug]
          }
        })
        .fetch();
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
            .only(['title', 'description', 'date'])
            .sortBy('date', 'desc')
            .limit(perPage)
            .skip(skipNumber())
            .where({
                'tags': {
                    $regex: [params.slug, 'i']
                }
            })
            .fetch()

        return { 
            tagName,
            linkbre,
            articles,
            totalArticles,
            currentPage,
            lastPage
        }
    },
    computed: {
        isHideMain() {
            if (this.$store.state.search) {
                return true;
            }
            return false;
        }
    },
    methods: {
        formatDateByLocale(d) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(d).toLocaleDateString('en', options)
        },
    },
    head() {
      const title = this.tagName + " - Tags | " + process.env.namePage
      const description = process.env.description
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