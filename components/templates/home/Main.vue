<template>
    <div class="main-wrapper">
        <section class="cta-section theme-bg-light py-3">
            <div class="container text-center">
                <h2 class="heading">Life is a Journey of Exploration</h2>
                <div class="single-form-max-width pt-3 mx-auto">
                    <form class="signup-form row g-2 g-lg-2 align-items-center">
                        <div class="col-12">
                            <input 
                                v-model="searchQuery"
                                autocomplete="off"
                                type="text" 
                                id="search" 
                                name="search" 
                                class="form-control me-md-1 search" 
                                placeholder="Please enter search keywords ...">
                        </div>
                    </form>
                </div>
            </div>
            <!--//container-->
        </section>
        <section class="blog-list px-3 py-5 p-md-5">
            <div class="container">
                <div v-if="searchQuery != ''">
                    <HomeArticle :articles="articles_search" />
                </div>
                <div v-else>
                    <HomeArticle :articles="articles" />
                </div>
                <!--//row-->
                <Pagination
                    :pageSize="perPage"
                    :current-page="currentPage"
                    :total="total"
                    v-if="totalPages > 1 && searchQuery == ''" />
            </div>
        </section>
        <Footer />
    </div>
</template>

<script>
export default {
    name: 'HomeMain',
    props: {
        articles: {
            type: Array,
            required: true
        },
        total: {
            type: Number,
            default: 0,
        },
        perPage: {
            type: Number,
            default: 5,
        },
    },
    computed: {
        slogan() {
            return process.env.slogan
        },
        totalPages() {
            return Math.floor(this.total / this.perPage);
        },
        currentPage() {
            return parseInt(this.$route.query.page) || 1;
        },
        isHideMain() {
            if (this.$store.state.search) {
                return true;
            }
            return false;
        }
    },
    data() {
      return {
        searchQuery: '',
        articles_search: []
      }
    },
    watch: {
      async searchQuery(searchQuery) {
        this.$store.commit('setSearch', searchQuery)
        if (!searchQuery) {
          this.articles_search = this.articles
          return
        }
        this.articles_search = await this.$content('articles')
          .only(['title', 'description', 'date', 'slug', 'tags'])
          .limit(6)
          .search(searchQuery)
          .fetch()
      }
    }
}
</script>