<template>
  <div>
    <Siderbar />
    <div class="main-wrapper">
      <section class="cta-section theme-bg-light px-3 py-5 p-md-5">
        <div class="container text-left">
          <h2 class="heading"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="tags" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" class="svg-inline--fa fa-tags fa-w-20 fa-fw me-2"><path fill="currentColor" d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z"></path></svg>
            {{ tagName }} <span class="lead text-muted pl-2">{{ totalArticles }}</span></h2>
        </div>
      </section>
      <section class="blog-list py-2 p-md-4">
        <div class="container">
          <div class="row">
              <div class="col-12 col-lg-11 col-xl-8">
                <div id="page-tag">
                    <ul class="post-content pl-0 ps-3 ps-md-4">
                        <li v-for="article of articles" :key="article.slug" class="d-flex justify-content-between pl-md-3 pr-md-3"> 
                            <a :href="setUrlPost(article.slug)" class="theme-link">{{ article.title }}</a> 
                            <span class="dash flex-grow-1"></span> 
                            <span class="text-muted small">{{ formatDateByLocale(article.date) }}</span>
                        </li>
                    </ul>
                </div>
              </div>

              <NavRight />

            </div>
          </div>
        </section>
      </div>
      <Footer />
  </div>
</template>

<script>
  export default {
    async asyncData({ $content, params, route }) {
        const tagName = params.slug
        const linkbre = [
            {
                "name": "Tags",
                "link": "/tags"
            }
        ]

        const currentPage = route.query.page ? parseInt(route.query.page) : 1;
        const perPage = 100;
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
            .only(['title', 'description', 'date', 'slug'])
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
            perPage,
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
        setUrlPost(path) {
            if (!path) {
                return path;
            }
            const url = "/" + path + "/"
            return url;
        }
    },
    head() {
      const title = this.tagName + " - Tags | " + process.env.namePage
      const description = process.env.description
      return {
        title,
        link: [{ hid: 'canonical', rel: 'canonical', href: process.env.baseUrl + "/tags/" + this.tagName + "/" }],
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: description
          },
          // Open Graph
          {
            hid: "og:url",
            property: "og:url",
            content: process.env.baseUrl + "/tags/" + this.tagName + "/",
          },
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